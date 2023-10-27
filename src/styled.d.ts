import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      card: string;
      text: string;
      subText: string;
      activeTab: string;
      activeText: string;
      hoverTab: string;
    };
  }
}
