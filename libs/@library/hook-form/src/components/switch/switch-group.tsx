import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Flex, Switch as BaseSwitch, Text } from "@inexture/base";
import type { SwitchGroupI } from "../../types/type.ts";

const SwitchGroup: FC<SwitchGroupI> = ({
  name,
  label,
  data,
  inline,
  props,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <>
            {label && (
              <Text fz="sm" mb="sm">
                {label}
              </Text>
            )}
            <BaseSwitch.Group
              value={value as string[]}
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
                    <BaseSwitch key={i} value={item.value} label={item.label} />
                  );
                })}
              </Flex>
            </BaseSwitch.Group>
          </>
        );
      }}
    />
  );
};

export { SwitchGroup };
