import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Responsive,
  Segment,
} from 'semantic-ui-react';
import Answer from '../components/answer';
import Progress from '../components/progress';


function HomePage() {
  return (
    <React.Fragment>
      <Container text textAlign='center'>
        <Header as='h1'>Welcome to Solariar Nazo</Header>
        <p>Type <code>ONE</code> to start the game.</p>
      </Container>
      <Segment placeholder>
        <Grid columns={2} stackable>
          <Responsive minWidth={768} >
            <Divider vertical>Or</Divider>
          </Responsive>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Answer />
            </Grid.Column>
            <Grid.Column>
              <Progress />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </React.Fragment>
  )
}

export default HomePage;
