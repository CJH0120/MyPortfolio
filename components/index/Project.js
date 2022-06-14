import React from "react";
import styled from "styled-components";

//공통 css
import TitleH1 from "../../styles/common/TitleH1";
import { Slider } from "./Slider";

const ProjectWrap = styled.div`
  width: 100%;

  background-color: lightgrey;
`;

const ProjectSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding:20px;
  text-align:center;

  }
`;
const ProjectSlider = styled.div`
margin-bottom:50px;
 height:600px;
  }
`;

function Project() {
  //

  ///

  return (
    <ProjectWrap>
      <ProjectSection>
        <TitleH1>Project</TitleH1>
        <ProjectSlider>
          <Slider />
        </ProjectSlider>
      </ProjectSection>
    </ProjectWrap>
  );
}

export default Project;
