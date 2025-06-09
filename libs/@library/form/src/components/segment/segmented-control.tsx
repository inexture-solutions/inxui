import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SegmentedControl as BaseSegmentedControl } from "@inexture/core";
import type { SegmentedControlI } from "../../types/type.ts";

const SegmentedControl: React.FC<SegmentedControlI> = ({
  name,
  data,
  props,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <BaseSegmentedControl
            ref={ref}
            value={value as string}
            onBlur={onBlur}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            data={data}
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

export { SegmentedControl };
