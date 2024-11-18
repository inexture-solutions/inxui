import React from "react";
import { Text } from "@inexture/base";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Text
        component="span"
        fz={35}
        fw="bold"
        variant="gradient"
        gradient={{ from: "teal", to: "orange", deg: 180 }}
      >
        INXUI
      </Text>
    </Link>
  );
};

export default Logo;
