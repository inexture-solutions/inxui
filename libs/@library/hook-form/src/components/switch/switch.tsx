import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch as BaseSwitch } from "@inexture/base";
import type { SwitchI } from "../../types";

const Switch: React.FC<SwitchI> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <BaseSwitch
          ref={ref}
          onBlur={onBlur}
          label={label}
          checked={value as boolean}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          data-test-id={
            props?.["data-test-id"] ? props["data-test-id"] : name
          }
          error={error?.message}
          {...props}
        />
      )}
    />
  );
};

export { Switch };
