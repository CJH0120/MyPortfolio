import React from "react";
import styled from "styled-components";
import TitleH1 from "../../styles/common/TitleH1";
import { useState } from "react";

import Image from "next/image";
import korealogo from "../../public/img/코리아아이티.png";
const CareertWrap = styled.div`
  width: 100%;

  background-color: #fff;
`;

const CareerSectionWrap = styled.div`
  position: reletive;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;
const Careerul = styled.ul`
  position: reletive;
  width: 1000px;
  margin: 60px auto;
  text-align: center;
`;
const Careerli = styled.li`
  list-style: none;
`;
const Careerh2 = styled.h2`
  text-align: left;
`;
const CarrerContent = styled.div`
  width: 1000px;
  margin-top: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

const CarrerImg = styled.div`
  width: 150px;

  padding: 10px;
`;
const CarrerComment = styled.div`
  width: 100%;
  text-align: left;
  margin-left: 50px;
`;
function Career() {
  return (
    <>
      <div id="Career"></div>
      <CareertWrap>
        <CareerSectionWrap>
          <TitleH1>Career</TitleH1>
          <Careerul>
            <Careerli>
              <CarrerContent>
                <CarrerImg>
                  <Image src={korealogo} />
                </CarrerImg>
                <CarrerComment>
                  <Careerh2>
                    KOREA IT아카데미 AI소프트웨어 및 활용 국비 수료
                  </Careerh2>

                  <span>(2021/11/25~2022/06/22)</span>
                </CarrerComment>
              </CarrerContent>
            </Careerli>
          </Careerul>
        </CareerSectionWrap>
      </CareertWrap>
    </>
  );
}

export default Career;
