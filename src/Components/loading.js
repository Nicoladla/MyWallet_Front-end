import styled from "styled-components";

import { RotatingLines } from "react-loader-spinner";

import { SCREEN_BACKGROUND } from "../Constants/mainColors";

export default function Loading() {
  return (
    <ScreenLoading>
      <RotatingLines
        strokeColor="#ffffff"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </ScreenLoading>
  );
}

const ScreenLoading = styled.div`
  background-color: ${SCREEN_BACKGROUND};
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
