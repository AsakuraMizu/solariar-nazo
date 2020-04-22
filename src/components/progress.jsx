import React from 'react';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

class Progress extends React.Component {
  handleResume = () => {
    const { cookies, history } = this.props;
    history.push(cookies.get('last'));
  }
  handleClear = () => {
    const { cookies } = this.props;
    cookies.remove('last');
  }
  render() {
    const { cookies } = this.props;
    return (
      <Container textAlign='center'>
        <Header icon>
          <Icon name='play' />
          Continue Playing...
        </Header>
        <br />
        <Button.Group>
          <Button primary onClick={this.handleResume} disabled={!cookies.get('last')}>
            Continue!
          </Button>
          <Button color='red' onClick={this.handleClear} disabled={!cookies.get('last')}>
            Clear Game Data
          </Button>
        </Button.Group>
      </Container>
    )
  }
}

export default compose(
  withCookies,
  withRouter
)(Progress);
