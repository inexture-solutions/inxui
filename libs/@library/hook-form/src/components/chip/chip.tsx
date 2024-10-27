import type { FC } from "react";
import { Chip as BaseChip } from "@inexture/base";
import { Controller, useFormContext } from "react-hook-form";
import type { ChipI } from "../../types";

const Chip: FC<ChipI> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <BaseChip
            ref={ref}
            onBlur={onBlur}
            checked={Boolean(value)}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
            {...props}
          >
            {label}
          </BaseChip>
        );
      }}
    />
  );
};

export { Chip };
