import React from "react";
import {
  Chip as BaseChip,
  ChipGroup as BaseChipGroup,
  Flex,
} from "@inexture/core";
import { Controller, useFormContext } from "react-hook-form";
import type { ChipGroupI } from "../../types/type.ts";

const ChipGroup: React.FC<ChipGroupI<boolean>> = ({
  name,
  data = [],
  inline = true,
  props,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <BaseChipGroup
            value={props?.multiple ? (value as string[]) : String(value)}
            onChange={(val) => {
              onChange(val);
            }}
            data-test-id={
              props?.["data-test-id"] ? props["data-test-id"] : name
            }
            {...props}
          >
            <Flex direction={inline ? "row" : "column"} wrap="wrap" gap="xs">
              {data?.map((item, i) => {
                return (
                  <BaseChip key={i} value={item.value}>
                    {item.value}
                  </BaseChip>
                );
              })}
            </Flex>
          </BaseChipGroup>
        );
      }}
    />
  );
};

export { ChipGroup };
