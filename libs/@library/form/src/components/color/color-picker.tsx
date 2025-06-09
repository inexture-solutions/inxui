import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorPicker as BaseColorPicker } from "@inexture/core";
import type { ColorPickerI } from "../../types/type.ts";

const ColorPicker: React.FC<ColorPickerI> = ({ name, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <BaseColorPicker
            ref={ref}
            value={value as string}
            onBlur={onBlur}
            onChange={(newValue) => {
              onChange(newValue);
            }}
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

export { ColorPicker };
