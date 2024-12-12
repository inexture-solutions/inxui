"use client";

import React from "react";
import { Box, Button, Paper, Stack, Text } from "@inexture/base";
import {
  formInitials,
  FormSchema,
  FormSchemaT,
} from "@/app/hook-form/formSchema";
import { FileUpload } from "@inexture/hook-form/components";
import { FormProvider } from "@inexture/hook-form/providers";
import { zodResolver } from "@inexture/hook-form/plugins/zod";
import { useForm } from "@inexture/hook-form";

const HookFormPage = () => {
  const methods = useForm<FormSchemaT>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: formInitials,
  });

  // Submit the form to server
  const handleFormSubmit = async (values: FormSchemaT) => {
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
            <FileUpload
              name="avatar"
              accept={[".jpg", ".png"]}
              allowedMessage={"jpg, png"}
              fileSize={5}
              label="Upload Image"
              cardHeight={150}
              props={{ multiple: false }}
              preview={true}
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </FormProvider>
      </Paper>
    </Box>
  );
};

export default HookFormPage;
