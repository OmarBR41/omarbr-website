import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import {
  GOOGLE_ACCESS_TOKEN,
  GOOGLE_AUTH_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REFRESH_TOKEN,
} from '@/common/lib/constants/environment';
import type { Inputs } from '@/modules/forms/ContactForm';

export default async function ContactApi(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message }: Inputs = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    secure: true,
    host: process.env.CONTACT_FORM_HOST,
    auth: {
      type: 'OAuth2',
      user: GOOGLE_AUTH_EMAIL,
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      refreshToken: GOOGLE_REFRESH_TOKEN,
      accessToken: GOOGLE_ACCESS_TOKEN,
    },
    tls: { rejectUnauthorized: false },
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
