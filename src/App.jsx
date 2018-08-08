import 'tachyons';
import './styling/semantic.less';

import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './components/navbar';
import MyRecordsTable from './components/my-records-table';

const App = () => (
  <Container>
    <Navbar />
    <MyRecordsTable />
  </Container>
);

export default App;
