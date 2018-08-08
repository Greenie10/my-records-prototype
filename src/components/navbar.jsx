import React from 'react';

import { Menu, Container } from 'semantic-ui-react';

const Navbar = () => (
  <Menu color="blue" fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        OrganiseMyPast
      </Menu.Item>
    </Container>
  </Menu>
);
export default Navbar;
