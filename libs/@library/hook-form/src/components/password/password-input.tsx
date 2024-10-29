import type { FC } from "react";
import { useRef } from "react";
import { PasswordInput as BasePasswordInput } from "@inexture/base";
import { Controller, useFormContext } from "react-hook-form";
import type { PasswordI } from "../../types";

const PasswordInput: FC<PasswordI> = ({ name, label, props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <BasePasswordInput
            ref={inputRef}
            withAsterisk
            label={label}
            placeholder={
              props?.placeholder
                ? props.placeholder
                : label
                  ? `Enter ${label}`
                  : ""
            }
            error={error?.message}
            onBlur={onBlur}
            value={value as string}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            autoComplete="off"
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
            {...props}
          />
        );
      }}
    />
  );
};

export { PasswordInput };
