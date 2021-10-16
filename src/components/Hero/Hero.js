import React from 'react';
import FileSaver from 'file-saver';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br/>
        I am Horair Ahmad.
      </SectionTitle>
      <SectionText>
        I provide my services for frontend development in ReactJs and NextJs.
      </SectionText>
      <Button onClick={() =>  {FileSaver.saveAs(process.env.REACT_APP_CLIENT_URL + '/public/docs/cv.docx',"cv.docx")}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;