import React from "react";
import styled from "styled-components";
import TitleH1 from "../../styles/common/TitleH1";

const ConncettWrap = styled.div`
  width: 100%;

  background-color: #fff;
`;

const ConncetSectionWrap = styled.div`
  position: reletive;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

function Connect() {
  return (
    <div>
      <ConncettWrap>
        <ConncetSectionWrap>
          <TitleH1>Connect</TitleH1>
          
        </ConncetSectionWrap>
      </ConncettWrap>
    </div>
  );
}

export default Connect;
