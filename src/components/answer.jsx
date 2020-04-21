import React from 'react';
import { withCookies } from 'react-cookie';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  Container,
  Form,
  Header,
  Icon,
} from 'semantic-ui-react';

class AnswerBar extends React.Component {
  state = { answer: '' };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = () => {
    const { cookies, history } = this.props;
    const { answer } = this.state;
    cookies.set('last', answer);
    history.push(`/${answer}`);
  }
  render() {
    return (
      <Container textAlign='center'>
        <Header icon>
          <Icon name='question' />
          Input Your Answer
        </Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input name='answer' placeholder='The answer is...' onChange={this.handleChange} />
        </Form>
      </Container>
    )
  }
}

export default compose(
  withCookies,
  withRouter
)(AnswerBar);
