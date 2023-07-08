"use client";

import styled, { keyframes } from "styled-components";

const Loading = ({ backgroundColor, pacmanColor, feedColor }) => {
  return (
    <>
      <LoadingContainer backgroundColor={backgroundColor}>
        <PacmanLoading pacmanColor={pacmanColor} feedColor={feedColor}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </PacmanLoading>
      </LoadingContainer>
    </>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  width: 70vw;
  height: 70vh;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
`;

const PacmanTop = keyframes`
    0%,
    100% {
      transform: rotate(270deg);
    }
    50% {
      transform: rotate(360deg);
    }
`;

const PacmanBottom = keyframes`
    0%,
    100% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(0deg);
    }
`;

const Pellets = keyframes`
    0% {
      left: 200%;
      opacity: 0;
      transform: translateY(-50%);
    }
    5% {
      opacity: .5;
    }
    66% {
      opacity: 1;
    }
    67% {
      opacity: 0;
    }
    100% {
      left: 0;
      transform: translateY(-50%);
    }
`;

const PacmanLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &,
  & > div {
    position: relative;
  }

  & {
    display: block;
    width: 32px;
    height: 32px;
    font-size: 0;
    /* color: #5a49f5; */
    color: ${(props) => props.pacmanColor};
  }

  & > div {
    display: inline-block;
    float: none;
    /* background-color: #696363; */
    background-color: ${(props) => props.feedColor};
    border: 0 solid ${(props) => props.pacmanColor};
  }

  & > div:nth-child(1),
  & > div:nth-child(2) {
    width: 0;
    height: 0;
    background: transparent;
    border-style: solid;
    border-width: 16px;
    border-right-color: transparent;
    border-radius: 100%;
    animation: ${PacmanTop} 0.5s 0s infinite;
  }

  & > div:nth-child(2) {
    margin-top: -32px;
    animation-name: ${PacmanBottom};
  }

  & > div:nth-child(3),
  & > div:nth-child(4),
  & > div:nth-child(5),
  & > div:nth-child(6) {
    position: absolute;
    top: 50%;
    left: 200%;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    opacity: 0;
    animation: ${Pellets} 2s 0s infinite linear;
  }

  & > div:nth-child(3) {
    animation-delay: -1.44s;
  }

  & > div:nth-child(4) {
    animation-delay: -1.94s;
  }

  & > div:nth-child(5) {
    animation-delay: -2.44s;
  }

  & > div:nth-child(6) {
    animation-delay: -2.94s;
  }
`;
