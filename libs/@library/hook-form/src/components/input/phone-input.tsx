import "react-phone-input-2/lib/style.css";
import React from "react";
import type { PhoneInputProps } from "react-phone-input-2";
import PhoneInput from "react-phone-input-2";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Flex, Text } from "@inexture/base";

interface InputPhoneI {
  name: string;
  label?: string;
  withAsterisk?: boolean;
  props?: Partial<PhoneInputProps>;
}

const InputPhone: React.FC<InputPhoneI> = ({
  name,
  label,
  withAsterisk = false,
  props,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <Flex direction="column">
            {label && (
              <Text
                component="div"
                fz={14}
                fw={500}
                mb={5}
                mt={2}
                pos="relative"
              >
                {label}
                {withAsterisk && (
                  <Box c="red.7" display="inline-block" ml={2}>
                    *
                  </Box>
                )}
              </Text>
            )}
            <PhoneInput
              inputClass={`tel-input ${Boolean(error?.message) && "has-error"}`}
              disableDropdown
              inputProps={{ name, autoComplete: "off" }}
              countryCodeEditable={false}
              country={"in"}
              value={value}
              isValid={!error?.message}
              enableSearch={true}
              onBlur={onBlur}
              onChange={(newValue: any) => {
                onChange(`+${newValue}`);
              }}
              {...props}
            />
            {Boolean(error?.message) && (
              <Text c="red.7" fz={14} mt={5}>
                {error?.message}
              </Text>
            )}
          </Flex>
        );
      }}
    />
  );
};

export { InputPhone };
