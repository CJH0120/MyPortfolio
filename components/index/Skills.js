import React from "react";
import styled from "styled-components";
import Image from "next/image";

//공통 css
import TitleH1 from "../../styles/common/TitleH1";

//이미지
import set3 from "../../public/img/htmlcss.png";
import reactImg from "../../public/img/react.png";
import nextImg from "../../public/img/next.png";
import Sp from "../../public/img/Sp.png";
import JAVA from "../../public/img/Java.png";
import git from "../../public/img/GitHub-Logo.png";
import SVN from "../../public/img/SVN.png";
const SkillsWrap = styled.div`
  width: 100%;
  height: 800px;
  display: block;
  position: relative;
  margin-bottom: 50px;
  background-color: #fdd20e;
`;
const SkillSectionWrap = styled.div`
  position: reletive;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
const SkillTitle = styled.div`
  padding: 10px;

  margin: 0 auto;
`;
const SkillContentWrap = styled.div`
  padding: 10px;
  margin: 50px auto;
  display: flex;

  text-align: center;
  justify-content: space-evenly;
  max-width: 1000px;
  height: 500px;

  display: flex;
`;
const SkillContent = styled.div`
  height: 100%;
  width: 250px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
`;
function Skills() {
  return (
    <>
      <div>
        <SkillsWrap>
          <SkillSectionWrap>
            <SkillTitle>
              <TitleH1>Skills</TitleH1>
            </SkillTitle>

            <SkillContentWrap>
              <SkillContent>
                <h3>FrontEnd</h3>
                <hr />
                <Image src={set3} width={200} height={200} />

                <Image src={reactImg} width={120} height={120} />
                <br />
                <br />
                <Image src={nextImg} width={100} height={100} />
              </SkillContent>

              <SkillContent>
                <h3>Backend</h3>
                <hr />
                <Image src={Sp} width={120} height={120} />
                <br />
                <br />
                <Image src={JAVA} width={210} height={140} />
              </SkillContent>

              <SkillContent>
                <h3>Version Control</h3>
                <hr />
                <br />
                <Image src={git} width={230} height={140} />
                <br />
                <br />
                <br />

                <Image src={SVN} width={180} height={160} />
              </SkillContent>
            </SkillContentWrap>
            <div id="Link"></div>
          </SkillSectionWrap>
        </SkillsWrap>
      </div>
      <style jsx>
        {`
          h3 {
            color: #c72d1b;
            text-align: left;
          }
          hr {
            margin-top: 10px;
          }
        `}
      </style>
    </>
  );
}

export default Skills;
