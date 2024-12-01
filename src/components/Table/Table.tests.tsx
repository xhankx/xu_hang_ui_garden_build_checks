import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';

describe('Tests for Table component', () => {
  test('Table should render all child elements', () => {
    const { getByText } = render(
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
        </tbody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell colSpan={2}>1 entry</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(getByText('ID')).toBeVisible();
    expect(getByText('Name')).toBeVisible();
    expect(getByText('Age')).toBeVisible();
    expect(getByText('John Doe')).toBeVisible();
    expect(getByText('Total')).toBeVisible();
  });
});
