import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, PinInput as BasePinInput, Text } from "@inexture/base";
import type { PinInputI } from "../../types/type.ts";

const PinInput: React.FC<PinInputI> = ({ name, label, labelProps, props }) => {
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
          <Box className="pin-input">
            {label && (
              <Text mb="sm" {...labelProps}>
                {label}
              </Text>
            )}
            <BasePinInput
              ref={ref}
              value={value as string}
              onBlur={onBlur}
              error={Boolean(error?.message)}
              onChange={(newValue) => {
                onChange(newValue);
              }}
              data-test-id={
                props?.["data-test-id"] ? props["data-test-id"] : name
              }
              {...props}
            />
            {error?.message && (
              <Text c="red" fz="sm">
                {error.message}
              </Text>
            )}
          </Box>
        );
      }}
    />
  );
};

export { PinInput };
