import type { FileWithPath } from "@inexture/dropzone";

import { Box, Flex, Grid, Image, Paper, Text } from "@inexture/core";
import React from "react";
import {
  createPreviewUrl,
  extractFileNameAndExtensionFromUrl,
  getFileIcon,
  getFileInfo,
} from "./extensions.ts";

const AcceptedFileTypeCard: React.FC<{
  files: FileWithPath[] | null;
  isMultiple: boolean;
  cardHeight: number;
  preview?: boolean;
  url?: string;
}> = ({ files, isMultiple, url = "", cardHeight, preview }) => {
  const urlInfo = url ? extractFileNameAndExtensionFromUrl(url) : null;

  const renderFilePreview = (file: File) => (
    <>
      {!preview ? (
        <Image
          maw={cardHeight}
          mx="auto"
          src={preview ? createPreviewUrl(file) : getFileIcon(file)}
          alt="AcceptedFile"
          style={{ borderRadius: "var(--mantine-radius-default)" }}
        />
      ) : (
        <>
          <Box mah={cardHeight}>
            <Image
              fit="contain"
              mah={cardHeight}
              h="auto"
              mx="auto"
              src={preview ? createPreviewUrl(file) : getFileIcon(file)}
              alt="AcceptedFile"
              style={{ borderRadius: "var(--mantine-radius-default)" }}
            />
          </Box>
        </>
      )}
    </>
  );

  const renderFileInfo = (file: File) => {
    const { fileName, fileSizeMB } = getFileInfo(file);
    return (
      <>
        <Text component="div" truncate="end" ta="center" mt="sm">
          {fileName}
        </Text>
        <Text component="div" ta="center" mt="xs" fz="xs" fw={600}>
          {fileSizeMB} MB
        </Text>
      </>
    );
  };

  return (
    <Paper p="md" h="100%" w="100%" bg="transparent">
      {isMultiple ? (
        <Grid>
          {files?.map((file, i) => (
            <Grid.Col key={i} span={{ base: 12, xs: 6, md: 4, xl: 3 }}>
              <Paper withBorder p="md" pos="relative">
                {renderFilePreview(file)}
                {renderFileInfo(file)}
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Paper
          p="md"
          pos="relative"
          mih={cardHeight + 5}
          style={{ overflow: "hidden" }}
        >
          <Flex align="center" justify="center" mih={cardHeight - 25}>
            {files && files.length > 0 ? (
              <Box h="100%" w="100%">
                {renderFilePreview(files[0])}
                {!preview && renderFileInfo(files[0])}
              </Box>
            ) : urlInfo ? (
              <Box h="100%" w="100%">
                <Image
                  maw={60}
                  mx="auto"
                  src={getFileIcon({
                    type: `image/${urlInfo.extension}`,
                  } as File)}
                  alt="AcceptedFile"
                />
                <Text component="div" ta="center" mt="xs" fz="xs" fw={600}>
                  {urlInfo.fileName}.{urlInfo.extension}
                </Text>
              </Box>
            ) : null}
          </Flex>
        </Paper>
      )}
    </Paper>
  );
};

export default AcceptedFileTypeCard;
