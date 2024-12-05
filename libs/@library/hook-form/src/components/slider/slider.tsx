import { Controller, useFormContext } from "react-hook-form";
import { Slider as BaseSlider, Text } from "@inexture/base";
import type { FC } from "react";
import type { SliderI } from "../../types/type.ts";

const Slider: FC<SliderI> = ({ name, data, props, label, labelProps }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <>
            {label && (
              <Text size="sm" mb="sm" {...labelProps}>
                {label}
              </Text>
            )}
            <BaseSlider
              ref={ref}
              value={value as number}
              label={(val) => `${val}`}
              onBlur={onBlur}
              onChange={(newValue) => {
                onChange(newValue);
              }}
              data-test-id={
                props?.["data-test-id"] ? props["data-test-id"] : name
              }
              marks={data}
              {...props}
            />
          </>
        );
      }}
    />
  );
};

export { Slider };
