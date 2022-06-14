import React from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import SliderUtile from "./SliderUtile.js";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { render } from "react-dom";

//슬라이더css
const Banner_Area = styled.div`
  position: relative;
  margin-top: 40px;
  height: auto;
`;
const Banner_Wrap = styled.div`
  position: relative;
  height: 600px;
`;
const Banner_imgs = styled.div`
  margin-top: 0;
  width: 100%;
  overflow: hidden;
`;

const Banner_arrow = styled.div`
  width: 1000px;
  height: 100px;
  position: relative;
  display: block;
  margin: auto;
  top: -360px;
  left: 0;
  right: 0;
  bottom: 0;

  a {
    position: absolute;
    display: block;
    right: unset;
    left: 0;
    width: 100px;
    height: 100px;
    z-index: 3;
    opacity: 0.5;
    &:hover {
      filter: brightness(100%);

      opacity: 1;
    }
    img {
      width: 100px;
    }
  }
  .right {
    position: absolute;
    display: block;
    right: 0;
    left: unset;
  }
`;
// 가운데 보여줄친구 currentIndex
// 왼쪽 currentIndex-1
// 오른쪽 currentIndex+1

export const Slider = () => {
  let baseUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=84681a7022280cff3021d07fe9117b39";

  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setData(res.data.results);
    });
  }, []);

  const lender = Data.map((e, index) => {
    // 이미지 설정

    const urls = `https://image.tmdb.org/t/p/w500${e.poster_path}`;
    const names = `banner_img${index} banner_img`;
    const commentName = `imgcomment${index} imgcommet`;
    const id = "imgss";
    const title = e.original_title;
    return (
      <div key={e.id} className="SliderContent">
        <div className={commentName}>
          <p>{title}</p>
          <SliderUtile
            key={index}
            title={title}
            overview={e.overview}
            date={e.release_date}
            id={e.id}
          />
        </div>
        <img src={urls} width={700} height={300} className={names} id={id} />
      </div>
    );
  });

  const [isOpen, setOpen] = useState(false);
  const modelhandler = () => {
    setOpen(true);
  };
  //처음세팅
  const [imgcnt, setimgcnt] = useState(0);
  let lastcount = imgcnt - 1;
  const [CurrentIndex, SetCurrentIdx] = useState(0);
  const [MCurrentIndex, SetMCurrentIdx] = useState(19);
  const [PCurrentIndex, SetPCurrentIdx] = useState(CurrentIndex + 1);

  //bannerImg의 처음 카운트 갯수가 0이라서 변경 인식을 위해 useEffect를 사용
  useEffect(() => {
    const bannerImg = document.getElementsByClassName("banner_img");
    const bannerImgCnt = bannerImg.length;
    const imgcommet = document.getElementsByClassName("imgcommet");

    setimgcnt(bannerImgCnt);
    slideClassRemove(bannerImg, bannerImgCnt, imgcommet);
  });

  //인덱스값 결정
  const MCountIdx = () => {
    PCurrentIndex === 0 ? SetPCurrentIdx(lastcount) : "";
    CurrentIndex === 0 ? SetCurrentIdx(lastcount) : "";
    MCurrentIndex === 0 ? SetMCurrentIdx(lastcount) : "";
  };

  const PCountIdx = () => {
    PCurrentIndex === lastcount ? SetPCurrentIdx(0) : "";
    CurrentIndex === lastcount ? SetCurrentIdx(0) : "";
    MCurrentIndex === lastcount ? SetMCurrentIdx(0) : "";
  };

  //중복방지
  const slideClassRemove = (bannerImg, bannerImgCnt, imgcommet) => {
    if (bannerImgCnt !== 0) {
      for (let i = 0; i < bannerImgCnt; i++) {
        bannerImg[i].classList.remove("addd", "leftadd", "rightadd");
        imgcommet[i].classList.remove("comment");
      }
    }
    // 클래스 추가
    if (bannerImg !== undefined && bannerImgCnt) {
      bannerImg[MCurrentIndex].classList.add("leftadd");
      bannerImg[CurrentIndex].classList.add("addd");
      bannerImg[PCurrentIndex].classList.add("rightadd");
      const SliderContent = document.getElementsByClassName("SliderContent")[0];
      let bannerPr = bannerImg[CurrentIndex].parentNode;

      const addd = document.getElementsByClassName("addd")[0];
      const imgarray = imgcommet[CurrentIndex];
      bannerPr.addEventListener("mouseover", function () {
        addd.style.filter = "brightness(10%)";
        imgarray.classList.add("comment");
      });
      bannerPr.addEventListener("mouseout", function () {
        addd.style.filter = "brightness(100%)";
        imgarray.classList.remove("comment");
      });
    }
  };

  // prev next 클릭이벤트
  const rightHandler = () => {
    SetCurrentIdx(CurrentIndex + 1);
    SetPCurrentIdx(PCurrentIndex + 1);
    SetMCurrentIdx(MCurrentIndex + 1);
    PCountIdx();
    slideClassRemove();
  };
  const leftHandler = () => {
    SetCurrentIdx(CurrentIndex - 1);
    SetPCurrentIdx(PCurrentIndex - 1);
    SetMCurrentIdx(MCurrentIndex - 1);
    MCountIdx();
    slideClassRemove();

    // console.log(`mcurrentIdx = ${mcurrentIdx}` );
    // console.log(`currentIdx = ${currentIdx}` );
    // console.log(`pcurrentIdx = ${pcurrentIdx}` );
  };

  return (
    <div>
      <Banner_Area>
        <Banner_Wrap>
          <Banner_imgs>{lender}</Banner_imgs>
        </Banner_Wrap>
      </Banner_Area>
      <Banner_arrow>
        <a className="left" onClick={leftHandler}>
          <img src="https://www.joara.com/assets/ic/pc-web/bt_arr_visual_left.png" />
        </a>
        <a className="right" onClick={rightHandler}>
          <img src="https://www.joara.com/assets/ic/pc-web/bt_arr_visual_right.png" />
        </a>
      </Banner_arrow>
    </div>
  );
};
