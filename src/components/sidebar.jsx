import React from 'react';
import styled from 'styled-components';

import { Segment, Label, Input } from 'semantic-ui-react';

const FilteringSidebar = () => (
  <SidebarContainer visible>
    <Segment attached="top">
      <Input icon="search" placeholder="Search..." size="small" />
    </Segment>
    <Segment attached>
      <Label color="pink">Marriage</Label>
      <Label color="green">Births</Label>
      <Label color="grey">Rowe</Label>
      <Label color="black">Hallifax</Label>
    </Segment>
    <Segment attached>more filtering</Segment>
    <Segment attached>more filtering</Segment>
  </SidebarContainer>
);

const SidebarContainer = styled.div`
  ${'' /* border: 1px solid hotpink; */};
  top: 50px !important;
`;
export default FilteringSidebar;
