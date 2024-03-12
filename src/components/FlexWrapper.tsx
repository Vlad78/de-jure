import styled from "styled-components";

type FlexWrapper = {
  direction?: "column" | "row";
  justify?: "space-between" | "end";
  align?: "center" | "start";
  wrap?: "wrap" | "nowrap";
  gap?: string;
  height?: string;
  margin?: string;
  position?: "relative" | "absolute";
  inset?: string;
  transform?: string;
  z?: number;
};

export const FlexWrapper = styled.div<FlexWrapper>`
  display: flex;
  margin: ${(props) => props.margin || ""};
  min-height: ${(props) => props.height || "100%"};
  gap: ${(props) => props.gap || ""};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  position: ${(props) => props.position};
  inset: ${(props) => props.inset || ""};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.z?.toString()};
`;

export default FlexWrapper;
