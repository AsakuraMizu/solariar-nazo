import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import {
  Container,
  Icon,
  Menu,
} from 'semantic-ui-react';

export default function () {
  return (
    <Menu fixed='top' size='small'>
      <Container>
        <Link to='/' component={Menu.Item} header>
          Solariar Nazo
        </Link>
        <NavLink to='/about' component={Menu.Item}>
          About
        </NavLink>
        <Menu.Item position='right' as='a' href='https://github.com/water-lift/solariar-nazo' target='_blank' rel='noreferrer'>
          <Icon name='github' />
          View on GitHub
        </Menu.Item>
      </Container>
    </Menu>
  );
}