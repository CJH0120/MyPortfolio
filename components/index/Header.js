import React from "react";
import styled from "styled-components";
import Link from "next/link";
const HeadWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: 80px;
  color: black;
  background: #fff;

  box-shadow: 0 1px 0.3rem hsl(0deg 0% 100% / 100%);
  z-index: 999;
`;

const HeadSectionWrap = styled.div`
  display: flex;
  width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const HeadLogo = styled.div`
  font-size: 18px;
  cursor: pointer;
`;
const HeadMenu = styled.div``;

const HeadNavUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px 20px;
`;
const HeadNavLi = styled.li`
  margin: 20px;
  font-size: 17px;
  &:hover {
    cursor: pointer;
    color: coral;
  }
`;
const LogoSpan = styled.span`
  margin: 20px;
  font-size: 17px;
  &:hover {
    cursor: pointer;
    color: coral;
  }
`;
function Header() {
  return (
    <HeadWrap>
      <HeadSectionWrap>
        <HeadLogo>
          <Link href={"/"}>
            <LogoSpan>최종현 포트폴리오</LogoSpan>
          </Link>
        </HeadLogo>
        <HeadMenu>
          <HeadNavUl>
            <Link href={"#AboutMe"}>
              <HeadNavLi>About Me</HeadNavLi>
            </Link>
            <Link href={"#Skills"}>
              <HeadNavLi>Skills</HeadNavLi>
            </Link>
            <Link href={"#Link"}>
              <HeadNavLi>Link</HeadNavLi>
            </Link>

            <Link href={"#Project"}>
              <HeadNavLi>Project </HeadNavLi>
            </Link>

            <Link href={"#Career"}>
              <HeadNavLi>Career</HeadNavLi>
            </Link>
          </HeadNavUl>
        </HeadMenu>
      </HeadSectionWrap>
    </HeadWrap>
  );
}

export default Header;
