import React, { useMemo, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FieldError, FormError, Input, InputGroup, Label, Submit, TextArea, ThankYou } from '@/components/form';

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

const registerOptions = {
  name: {
    required: true,
    maxLength: 80,
  },
  email: {
    required: true,
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  message: {
    required: true,
    maxLength: 300,
  },
};

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('contact');

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorSending, setErrorSending] = useState(false);

  const {
    register,
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
      setErrorSending(false);

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

      if (res.status === 400 || res.status === 500) {
        setErrorSending(true);
      }
    } catch (err: any) {
      console.error(err.message);
      setErrorSending(true);
    } finally {
      setIsSending(false);
    }
  };

  const renderField = (id: InputType) => {
    const fieldPlaceholder = t(`form.${id}.placeholder`);

    if (id === 'message') {
      return (
        <TextArea
          disabled={isSending}
          id={id}
          placeholder={fieldPlaceholder}
          register={register}
          registerOptions={registerOptions[id]}
        />
      );
    }

    return (
      <Input
        disabled={isSending}
        id={id}
        placeholder={fieldPlaceholder}
        register={register}
        registerOptions={registerOptions[id]}
      />
    );
  };

  const renderInputFields = () => {
    const fields = Object.keys(getValues());

    return (fields as InputType[]).map((id) => {
      const fieldLabel = t(`form.${id}.label`);
      const hasError = errors?.[id];
      const fieldErrorMessage = t(`form.${id}.error`);

      return (
        <InputGroup key={id}>
          <Label id={id}>{fieldLabel}</Label>
          {renderField(id)}
          {hasError && <FieldError message={fieldErrorMessage} />}
        </InputGroup>
      );
    });
  };

  const submitLabel = useMemo(() => {
    if (isSending) {
      return t('form.sending');
    }

    if (errorSending) {
      return t('form.try-again');
    }

    return t('form.submit');
  }, [errorSending, isSending, t]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {renderInputFields()}

      <Submit isDisabled={isSending} label={submitLabel} />

      {isSent && <ThankYou />}
      {errorSending && <FormError />}
    </form>
  );
};
