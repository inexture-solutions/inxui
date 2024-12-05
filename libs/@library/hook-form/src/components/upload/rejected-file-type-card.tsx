import type { FC } from "react";
import { Image, Paper, Stack, Text } from "@inexture/base";
import type { FileRejection } from "@inexture/dropzone";
import { ErrorCode } from "react-dropzone-esm";
// @ts-ignore
import rejectedIcon from "../../assets/img/rejected.svg";

const RejectedFileTypeCard: FC<{
  size?: number;
  files: FileRejection[];
  cardHeight: number;
}> = ({ size, files, cardHeight }) => {
  const errorMessages = {
    [ErrorCode.FileInvalidType]: `The file you're attempting to upload is not allowed. Please try one of the allowed file types with a max size of ${size} MB.`,
    [ErrorCode.FileTooLarge]: `You have exceeded the limit for allowed file size. Kindly upload file with a size less than ${size} MB`,
    [ErrorCode.FileTooSmall]: "Minimum upload file size is 10 KB",
    [ErrorCode.TooManyFiles]:
      "Multiple file uploads are currently disabled. Kindly proceed with single-file upload.",
  };

  const code = files[0]?.errors?.[0]?.code ?? "";
  const errorMessage =
    code in errorMessages
      ? errorMessages[code as keyof typeof errorMessages]
      : "Invalid File Upload, Please contact support.";

  return (
    <Paper
      p="md"
      h="100%"
      w="100%"
      className="overflow-hidden"
      bg="transparent"
      mih={cardHeight}
    >
      <Stack>
        <Image
          maw={cardHeight - 70}
          style={{ transform: "rotate(45deg)" }}
          mx="auto"
          src={rejectedIcon}
          alt="Rejected"
        />
        <Text ta="center" fz={13} maw={500} mx="auto">
          {errorMessage}
        </Text>
      </Stack>
    </Paper>
  );
};

export default RejectedFileTypeCard;
