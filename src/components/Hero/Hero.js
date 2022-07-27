import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          This is a brief run down of some of the projects that I have been
          involved in, either in a team or some solely created and designed by
          the author.
        </SectionText>
        <Button
          onClick={() => (window.location = "https://jocatins-space.web.app/")}
        >
          More about the author
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
