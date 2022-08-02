import styled from "styled-components";

export const ActionWrapper = styled.section`
  background: var(--black2);
`;
export const ActionContent = styled.div`
  padding: 160px 0;
`;
export const ActionInner = styled.div`
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;
export const ActionBlock = styled.div`
  &:nth-child(2) {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        margin-bottom: 20px;
      }
    }
  }
`;
export const ActionBlockInner = styled.div``;
export const ActionText = styled.p`
  max-width: 448px;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1px;
  color: var(--gray);
  @media (max-width: 767px) {
    text-align: center;
    max-width: 100%;
  }
`;
export const ActionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px 38px;
  @media (max-width: 575px) {
    margin: 0px 20px;
  }
  @media (max-width: 375px) {
    margin: 0px 10px;
  }
`;
export const ActionBoxTitle = styled.h3`
  font-weight: 400;
  font-size: 56px;
  line-height: 56px;
  text-align: center;
  letter-spacing: 1px;
  color: var(--white);
`;
export const ActionBoxSpan = styled.span``;
