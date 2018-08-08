import React from 'react';
import styled from 'styled-components';
import { Table, Label } from 'semantic-ui-react';

const MyRecordsTable = () => (
  <RecordsTable celled singleLine sortable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Firstname</Table.HeaderCell>
        <Table.HeaderCell>Lastname</Table.HeaderCell>
        <Table.HeaderCell>Record date</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Record set</Table.HeaderCell>
        <Table.HeaderCell>Collection</Table.HeaderCell>
        <Table.HeaderCell>Tags</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label>Births</Label>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </RecordsTable>
);

const RecordsTable = styled(Table)`
  position: relative;
  top: 50px;
`;

export default MyRecordsTable;
