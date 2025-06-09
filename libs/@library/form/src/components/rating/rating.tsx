import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Rating as BaseRating, Text } from "@inexture/core";
import type { RatingI } from "../../types/type.ts";

const Rating: React.FC<RatingI> = ({ name, label, labelProps, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <Box>
            {label && (
              <Text mb="sm" {...labelProps}>
                {label}
              </Text>
            )}
            <BaseRating
              ref={ref}
              value={value as number}
              onBlur={onBlur}
              onChange={(newValue) => {
                onChange(newValue);
              }}
              data-test-id={
                props?.["data-test-id"] ? props["data-test-id"] : name
              }
              {...props}
            />
          </Box>
        );
      }}
    />
  );
};

export { Rating };
