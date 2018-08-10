import React from 'react';
import styled from 'styled-components';
import { Table, Label } from 'semantic-ui-react';

const MyRecordsTable = () => (
  <RecordsTable selectable compact unstackable>
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
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Charles</Table.Cell>
        <Table.Cell>Hallifax</Table.Cell>
        <Table.Cell>1871</Table.Cell>
        <Table.Cell>Hampstead St John</Table.Cell>
        <Table.Cell>Parish records 1799-1927</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Hallifax</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Elsie Mabel</Table.Cell>
        <Table.Cell>Rowe</Table.Cell>
        <Table.Cell>1909</Table.Cell>
        <Table.Cell>Wandsworth, London, England</Table.Cell>
        <Table.Cell>England & Wales Marriages 1837-2005</Table.Cell>
        <Table.Cell>Civil Marriage & Divorce</Table.Cell>
        <Table.Cell>
          <Label>Rowe</Label>
          <Label>Marriage</Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Matilda</Table.Cell>
        <Table.Cell>Eldridge</Table.Cell>
        <Table.Cell>1811</Table.Cell>
        <Table.Cell>Ambrosden, Oxfordshire, England</Table.Cell>
        <Table.Cell>England Births & Baptisms 1538-1975</Table.Cell>
        <Table.Cell>Births & Baptisms</Table.Cell>
        <Table.Cell>
          <Label>Eldridge</Label>
          <Label color="green">Births</Label>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </RecordsTable>
);

const RecordsTable = styled(Table)`
  position: relative;
`;

export default MyRecordsTable;
