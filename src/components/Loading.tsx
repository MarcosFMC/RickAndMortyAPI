import React from "react";
import styled from "styled-components";
export interface LoadingInterface {}

const Loading: React.FC<LoadingInterface> = () => {
  return (
    <LoadingStyle>
      <section>
        <div className="loader loader-1">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>
        </div>
      </section>
    </LoadingStyle>
  );
};

export const LoadingStyle = styled.div`
  section {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #303040;
  }
  .loader {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;
  }
  .loader-1 .loader-outter {
    position: absolute;
    border: 4px solid white;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: loader-1-outter 1s white infinite;
    animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
  }

  .loader-1 .loader-inner {
    position: absolute;
    border: 4px solid white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    border-right: 0;
    border-top-color: transparent;
    -webkit-animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
      infinite;
    animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
  }
`;

export default Loading;
