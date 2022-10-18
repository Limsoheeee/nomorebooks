import styled from "styled-components";

const Button = props => {
  const {
    shadow,
    border,
    backColor,
    color,
    size,
    disabled,
    children,
    on_click,
    style,
  } = props;

  const button_props = {
    color,
    size,
    style,
    disabled,
    shadow,
    border,
    backColor,
    on_click,
  };

  return <ButtonContainer {...button_props}>{children}</ButtonContainer>;
};

export default Button;

const ButtonContainer = styled.button`
  ${({ size }) => {
    switch (size) {
      case "big":
        return `width: 160px; height: 50px;`;
      case "small":
        return `width: 80px; height: 50px;`;
      case "circle":
        return `width: 50px; height: 50px; border-radius: 25px;`;
      default:
    }
  }}
  ${({ backColor }) => {
    switch (backColor) {
      case "white":
        return `background-color: white;`;
      case "black":
        return `background-color: black;`;
      default:
    }
  }}
  ${({ color }) => {
    switch (color) {
      case "white":
        return `color: white;`;
      case "gray":
        return `color: #909090;`;
      case "red":
        return `color: #FF7E7E;`;
      default:
    }
  }}
  ${({ border }) => {
    switch (border) {
      case "true":
        return `border: 1px solid #D4D4D4; border-radius: 50px;`;
      case "false":
        return `border: none;`;
      default:
    }
  }}
  ${({ shadow }) => {
    switch (shadow) {
      case "true":
        return `box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25);`;
      default:
    }
  }}
`;
