import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Group,
  Radio as BaseRadio,
  RadioGroup as BaseRadioGroup,
} from "@inexture/base";
import type { RadioGroupI } from "../../types";

const RadioGroup: FC<RadioGroupI> = ({ name, label = "", props, options }) => {
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
          <BaseRadioGroup
            {...props}
            ref={ref}
            label={label}
            onBlur={onBlur}
            value={value as string}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
          >
            <Group
              mt="xs"
              className={`${props?.role === "radio" && "flex-col items-start"}`}
            >
              {options.map((option, index) => {
                return (
                  <BaseRadio
                    key={index}
                    error={error?.message}
                    value={option.value}
                    label={option.label}
                  />
                );
              })}
            </Group>
          </BaseRadioGroup>
        );
      }}
    />
  );
};

export { RadioGroup };
