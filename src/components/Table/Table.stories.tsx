import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Marbella/Table',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Table>;

export const Default: Story = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell isHeader>ID</TableCell>
        <TableCell isHeader>Name</TableCell>
        <TableCell isHeader>Age</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>John Doe</TableCell>
        <TableCell>28</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>Jane Smith</TableCell>
        <TableCell>34</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell colSpan={2}>2 entries</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);
