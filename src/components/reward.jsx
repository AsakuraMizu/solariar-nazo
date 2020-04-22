import React from 'react';
import {
  Accordion,
  Container,
  Icon,
} from 'semantic-ui-react';


class Reward extends React.Component {
  state = { active: false }

  handleClick = () => this.setState({ active: !this.state.active })

  render() {
    const { active } = this.state;
    const { reward } = this.props;
    return (
      <Container textAlign='center'>
        <Accordion fluid styled>
          <Accordion.Title active={active} onClick={this.handleClick}>
            <Icon name='dropdown' />
            SPECIAL REWARD
          </Accordion.Title>
          <Accordion.Content active={active}>
            { reward }
          </Accordion.Content>
        </Accordion>
      </Container>
    )
  }
}

export default Reward;
