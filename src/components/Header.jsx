import { useRef } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Header = () => {
  const navRef = useRef();
  return (
    <header>
      <Nav>
        {/* <i class="fa-solid fa-bookmark"></i> */}
        📖 오늘의 책 입니다.
      </Nav>
    </header>
  );
};

const Nav = styled.nav`
  height: 50px;
  width: 100%;
  padding: 0 20px;

  background-color: RGB(38, 38, 38);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 16px;

  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
`;

export default Header;
