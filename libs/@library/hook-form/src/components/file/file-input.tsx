import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FileInput as BaseFileInput } from "@inexture/base";
import type { FileInputI } from "../../types";

const FileInput: FC<FileInputI> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => {
        return (
          <BaseFileInput
            ref={ref}
            value={value as File}
            label={label}
            onBlur={onBlur}
            error={error?.message}
            placeholder={
              props?.placeholder
                ? props.placeholder
                : label
                  ? `Upload ${label}`
                  : ""
            }
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
            onChange={(newValue) => {
              onChange(newValue);
            }}
            {...props}
          />
        );
      }}
    />
  );
};

export { FileInput };
