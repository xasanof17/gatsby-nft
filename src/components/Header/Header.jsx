import React from "react";
import { Navbar } from "../../layouts";
import {
  HeaderBtn,
  HeaderBtnIcon,
  HeaderContent,
  HeaderInner,
  HeaderInnerContent,
  HeaderInnerContentInner,
  HeaderTitle,
  HeaderTxt,
  HeaderWrapper,
} from "./headerStyle";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderWrapper>
      <Navbar />
      <HeaderContent>
        <div className="container">
          <HeaderInner className="row">
            <HeaderInnerContent className="col-12 col-lg-7">
              <HeaderInnerContentInner>
                <HeaderTitle>
                  Discover rare digital art and collect NFT&prime;s
                </HeaderTitle>
                <HeaderTxt>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum.
                </HeaderTxt>
                <a href="tel:+998900198505">
                  <HeaderBtn>
                    Watch video{" "}
                    <HeaderBtnIcon>
                      <FaPlay />
                    </HeaderBtnIcon>{" "}
                  </HeaderBtn>
                </a>
              </HeaderInnerContentInner>
            </HeaderInnerContent>
          </HeaderInner>
        </div>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
