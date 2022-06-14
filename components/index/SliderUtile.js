import Link from "next/link";
import { React, useState } from "react";
import styled from "styled-components";

const ModelWrap = styled.div`
  position: relative;
`;
const Model = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 500px;
`;

function SliderUtile(props) {
  const [IsModel, setIsModel] = useState(false);
  const openModel = () => {
    setIsModel(true);
  };
  const closeModel = () => {
    setIsModel(false);
  };

  const urlid = `/project/${props.id}`;
  return (
    <ModelWrap>
      <Model>
        <p>프롭된거 {props.title}</p>
        <p>날짜{props.date}</p>

        <br />
        <Link href={urlid} props={props}>
          자세히 보기
        </Link>
      </Model>
    </ModelWrap>
  );
}

export default SliderUtile;
