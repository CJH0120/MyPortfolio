import React from "react";
import styled from "styled-components";

const IntroWrap = styled.div`
  padding: 0px;
  width: 100%;
  height: 800px;
  background-image: url("/img/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 50px;
  background-position: center center;
`;
const IntroSection = styled.div`
  max-width: 1000px;
  margin: 200px auto;
 


  }
`;

const IntroComment = styled.div`
  text-align: center;
  color: white;
`;
let today = new Date();

let today_Y = today.getFullYear();
let today_M = today.getMonth() + 1;
let Startday_Y = "2021";
let Startday_M = "11";

console.log(today_Y + "/" + today_M);
console.log(Startday_Y + "/" + Startday_M);
// int month_diff = (eYear - sYear)* 12 + (eMonth - sMonth);
let Ndate = (today_Y - Startday_Y) * 12 + (today_M - Startday_M);
let OverNdata = (Ndate / 12).toFixed(1);
let OverNdata_Y = OverNdata.split(".")[0];
let OverNdata_M = OverNdata.split(".")[1];

let te =
  Ndate < 13 ? `${Ndate} 개월 차 ` : `${OverNdata_Y}년 ${OverNdata_M}개월 차  `;
function Intro() {
  return (
    <>
      <div>
        <IntroWrap>
          <div className="blank"></div>
          <IntroSection>
            <IntroComment>
              <h1>프론트엔드 신입개발자 포트폴리오</h1>

              <br />
              <br />
              <br />
              <br />
              <br />
              <h2>안녕하세요 코딩을 시작한지 {te} 최종현입니다.</h2>
              <br />
              <br />
              <br />
              <br />
              <h2>
                저는 비전공자이며,풀스택 개발자를 목표로 앞으로
                나아가고있습니다.
              </h2>

              {/* <h3>그럼 </h3> */}
            </IntroComment>
            <div id="AboutMe"></div>
          </IntroSection>
        </IntroWrap>
      </div>

      <style jsx>{`
        .blank {
          height: 80px;
        }
      `}</style>
    </>
  );
}

export default Intro;
