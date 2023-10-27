import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  colors: {
    bg: "#23262F",
    card: "#393C44",
    text: "#F0F0F1",
    subText: "#7B7D82",
    activeTab: "#58BC7C",
    activeText: "#000",
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    bg: "#F6F6F6",
    card: "#FFFFFF",
    text: "#23262F",
    subText: "#919297",
    activeTab: "#58BC7C",
    activeText: "#000",
  },
};

export { darkTheme, lightTheme };
