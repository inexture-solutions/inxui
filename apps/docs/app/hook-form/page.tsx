"use client";

import React from "react";
import { Box, Button, Paper, Stack, Text } from "@inexture/base";
import {
  loginInitials,
  LoginSchema,
  LoginSchemaT,
} from "@/app/hook-form/login.schema";
import { PasswordInput, TextInput } from "@inexture/hook-form/components";
import { FormProvider } from "@inexture/hook-form/providers";
import { zodResolver } from "@inexture/hook-form/plugins/zod";
import { useForm } from "@inexture/hook-form";

const HookFormPage = () => {
  const methods = useForm<LoginSchemaT>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(LoginSchema),
    defaultValues: loginInitials,
  });

  // Submit the form to server
  const handleFormSubmit = async (values: LoginSchemaT) => {
    console.log("values", values);
  };

  return (
    <Box p="md">
      <Text mb="md" fz="xl" fw="bold">
        Example Usage
      </Text>
      <Paper withBorder p="xl" maw={550}>
        <FormProvider methods={methods} onSubmit={handleFormSubmit}>
          <Stack>
            <TextInput name="email" />
            <PasswordInput name="password" />
            <Button type="submit">Console.Log</Button>
          </Stack>
        </FormProvider>
      </Paper>
    </Box>
  );
};

export default HookFormPage;
