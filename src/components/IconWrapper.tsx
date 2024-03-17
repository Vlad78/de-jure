import styled from 'styled-components';


type IconStripeWrapper = {
  children: React.ReactNode;
  top?: string;
  left?: string;
  opacity?: string;
};

export const IconStripeWrapper = ({ children, top, left, opacity }: IconStripeWrapper) => {
  return (
    <IconWrapper top={top} left={left} opacity={opacity}>
      {children}
    </IconWrapper>
  );
};

const IconWrapper = styled.div.withConfig({
  shouldForwardProp: (props) => !["top", "left", "opacity"].includes(props),
})<Omit<IconStripeWrapper, "children">>`
  position: absolute;

  svg {
    position: absolute;
    opacity: ${(props) => props.opacity || 1};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
  }
`;
