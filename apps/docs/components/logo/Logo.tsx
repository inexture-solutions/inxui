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
        gradient={{ from: "pink", to: "orange", deg: 45 }}
      >
        INXUI
      </Text>
    </Link>
  );
};

export default Logo;
