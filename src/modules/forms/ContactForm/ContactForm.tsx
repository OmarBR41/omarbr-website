import React, { useMemo, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form';

import { Input, InputGroup, Label, Submit, TextArea, ThankYou } from '@/components/form';

import styles from './ContactForm.module.css';

export type InputType = 'name' | 'email' | 'message';
export type Inputs = {
  name: string;
  email: string;
  message: string;
};

const DEFAULT_INPUT_VALUES = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<Inputs>({
    defaultValues: DEFAULT_INPUT_VALUES,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsSending(true);
      setIsSent(false);

      const fetchOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      const res = await fetch('/api/contact', fetchOptions);

      if (res.ok) {
        setIsSent(true);
        reset();
      }

      if (res.status === 400) {
        console.error(res);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  const getFieldError = (id: InputType) => {
    console.log(errors[id]);
    return undefined;
  };

  const renderField = (id: string, field: ControllerRenderProps<Inputs, InputType>) => {
    const fieldPlaceholder = t(`form.${id}.placeholder`);

    if (id === 'message') {
      return <TextArea disabled={isSending} id={id} placeholder={fieldPlaceholder} {...field} />;
    }
    return <Input disabled={isSending} id={id} placeholder={fieldPlaceholder} {...field} />;
  };

  const renderInputFields = () => {
    const fields = Object.keys(getValues());

    return (fields as InputType[]).map((id) => {
      const fieldLabel = t(`form.${id}.label`);

      return (
        <InputGroup errorMessage={getFieldError(id)} key={id}>
          <Label id={id}>{fieldLabel}</Label>
          <Controller
            control={control}
            name={id}
            render={({ field }) => renderField(id, field)}
            rules={{ required: true }}
          />
        </InputGroup>
      );
    });
  };

  const submitLabel = useMemo(() => (isSending ? t('form.sending') : t('form.submit')), [isSending, t]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {renderInputFields()}

      <Submit isDisabled={isSending} label={submitLabel} />

      {isSent && <ThankYou />}
    </form>
  );
};
