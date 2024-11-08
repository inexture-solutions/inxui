import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { RangeSlider as BaseRangeSlider } from "@inexture/base";
import type { RangeSliderI } from "../../types";

const RangeSlider: FC<RangeSliderI> = ({ name, data, props, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <BaseRangeSlider
            ref={ref}
            value={value as [number, number]}
            label={label}
            onBlur={onBlur}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            marks={data}
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

export { RangeSlider };
