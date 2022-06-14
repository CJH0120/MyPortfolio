import React from "react";
import Image from "next/image";
import styled from "styled-components";

//공통css
import SecondWrap from "../../styles/common/SecondWrap";
import SecondSectionWrap from "../../styles/common/SecondSectionWrap";
import SecondTitle from "../../styles/common/SecondTitle";
import TitleH1 from "../../styles/common/TitleH1";
//사진
import GitHub from "../../public/img/GitHub.png";
import velog from "../../public/img/velog.png";

import notion from "../../public/img/notion.png";

const LinkContentWrap = styled.div`
  margin: 50px auto;
  display: inline-flex;
  max-width: 1000px;
`;
const LinkContent = styled.div`
  width: 300px;
  padding: 10px;

  margin: 10px;
  height: 400px;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
`;
const LinkCss = styled.div` 
transition: all .4s ease-in-out;
&:hover {
  transform: scale(1.3);
   transition: transform .4s ease-in-out;  

  z-index: 9999;
}`;

function Link() {
  return (
    <>
      <div>
        <SecondWrap>
          <SecondSectionWrap>
            <SecondTitle>
              <TitleH1>Link</TitleH1>
            </SecondTitle>
            <LinkContentWrap>
              <LinkContent>
                <br />
                <Image src={GitHub} width={100} height={100}></Image>
                <LinkCss>
                  <br />
                  <br />

                  <a href="https://github.com/CJH0120">GitHub Link</a>
                  <br />
                  <br />
                  <br />
                  <br />
                  <ul>
                    <li>개발자로서의 성장기록</li>
                    <br />

                    <li>멘트추천</li>
                    <br />

                    <li>멘트추천</li>
                  </ul>
                </LinkCss>
              </LinkContent>

              <LinkContent>
                <br />
                <Image src={notion} width={200} height={100}></Image>
                <LinkCss>
                  <br />
                  <br />
                  <a href="https://www.notion.so/01200120/9cbb6f1d47a440a9b6c90a5ff38372f4">
                    Notion Link
                  </a>
                  <br />
                  <br />
                  <br />
                  <br />
                  <ul>
                    <li>개발자로서의 성장기록</li>
                    <br />

                    <li>멘트추천</li>
                    <br />

                    <li>멘트추천</li>
                  </ul>
                </LinkCss>
              </LinkContent>

              <LinkContent>
                <br />
                <Image src={velog} width={220} height={110}></Image>
                <LinkCss>
                  <br />
                  <br />
                  <a href="https://velog.io/@cjh0120">Velog Link</a>
                  <br />
                  <br />
                  <br />
                  <br />
                  <ul>
                    <li>개발자로서의 성장기록</li>
                    <br />

                    <li>멘트추천</li>
                    <br />

                    <li>멘트추천</li>
                  </ul>
                </LinkCss>
              </LinkContent>
            </LinkContentWrap>
          </SecondSectionWrap>
          <div id="Project"></div>
        </SecondWrap>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: coral;
        }
        h3 {
          text-align: left;
          font-size: 25px;
        }
        ul {
          list-style: none;
        }
      `}</style>
    </>
  );
}

export default Link;
