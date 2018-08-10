import 'tachyons';
import './styling/semantic.less';

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Navbar from './components/navbar';
import MyRecordsTable from './components/my-records-table';
import FilteringSidebar from './components/sidebar';
import styled from '../node_modules/styled-components';

const App = () => (
  <Container>
    <Navbar />

    <Grid stackable>
      <Grid.Column width={4}>
        <FilteringSidebar />
      </Grid.Column>
      <Grid.Column width={12}>
        <MyRecordsTable />
      </Grid.Column>
    </Grid>
  </Container>
);

export default App;
