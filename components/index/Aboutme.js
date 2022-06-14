import React from "react";
import styled from "styled-components";
import Image from "next/image";

//공통css
import SecondWrap from "../../styles/common/SecondWrap";
import SecondSectionWrap from "../../styles/common/SecondSectionWrap";
import SecondTitle from "../../styles/common/SecondTitle";
import TitleH1 from "../../styles/common/TitleH1";

//이미지
import myphoto from "../../public/img/내사진.jpg";
import user from "../../public/img/user_icon.png";
import phone from "../../public/img/phone.png";
import birthday from "../../public/img/birthday.png";
import Email from "../../public/img/Email.png";
import local from "../../public/img/local.png";
import school from "../../public/img/school.png";

const AboutContentWrap = styled.div`
  padding: 10px;
  margin: 50px auto;
  max-width: 1000px;
  display: flex;
  text-align: center;
  justify-content: space-evenly;
`;
const AboutImg = styled.div`
  width: 250px;
  height: 350px;
  position: reletive;
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const AboutContent = styled.div`
  position: reletive;
  max-width: 800px;
  text-align: left;
  display: inline-grid;
  grid-template-columns: auto auto auto; ;
`;
const AboutAbout = styled.div`
  width: 230px;
  margin-top: 30px;
  height: 60px;

  margin-left: 50px;
  display: flex;
  align-items: center;
`;
const AboutAboutContent = styled.div`
  margin-left: 20px;
`;
function Aboutme() {
  return (
    <>
      <div>
        <SecondWrap>
          <SecondSectionWrap>
            <SecondTitle>
              <TitleH1>About Me</TitleH1>
            </SecondTitle>

            <AboutContentWrap>
              <AboutImg>
                <Image src={myphoto} width={262} height={370} />
              </AboutImg>
              <AboutContent>
                <AboutAbout>
                  <Image src={user} width={40} height={40} />
                  <AboutAboutContent>
                    <a className="aboutQ">이름</a>
                    <br />
                    <a className="aboutA">최종현</a>
                  </AboutAboutContent>
                </AboutAbout>

                <AboutAbout>
                  <Image src={birthday} width={40} height={40} />
                  <AboutAboutContent>
                    <a className="aboutQ">생년월일</a>
                    <br />
                    <a className="aboutA">98.01.20</a>
                  </AboutAboutContent>
                </AboutAbout>

                <AboutAbout>
                  <Image src={phone} width={40} height={40} />
                  <AboutAboutContent>
                    <a className="aboutQ">전화번호</a>
                    <br />
                    <a className="aboutA">010.4566.5789</a>
                  </AboutAboutContent>
                </AboutAbout>

                <AboutAbout>
                  <Image src={Email} width={40} height={40} />
                  <AboutAboutContent>
                    <a className="aboutQ">이메일</a>
                    <br />
                    <a className="aboutA">rhrhdksK@gmail.com</a>
                  </AboutAboutContent>
                </AboutAbout>

                <AboutAbout>
                  <Image src={local} width={40} height={40} />
                  <AboutAboutContent>
                    <a className="aboutQ">주소</a>
                    <br />
                    <a className="aboutA">경기도 수원시 영통구</a>
                  </AboutAboutContent>
                </AboutAbout>

                <AboutAbout>
                  <Image src={school} width={40} height={40} />
                  <AboutAboutContent>
                    <a className="aboutQ">학력</a>
                    <br />
                    <a className="aboutA">청주대학교 (졸)</a>
                    <br />
                    <a className="aboutA">항공기계과</a>
                  </AboutAboutContent>
                </AboutAbout>
              </AboutContent>
            </AboutContentWrap>
            <div id="Skills"></div>
          </SecondSectionWrap>
        </SecondWrap>
      </div>

      <style jsx>
        {`
          .aboutQ {
            font-size: 18px;
          }
          .aboutA {
            margin-top: 10px;
            font-size: 15px;
          }
        `}
      </style>
    </>
  );
}

export default Aboutme;
