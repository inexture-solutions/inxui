import type { FC, ReactNode } from "react";
import { Box, Flex, Grid, Image, Paper, Text } from "@inexture/base";
import type { FileWithPath } from "@inexture/dropzone";
import { MIME_TYPES } from "@inexture/dropzone";
// @ts-ignore
import svg from "../../assets/img/svg.svg";
// @ts-ignore
import pdf from "../../assets/img/pdf.svg";
// @ts-ignore
import jpg from "../../assets/img/jpg.svg";
// @ts-ignore
import doc from "../../assets/img/doc.svg";
// @ts-ignore
import ppt from "../../assets/img/ppt.svg";
// @ts-ignore
import xls from "../../assets/img/xls.svg";
// @ts-ignore
import png from "../../assets/img/png.svg";
// @ts-ignore
import webp from "../../assets/img/webp.svg";

interface FileIcon {
  mime: string;
  icon: ReactNode;
  extension: string;
}

const fileIConsStatic: FileIcon[] = [
  { mime: MIME_TYPES.png, icon: png, extension: "png" },
  { mime: MIME_TYPES.jpeg, icon: jpg, extension: "jpg" },
  { mime: MIME_TYPES.svg, icon: svg, extension: "svg" },
  { mime: MIME_TYPES.webp, icon: webp, extension: "webp" },
  { mime: MIME_TYPES.pdf, icon: pdf, extension: "pdf" },
  { mime: MIME_TYPES.xls, icon: xls, extension: "xls," },
  { mime: MIME_TYPES.xlsx, icon: xls, extension: "xlsx" },
  { mime: MIME_TYPES.doc, icon: doc, extension: "doc" },
  { mime: MIME_TYPES.docx, icon: doc, extension: "docx" },
  { mime: MIME_TYPES.ppt, icon: ppt, extension: "ppt" },
  { mime: MIME_TYPES.pptx, icon: ppt, extension: "pptx" },
];

const getFileInfo = (file: File) => {
  const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
  const fileName = file.name;
  return { fileSizeMB, fileName };
};

const extractFileNameAndExtensionFromUrl = (url: string) => {
  const urlParts = url.split("/");
  const fileNameWithQueryParams = urlParts[urlParts.length - 1].split("?")[0];
  const fileNameParts = fileNameWithQueryParams.split(".");
  const fileName = decodeURIComponent(fileNameParts[0]);
  const extension = fileNameParts.slice(1).join(".");
  return {
    url,
    fileName,
    extension,
  };
};

const AcceptedFileTypeCard: FC<{
  files: FileWithPath[] | null;
  isMultiple: boolean;
  url?: string;
  cardHeight: number;
}> = ({ files, isMultiple, url = "", cardHeight }) => {
  const urlInfo: { name: string; extension: string } = {
    name: url ? extractFileNameAndExtensionFromUrl(url).fileName : "",
    extension: url ? extractFileNameAndExtensionFromUrl(url).extension : "",
  };
  const fileIcon: FileIcon[] = fileIConsStatic.filter((item) => {
    const fileInfo = files?.find((file: File) => file.type === item.mime);
    return fileInfo !== undefined;
  });

  return (
    <Paper p="md" h="100%" w="100%" bg="transparent">
      {isMultiple ? (
        <Grid>
          {files?.map((file, i: number) => {
            return (
              <Grid.Col
                key={i}
                span={{ base: 12, xs: 6, md: 4, xl: 3 }}
                style={{ marginBottom: "20px" }}
              >
                <Paper withBorder p="md">
                  <Image
                    maw={cardHeight}
                    mx="auto"
                    src={fileIcon.length > 0 ? fileIcon[0].icon : undefined}
                    alt="AcceptedFile"
                  />
                  <Text component="div" truncate="end" ta="center" mt="md">
                    {file.name}
                  </Text>
                </Paper>
              </Grid.Col>
            );
          })}
        </Grid>
      ) : (
        <Paper p="md" mih={cardHeight + 5} style={{ overflow: "hidden" }}>
          <Flex align="center" justify="center" mih={cardHeight - 25}>
            {files ? (
              <Box h="100%">
                <Image
                  maw={60}
                  mx="auto"
                  src={fileIcon[0]?.icon}
                  alt="AcceptedFile"
                />
                <Text component="div" truncate="end" ta="center" mt="sm">
                  {getFileInfo(files[0]).fileName}
                </Text>
                <Text component="div" ta="center" mt="xs" fz="xs" fw={600}>
                  {getFileInfo(files[0]).fileSizeMB} MB
                </Text>
              </Box>
            ) : (
              <Box h="100%">
                <Image
                  maw={60}
                  mx="auto"
                  src={
                    fileIConsStatic.find(
                      (item) => item.extension === urlInfo.extension,
                    )?.icon
                  }
                  alt="AcceptedFile"
                />
                <Text component="div" ta="center" mt="xs" fz="xs" fw={600}>
                  {urlInfo.name}.{urlInfo.extension}
                </Text>
              </Box>
            )}
          </Flex>
        </Paper>
      )}
    </Paper>
  );
};

export default AcceptedFileTypeCard;
