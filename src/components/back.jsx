import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

class Back extends React.Component {

  render() {
    const { history } = this.props;
    return (
      <Container textAlign='center'>
        <Header icon>
          <Icon name='close' />
          Oh dear, your answer is incorrect :(
        </Header>
        <br />
        <Button onClick={() => history.go(-1)}>Go Back</Button>
      </Container>
    )
  }
}

export default withRouter(Back);
