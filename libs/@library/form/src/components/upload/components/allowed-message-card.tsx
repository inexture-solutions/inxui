import React from "react";
import { Divider, Flex, Text } from "@inexture/core";

const AllowedMessageCard: React.FC<{
  fileSize: number;
  allowedMessage: string;
}> = ({ fileSize, allowedMessage }) => {
  return (
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
  );
};

export default AllowedMessageCard;
