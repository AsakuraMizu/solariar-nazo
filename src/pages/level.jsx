import React from 'react';
import { useParams } from "react-router-dom";
import {
  Container,
  Divider,
  Header,
  Segment,
} from 'semantic-ui-react';
import { Answer, Back, Reward } from '../components'
import Levels from '../levels';

function LevelPage() {
  const { level } = useParams();
  if (level in Levels) {
    const { display, content, reward } = Levels[level];
    return (
      <Segment.Group>
        <Segment color='blue'>
          <Container textAlign='center'>
            {display ? [
              <Header as='h1'>{display}</Header>,
              <Divider />
            ] : null}
            {content}
          </Container>
        </Segment>
        <Segment placeholder color='yellow'>
          <Answer />
        </Segment>
        { reward ? (
          <Segment color='black'>
            <Reward reward={reward} />
          </Segment>
        ) : null}
      </Segment.Group>
    )
  } else {
    return (
      <Segment color='red'>
        <Back />
      </Segment>
    )
  }
}

export default LevelPage;
