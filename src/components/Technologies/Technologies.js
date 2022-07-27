import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with two frontend technologies professionally and that is
      Angular and React. During my leisure hours, I have coded in Java, Node,
      Next js and tried writing Vue.js.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js/ Typescript and Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Little experience in <br />
            Node, Java and Next.js . PostgreSql, MySql and Mongo Db for
            databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem></ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
