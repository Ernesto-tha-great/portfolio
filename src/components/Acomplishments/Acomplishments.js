import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '30+', text: ' Professional and  Projects'},
  { number: 2020, text: 'The year I made a full transition to tech.', },
  { number: 3, text: 'No of events i have spoken at.', },
  { number: 18, text: 'No of people I played a direct role in bringing them into tech.', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
              <BoxNum>{card.number}</BoxNum>
              <BoxText>{card.text}</BoxText>
          </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
