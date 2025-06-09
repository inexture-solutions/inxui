import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { NativeSelect as BaseNativeSelect } from "@inexture/core";
import type { NativeSelectI } from "../../types/type.ts";

const NativeSelect: React.FC<NativeSelectI> = ({
  label,
  name,
  data,
  props,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ref, onBlur },
        fieldState: { error },
      }) => (
        <BaseNativeSelect
          ref={ref}
          onBlur={onBlur}
          label={label}
          data={data}
          value={value as string}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          error={error?.message}
          data-test-id={props?.["data-test-id"] ? props["data-test-id"] : name}
          {...props}
        />
      )}
    />
  );
};

export { NativeSelect };
