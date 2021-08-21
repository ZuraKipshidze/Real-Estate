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

const RentalsInfo = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={`current${current}`}>
      <h1 css={`margin-top: 50px; color: #D6A93B;`}>Exterior</h1>
      <SliderButtons>
        <PrevArrow
          onClick={
            current === 0 ? () => setCurrent(0) : () => setCurrent(current - 1)
          }
        />
        <NextArrow
          onClick={
            current === 3 ? () => setCurrent(3) : () => setCurrent(current + 1)
          }
        />
      </SliderButtons>
    </div>
  );

  
};



export default RentalsInfo;
