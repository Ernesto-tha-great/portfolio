import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
          Welcome to <br />
          The Dev God Showroom
     </SectionTitle>
     <SectionText> I am a full stack developer with experiuence in backend, frontend and mobile development. I am also a noob technical writer and passionate about blockchain development. </SectionText>
     <Button onClick={() => window.location="https://google.com"} >Learn More</Button>
   </LeftSection>
 </Section>
);

export default Hero;