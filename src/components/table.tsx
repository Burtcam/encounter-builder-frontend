import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface TableProps {
  columns: string[];
  rows: Array<Record<string, any>>;
}

const DynamicTable: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <TableContainer component={Paper}
     sx={{
            position: 'absolute', // Ensures it's placed independently
            left: '0%', // Adjusts positioning to the left side of the screen
            width: '25%', // Takes up approximately 20% of the viewport width
            borderRadius: '12px', // Rounded corners
            overflow: 'hidden', // Prevents overflow issues
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adds depth for separation
        }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col} sx={{ fontWeight: 'bold' }}>
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;