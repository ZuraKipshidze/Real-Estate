import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "./styles.css";

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd823f;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButtons}
`;

const RentalsInfo2 = () => {
  const [current, setCurrent] = useState(4);

  return (
    <div 
    css={`margin-top: 2vh;
     max-width: 800px;
     margin-left: auto;
     margin-right: auto;
     `} 
    className={`current${current}`}>
      <h1 css={`margin-top: 50px; color: white;`}>Interior</h1>
      <SliderButtons>
        <PrevArrow
          onClick={
            current === 4 ? () => setCurrent(4) : () => setCurrent(current - 1)
          }
        />
        <NextArrow
          onClick={
            current === 7 ? () => setCurrent(7) : () => setCurrent(current + 1)
          }
        />
      </SliderButtons>
    </div>
  );

  
};



export default RentalsInfo2;
