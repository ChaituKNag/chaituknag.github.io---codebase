import React from "react";
import Layout from "../components/common/Layout";
import AboutMe from "../components/AboutMe";
import CareerChronology from "../components/CareerChronology";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const index = () => {
  return (
    <Layout>
      <AboutMe />
      <CareerChronology />
      <Projects />
      <ContactMe />
    </Layout>
  );
};

export default index;
