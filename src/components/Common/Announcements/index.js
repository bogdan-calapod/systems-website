import React from "react"
import SectionTitle from "components/Common/SectionTitle";
import Button from 'components/Common/Button'
import styled from "styled-components";

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

function NotificationDisplay({props}){
  let {text, title, link, linkname} = props;

  return <div>
    <SectionTitle left> {title} </SectionTitle>
    <Section>
      <p>
        {text}
      </p>
      <a href={link}>
        <Button> {linkname} </Button>
      </a>
    </Section>
  </div>
}

export default NotificationDisplay
