import React from "react"
import SectionTitle from "components/Common/SectionTitle";
import Button from 'components/Common/Button'
import styled from "styled-components";

import Markdown from 'react-markdown'

const Section = styled.div`
  display: flex;
  flex: ${(props) => (props.full ? "1" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &:first-child {
    margin-right: 10px;
  }

  > img {
    width: 150px;
    height: 150px;
    border-radius: 30px;
    object-fit: cover;
  }

  h2 {
    font-size: 18px;
    margin-top: 20px;
  }
`;

const Text = styled.div`
  margin-top: -25px;
  font-size: 18px;
`;

function Link({props}){
  let {link, linkname} = props;
  
  if(link !== "")
    return <a href={link}>
        <Button> {linkname} </Button>
      </a>
  return <div></div>
}

function NotificationDisplay({props}){
  let {text, title} = props;

  return <div>
    <SectionTitle left> {title} </SectionTitle>
    <Section>
      <Text><Markdown source={text} /></Text>
      <Link props={props} />
    </Section>
  </div>
}

export default NotificationDisplay
