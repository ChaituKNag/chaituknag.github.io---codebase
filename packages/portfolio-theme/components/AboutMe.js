import React from "react";
import styled from "styled-components";
import { SubHeader } from "./common/styled/headings";
import { GradientButton } from "./common/styled/GradientButton";

const AboutMeSection = styled.section`
  margin: 37px 25px;
`;

const AboutMe = () => {
  return (
    <AboutMeSection>
      <SubHeader>About Me</SubHeader>
      <GradientButton>Web Developer</GradientButton>
      <GradientButton>Proud Father</GradientButton>
      <GradientButton>Human Being</GradientButton>
    </AboutMeSection>
  );
};

export default AboutMe;
