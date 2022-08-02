import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  padding: 20px 0;
  background: transparent;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 575px) {
    justify-content: center;
  }
  @media (max-width: 460px) {
    justify-content: start;
  }
`;

export const NavLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 575px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;
  }
  @media (max-width: 460px) {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

export const NavBlock = styled.div``;

export const BlockInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 460px) {
    justify-content: flex-end;
  }
`;

export const NavList = styled.ul`
  display: flex;
  @media (max-width: 460px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  padding: 0 18px;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 1px;
  color: var(--white);
  transition: 0.5s ease;
  &:hover {
    color: var(--violet);
  }
  @media (max-width: 575px) {
    padding: 0 10px;
  }
`;

export const NavBtn = styled.button`
  background: var(--violet);
  font-family: var(--font-p);
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 1px;
  color: var(--white);
  padding: 10px 40px;
  border: 2px solid var(--violet);
  border-radius: 1px;
  @media (max-width: 620px) {
    padding: 10px 30px;
  }
  @media (max-width: 575px) {
    padding: 10px 15px;
  }
  @media (max-width: 460px) {
    padding: 10px 30px;
  }
  @media (max-width: 418px) {
    padding: 10px 15px;
  }
  @media (max-width: 460px) {
    padding: 10px;
  }
`;
