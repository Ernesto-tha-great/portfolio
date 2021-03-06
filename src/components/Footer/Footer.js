import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel: +2349151819207">+2349151819207</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: ernestnamdi6@gmail.com">ernestnamdi6@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Click on the phone number or the email to either call or shoot me a mail. Decided to keep this portfolio as simple as possible which reflect my style. So if you have an interesting project or you are looking for your next dev, lets talk 😇 .</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/Ernesto-tha-great">
        <AiFillGithub size="3rem"  />
      </SocialIcons>

      <SocialIcons href="https://linkedin.com/in/ernest-molokwu">
        <AiFillLinkedin size="3rem"  />
      </SocialIcons>

      <SocialIcons href="https://instagram.com/ernest_elijah">
        <AiFillInstagram size="3rem"  />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
