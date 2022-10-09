import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import './PreviewTable.css'


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Premium branded pakage", "Branding & Promotion", 6.0, 24, "$ 34"),
  createData("Social Media", "Social media templates", 9.0, 37, "$ 4.3"),
  createData("Web Design", "Web designing package", 16.0, 24, " $ 6.0"),
  createData("SEO", "Search engine optimization", 3.7, 67, "$ 4.3"),
];

export default function PreviewTable() {
  return (
    <TableContainer>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow className="topTablerow">
            <TableCell>Item</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hour</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
