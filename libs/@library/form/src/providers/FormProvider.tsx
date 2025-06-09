import React, { JSX } from "react";
import {
  FormProvider as BaseFormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProviderProps<T> {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const FormProvider = <T,>({
  children,
  methods,
  onSubmit,
}: FormProviderProps<T>): JSX.Element => {
  return (
    <BaseFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </BaseFormProvider>
  );
};

FormProvider.displayName = "FormProvider";
export { FormProvider };
