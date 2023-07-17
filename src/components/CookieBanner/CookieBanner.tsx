import { CSSProperties, useMemo } from "react";
import { useTheme } from "styled-components";
import { CookieBanner } from "@schlomoh/react-cookieconsent";

const CustomCookieBanner = () => {
  const { colors } = useTheme();

  const containerStyle = useMemo(
    () =>
      ({
        backgroundColor: colors.base.white,
        boxSizing: "border-box",
      } as CSSProperties),
    []
  );

  const buttonStyle = useMemo(
    () =>
      ({
        backgroundColor: colors.accent.blue,
        boxSizing: "border-box",
      } as CSSProperties),
    []
  );
  return (
    <CookieBanner
      containerStyle={containerStyle}
      primaryButtonStyle={buttonStyle}
    />
  );
};

export default CustomCookieBanner;
