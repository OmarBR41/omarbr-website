import React from 'react';

import { useTranslation } from 'next-i18next';
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from 'react-hook-form';

import { Input, InputGroup, Label, Submit, TextArea } from '@/components/form';

import styles from './ContactForm.module.css';

type InputType = 'name' | 'email' | 'message';
type Inputs = {
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

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({
    defaultValues: DEFAULT_INPUT_VALUES,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const getFieldError = (id: InputType) => {
    console.log(errors[id]);
    return undefined;
  };

  const renderField = (id: string, field: ControllerRenderProps<Inputs, InputType>) => {
    const fieldPlaceholder = t(`form.${id}.placeholder`);

    if (id === 'message') {
      return <TextArea id={id} placeholder={fieldPlaceholder} {...field} />;
    }
    return <Input id={id} placeholder={fieldPlaceholder} {...field} />;
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

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {renderInputFields()}

      <Submit label={t('form.submit')} />
    </form>
  );
};
