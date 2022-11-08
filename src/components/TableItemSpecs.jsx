import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

export default function TableItemSpecs({ itemSpecs, isbn }) {
  const { paperType, dimensions, pages } = itemSpecs;
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell variant="head" component="th" scope="row">
              Paper Type
            </TableCell>
            <TableCell align="right">{paperType}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" component="th" scope="row">
              Dimensions
            </TableCell>
            <TableCell align="right">{dimensions}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" component="th" scope="row">
              Pages
            </TableCell>
            <TableCell align="right">{pages}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" component="th" scope="row">
              ISBN
            </TableCell>
            <TableCell align="right">{isbn}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
