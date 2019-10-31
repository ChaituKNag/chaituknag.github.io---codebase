import React from "react";
import styled from "styled-components";
import { SubHeader } from "./common/styled/headings";

const CareerChronologySection = styled.section`
  margin: 37px 25px;
`;

const CareerChronology = () => {
  return (
    <CareerChronologySection>
      <SubHeader>Career Chronology</SubHeader>
    </CareerChronologySection>
  );
};

export default CareerChronology;
