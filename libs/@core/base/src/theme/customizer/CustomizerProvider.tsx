// import React from "react";
// import { useThemeStore } from "../../store";
// import { PROVIDER_CONFIG, theme } from "../config";
// import { MantineProvider } from "@mantine/core";

// const withThemeProvider = <P extends object>(
//   Component: React.ComponentType<P>
// ): React.FC<P> => {
//   const WithTheme: React.FC<P> = (props) => {
//     const { active, gradient } = useThemeStore();
//     console.log("gradient", gradient);
//     return (
//       <MantineProvider
//         {...PROVIDER_CONFIG}
//         theme={{
//           ...theme,
//           primaryColor: active,
//         }}
//       >
//         <Component {...props} />
//       </MantineProvider>
//     );
//   };

//   WithTheme.displayName = `WithTheme(${
//     Component.displayName || Component.name || "Component"
//   })`;

//   return WithTheme;
// };

// export default withThemeProvider;

import React from "react";
import { MantineProvider } from "@mantine/core";
import { useThemeStore } from "../../store";
import { PROVIDER_CONFIG, theme } from "../config";

const withThemeProvider = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const WithTheme: React.FC<P> = (props) => {
    const { active, radius, shadow, borderWidth } = useThemeStore();

    return (
      <MantineProvider
        {...PROVIDER_CONFIG}
        theme={{
          ...theme,
          primaryColor: active,
          defaultRadius: radius,
          other: {
            customTheme: { shadow, borderWidth, radius, active },
          },
          components: {
            ...theme.components,
          },
        }}
      >
        <Component {...props} />
      </MantineProvider>
    );
  };

  WithTheme.displayName = `WithTheme(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithTheme;
};

export default withThemeProvider;
