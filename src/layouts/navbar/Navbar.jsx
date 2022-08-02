import React from "react";
import {
  BlockInner,
  NavbarWrapper,
  NavBlock,
  NavBtn,
  NavContent,
  NavItem,
  NavLink,
  NavList,
  NavLogo,
} from "./navbarStyle";
import { links } from "../../data";
import { images } from "./../../constants";

const navbar = () => {
  return (
    <NavbarWrapper>
      <div className="container">
        <NavContent className="row">
          <NavLogo className="col-sm-1 col">
            <img src={images.logo} alt="logo" />
          </NavLogo>
          <NavBlock className="col-sm-11 col">
            <BlockInner>
              <NavList>
                {links.map(({ id, name, href }) => (
                  <NavItem key={id}>
                    <NavLink href={href}>{name}</NavLink>
                  </NavItem>
                ))}
              </NavList>
              <a href="tel:+998900198505">
                <NavBtn>Buy Template</NavBtn>
              </a>
            </BlockInner>
          </NavBlock>
        </NavContent>
      </div>
    </NavbarWrapper>
  );
};

export default navbar;
