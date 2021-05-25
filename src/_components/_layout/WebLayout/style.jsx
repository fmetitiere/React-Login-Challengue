import styled from "styled-components";

const BackgroundWrapper = styled.div`
  width: 40rem;
  height: 40rem;
  z-index: 1999;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  overflow: hidden;
  background: rgb(0 0 0 / 95%);
`;

export function Content({ children }) {
  return (
    <BackgroundWrapper>
      <>{children}</>
    </BackgroundWrapper>
  );
}
