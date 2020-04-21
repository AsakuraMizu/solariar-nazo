import React from 'react';
import {
  Container,
  Header,
  List,
} from 'semantic-ui-react';

class AboutPage extends React.Component {
  render() {
    return (
      <Container text>
        <Header as='h1'>About Solariar Nazo</Header>
        <p>
          <del>Solariar Nazo is just a project for me to practice React.</del>
        </p>
        <p>
          At first, I just wanted to make it challengable to join in the QQ
          group of Solariar Tech. But when I understood that I can make a
          special nazo game, this project started.
        </p>
        <p>
          More infomation coming soon...
        </p>
        <Header as='h2'>TODOLIST</Header>
        <List>
          <List.Item>
            <List.Icon name='check' />
            <List.Content>Progress Saving</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='close' />
            <List.Content>i18n</List.Content>
          </List.Item>
        </List>
      </Container>
    )
  }
}

export default AboutPage;
