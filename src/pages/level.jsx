import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';
import AnswerBar from '../components/answer';
import Levels from '../data/levels';

class LevelPage extends React.Component {
  render() {
    const { level } = this.props.match.params;
    if (level in Levels) {
      const { display, content, reward } = Levels[level];
      return (
        <Segment.Group>
          <Segment color='blue'>
            <Container textAlign='center'>
              {display ? (
                <>
                  <Header as='h1'>{display}</Header>
                  <Divider />
                </>
              ) : null}
              {content}
            </Container>
          </Segment>
          <Segment placeholder color='yellow'>
            <AnswerBar />
          </Segment>
          {reward ? (
            <Segment color='black'>
              <Container textAlign='center'>
                <Header as='h2'>SPECIAL REWARD</Header>
                <Divider />
                {reward}
              </Container>
            </Segment>
          ) : null}
        </Segment.Group>
      )
    } else {
      const { history } = this.props;
      return (
        <Segment color='red'>
          <Container textAlign='center'>
            <Header icon>
              <Icon name='close' />
              Oh dear, your answer is incorrect :(
            </Header>
            <br />
            <Button onClick={() => history.go(-1)}>Go Back</Button>
          </Container>
        </Segment>
      )
    }
  }
}

export default withRouter(LevelPage);
