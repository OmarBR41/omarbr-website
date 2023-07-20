import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { GOOGLE_AUTH_EMAIL, GOOGLE_AUTH_PASS } from '@/constants/environment';
import type { Inputs } from '@/modules/forms/ContactForm';

export default async function ContactApi(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message }: Inputs = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.CONTACT_FORM_HOST,
    port: 465,
    secure: true,
    auth: {
      user: GOOGLE_AUTH_EMAIL,
      pass: GOOGLE_AUTH_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} - ${email}`,
      replyTo: email,
      to: process.env.CONTACT_FORM_RECEIVER_EMAIL,
      subject: `Contact message from ${name}`,
      text: message, // plain text body
      html: `<div>There's a new message from your website:<br /><br />${message}<br /><br />From:<br />${name} - ${email}</div>`,
    });

    res.status(200).json({ message: 'success' });
  } catch (err: any) {
    res
      .status(500)
      .json({ error: true, emailSent: false, errors: [err], message: 'Error sending mail through the Contact API' });
  }
}
