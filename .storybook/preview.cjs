import "../src/index.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@storybook/addon-console";

const CUSTOM_DEVICE_VIEWPORTS = {
  iphoneSE: {
    name: "IPhone SE",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
  redmiNote9Pro: {
    name: "Redmi Note 9 Pro",
    styles: {
      width: "393px",
      height: "873px",
    },
  },
};
const TAILWIND_BREAKPOINTS = {
  xs: {
    name: "Tailwind xs",
    styles: {
      width: "375px",
      height: "900px",
    },
  },
  sm: {
    name: "Tailwind sm",
    styles: {
      width: "641px",
      height: "900px",
    },
  },
  md: {
    name: "Tailwind md",
    styles: {
      width: "769px",
      height: "900px",
    },
  },
  lg: {
    name: "Tailwind lg",
    styles: {
      width: "1025px",
      height: "900px",
    },
  },
  xl: {
    name: "Tailwind xl",
    styles: {
      width: "1281px",
      height: "900px",
    },
  },
  "2xl": {
    name: "Tailwind 2xl",
    styles: {
      width: "1537px",
      height: "900px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...TAILWIND_BREAKPOINTS,
      ...CUSTOM_DEVICE_VIEWPORTS,
      ...INITIAL_VIEWPORTS,
    },
  },
};
