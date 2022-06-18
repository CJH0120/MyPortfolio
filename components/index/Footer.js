import React from "react";
import styled from "styled-components";
import Link from "next/link";
const FooterWrap = styled.div`
  width: 100%;

  background-color: black;
`;

const FooterSectionWrap = styled.div`
  position: reletive;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Footerh1 = styled.h1`
  color: white;
  padding: 15px;
  font-size: 15px;
  cursor: pointer;
`;
function Footer() {
  return (
    <FooterWrap>
      <FooterSectionWrap>
        <a href="/pdf/최종현이력서.pdf" download="최종현이력서">
          <Footerh1>이력서다운로드 </Footerh1>
        </a>
        <Link href="/pdf/최종현이력서.pdf">
          <Footerh1>이력서 보기</Footerh1>
        </Link>
      </FooterSectionWrap>
    </FooterWrap>
  );
}

export default Footer;
