import React from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Responsive,
  Segment,
} from 'semantic-ui-react';
import AnswerBar from '../components/answer';

function HomePage() {
  const [ cookies, , removeCookie ] = useCookies();
  const history = useHistory();

  let handleResume = () => history.push(cookies.last);
  let handleReset = () => removeCookie('last');

  return (
    <React.Fragment>
      <Container text textAlign='center'>
        <Header as='h1'>Welcome to Solariar Nazo</Header>
        <p>Type <code>ONE</code> to start the game.</p>
      </Container>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Responsive minWidth={768} >
            <Divider vertical>Or</Divider>
          </Responsive>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <AnswerBar />
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name='play' />
                Continue Playing...
              </Header>
              <br/>
              <Button.Group>
                <Button primary onClick={handleResume} disabled={cookies.last === undefined}>
                  Continue!
                </Button>
                <Button color='red' onClick={handleReset} disabled={cookies.last === undefined}>
                  Clear Game Data
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  )
}

export default HomePage;
