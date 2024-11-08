import type { FC } from "react";
import { Chip as BaseChip, Flex } from "@inexture/base";
import { Controller, useFormContext } from "react-hook-form";
import type { ChipGroupI } from "../../types";

const ChipGroup: FC<ChipGroupI<boolean>> = ({
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
          <BaseChip.Group
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
              {data.map((item, i) => {
                return (
                  <BaseChip key={i} value={item.value}>
                    {item.value}
                  </BaseChip>
                );
              })}
            </Flex>
          </BaseChip.Group>
        );
      }}
    />
  );
};

export { ChipGroup };
