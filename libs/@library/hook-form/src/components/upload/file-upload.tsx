import {
  ActionIcon,
  Box,
  Divider,
  Flex,
  Image,
  InputLabel,
  Stack,
  Text,
} from "@inexture/base";
import { Controller, useFormContext } from "react-hook-form";
import type { FC } from "react";
import { useState } from "react";
import type { FileRejection, FileWithPath } from "@inexture/dropzone";
import { Dropzone } from "@inexture/dropzone";
import { IconX } from "@tabler/icons-react";
import uploadIcon from "../../assets/img/upload.svg";
import type { FileUploadI } from "../../types";
import AcceptedFileTypeCard from "./accepted-file-type-card";
import RejectedFileTypeCard from "./rejected-file-type-card";

const FileUpload: FC<FileUploadI> = ({
  name,
  accept,
  allowedMessage,
  label,
  withAsterisk,
  props,
  cardHeight = 250,
  fileSize = 3,
}) => {
  const [localFiles, setLocalFiles] = useState<
    (FileWithPath | FileRejection)[]
  >([]);
  const { control, setValue, setError } = useFormContext();
  const [allowedStatus, setAllowedStatus] = useState<{
    accepted: boolean;
    rejected: boolean;
  }>({
    accepted: false,
    rejected: false,
  });
  return (
    <Box>
      {label && (
        <InputLabel mb={5}>
          {label} {""}
          {withAsterisk && (
            <Text
              component="span"
              style={{ color: "var(--mantine-color-error)" }}
              size="sm"
              inline
            >
              *
            </Text>
          )}
        </InputLabel>
      )}
      <Box>
        <Controller
          control={control}
          name={name}
          render={({ field: { value, onChange }, fieldState: { error } }) => {
            const fileVal = typeof value;

            // handle accepted file drop
            const handleFileDrop = (files: FileWithPath[]) => {
              setLocalFiles(files);
              setAllowedStatus((prev) => {
                return {
                  ...prev,
                  accepted: true,
                  rejected: false,
                };
              });
              setError(name, {}); // Updated to pass an empty object instead of null
              onChange(files);
            };

            // Handle Rejected Drop
            const handleRejectedDrop = (files: FileRejection[]) => {
              setLocalFiles(files);
              setError(name, { message: "This file is not allowed" });
              setAllowedStatus((prev) => {
                return {
                  ...prev,
                  accepted: false,
                  rejected: true,
                };
              });
              onChange(files);
            };

            return (
              <Box>
                <Box
                  pos="relative"
                  style={{
                    border: error?.message
                      ? "1px dashed var(--mantine-color-error)"
                      : "1px dashed var(--mantine-color-default-border)",
                    borderRadius: "var(--mantine-radius-sm)",
                    background: "var(--mantine-color-default)",
                  }}
                >
                  <Dropzone
                    onDrop={(files) => {
                      handleFileDrop(files);
                    }}
                    data-test-id={
                      props?.["data-test-id"] ? props["data-test-id"] : name
                    }
                    onReject={(files) => {
                      handleRejectedDrop(files);
                    }}
                    maxSize={fileSize * 1024 * 1024}
                    accept={accept}
                    multiple={props?.multiple ?? false}
                    {...props}
                  >
                    <Box
                      pos="relative"
                      style={{ cursor: "pointer" }}
                      mih={cardHeight}
                    >
                      {!localFiles.length ? (
                        <Box
                          style={{ textAlign: "center" }}
                          pos="relative"
                          mih={cardHeight}
                        >
                          {fileVal === "string" && value ? (
                            <AcceptedFileTypeCard
                              files={null}
                              isMultiple={props?.multiple ?? false}
                              url={value as string}
                              cardHeight={cardHeight}
                            />
                          ) : (
                            <Dropzone.Idle>
                              <Stack
                                mih={cardHeight + 39}
                                p="md"
                                align="center"
                              >
                                <Image
                                  w={cardHeight - 80}
                                  h={cardHeight - 80}
                                  mx="auto"
                                  src={uploadIcon}
                                  alt="Upload File"
                                />
                                <Box>
                                  <Text size="md" fw={600}>
                                    Drag and Drop
                                  </Text>
                                  <Text size="sm" c="dimmed" mt={7}>
                                    Your files here or Click to Upload
                                  </Text>
                                </Box>
                              </Stack>
                            </Dropzone.Idle>
                          )}
                        </Box>
                      ) : (
                        <Box>
                          {"errors" in localFiles[0] ? (
                            <Flex
                              pos="relative"
                              align="center"
                              mih={cardHeight}
                            >
                              <Dropzone.Reject>
                                <RejectedFileTypeCard
                                  size={fileSize}
                                  files={localFiles as FileRejection[]}
                                  cardHeight={cardHeight}
                                />
                              </Dropzone.Reject>
                              {allowedStatus.rejected && (
                                <RejectedFileTypeCard
                                  size={fileSize}
                                  files={localFiles as FileRejection[]}
                                  cardHeight={cardHeight}
                                />
                              )}
                            </Flex>
                          ) : (
                            <Flex pos="relative" mih={cardHeight}>
                              <Dropzone.Accept>
                                <AcceptedFileTypeCard
                                  cardHeight={cardHeight}
                                  files={localFiles as FileWithPath[]}
                                  isMultiple={props?.multiple ?? false}
                                />
                              </Dropzone.Accept>
                              {allowedStatus.accepted && (
                                <AcceptedFileTypeCard
                                  cardHeight={cardHeight}
                                  files={localFiles as FileWithPath[]}
                                  isMultiple={props?.multiple ?? false}
                                />
                              )}
                            </Flex>
                          )}
                        </Box>
                      )}

                      <Divider />
                      <Flex
                        justify="space-between"
                        gap="sm"
                        px="sm"
                        style={{ textAlign: "center" }}
                      >
                        <Flex
                          gap={0}
                          py="xs"
                          justify="center"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Text fw={600} fz="xs">
                            {fileSize}
                            MB
                          </Text>
                          <Text fz="xs">Max Size</Text>
                        </Flex>
                        <Divider orientation="vertical" />
                        <Flex
                          gap={0}
                          py="xs"
                          justify="center"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Text fw={600} fz="xs">
                            {allowedMessage}
                          </Text>
                          <Text fz="xs">Allowed Files</Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Dropzone>

                  {(value || localFiles.length > 0) && (
                    <Box
                      pos="absolute"
                      top={5}
                      right={5}
                      style={{
                        transform: "scale(0)",
                        transition: "transform 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(0)")
                      }
                    >
                      <ActionIcon
                        onClick={() => {
                          setValue(name, "");
                          setLocalFiles([]);
                          withAsterisk
                            ? setError(name, {
                                type: "required",
                                message: "This field is required",
                              })
                            : setError(name, {});
                        }}
                      >
                        <IconX stroke={1.5} />
                      </ActionIcon>
                    </Box>
                  )}
                </Box>
                {error?.message && (
                  <Text
                    fz="sm"
                    mt={3}
                    style={{ color: "var(--mantine-color-error)" }}
                  >
                    {error.message}
                  </Text>
                )}
              </Box>
            );
          }}
        />
      </Box>
    </Box>
  );
};

export { FileUpload };
