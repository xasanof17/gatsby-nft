import styled from "styled-components";
import header from "../../assets/img/header.svg";

export const HeaderWrapper = styled.header`
  min-height: 752px;
  height: 100%;
  background: url(${header}) no-repeat center / cover;
`;

export const HeaderContent = styled.div`
  margin-top: 60px;
  @media (max-width: 1024px) {
    margin-top: 40px;
  }
  @media (max-width: 620px) {
    margin-top: 60px;
  }
`;
export const HeaderInner = styled.div``;
export const HeaderInnerContent = styled.div``;
export const HeaderInnerContentInner = styled.div`
  @media (max-width: 620px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    backdrop-filter: blur(1.5px);
    padding: 20px;
  }
`;

export const HeaderTitle = styled.h1`
  max-width: 100%;
  width: 100%;
  font-family: var(--font-p);
  font-weight: 400;
  font-size: 84px;
  line-height: 100px;
  letter-spacing: 1px;
  margin-bottom: 22px;
  @media (max-width: 1024px) {
    font-size: 70px;
  }
  @media (max-width: 620px) {
    font-size: 50px;
    text-align: center;
    line-height: 60px;
  }
  @media (max-width: 575px) {
    font-size: 45px;
  }
  @media (max-width: 575px) {
    font-size: 36px;
  }
  @media (max-width: 425px) {
    font-size: 32px;
  }
  @media (max-width: 375px) {
    font-size: 27px;
  }
`;
export const HeaderTxt = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 1px;
  color: var(--gray);

  @media (max-width: 425px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
  }
`;
export const HeaderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  background: var(--black2);
  color: var(--white);
  font-family: var(--font-p);
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 1px;
  margin-top: 100px;
  position: relative;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1%;
    height: 100%;
    background: var(--white);
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  &:hover {
    color: var(--violet);
    &::before {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 55px;
  }
  @media (max-width: 460px) {
    font-size: 28px;
    line-height: 35px;
    padding: 15px 40px;
  }
  @media (max-width: 375px) {
    font-size: 22px;
    line-height: 30px;
    padding: 15px 35px;
  }
`;
export const HeaderBtnIcon = styled.span`
  margin-left: 10px;
  padding: 7px 5px 7px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  font-size: 20px;
  svg {
    fill: var(--violet);
  }
`;
