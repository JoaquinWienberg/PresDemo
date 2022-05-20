import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Fade } from '@mui/material';
import "./Chart.css"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#03045e",
    color: theme.palette.common.white,
    fontSize: 17,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(3)': {
    backgroundColor: "#0077b6",
    
  },
  '&:nth-of-type(8)': {
    backgroundColor: "#0077b6",
  },
  '&:nth-of-type(3) td, &:nth-of-type(3) th': {
    color: theme.palette.common.white,
    borderTop: "5px solid black",
    borderBottom: "5px solid black",    
  },
  '&:nth-of-type(8) td, &:nth-of-type(8) th': {
    color: theme.palette.common.white,
    borderTop: "5px solid black",
    borderBottom: "5px solid black"
  },
  '&:nth-of-type(11)': {
    backgroundColor: "#023e8a",
    borderTop: "5px solid black"
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
    color: theme.palette.common.white,
  },

}));

function createData(concept, currentPeriod, previousPeriod, variation, percent, detail) {
  return { concept, currentPeriod, previousPeriod, variation, percent, detail };
}

const rows = [
  createData('Ventas', 700, 650, 50, "8%", "explicación"),
  createData('Costo de ventas', "(450)", "(400)", "(50)", "(11%)", "explicación"),
  createData('Resultado Bruto', 250, 200, 50, "20%", "explicación"),
  createData('Gastos de Administración',"(80)", "(85)", 5, "6%", "explicación"),
  createData('Gastos de Comercialización', "(40)", "(30)", "(10)","(30%)", "explicación"),
  createData('Otros ingresos y egresos operativos', 80, 40, 40, "100%", "explicación"),
  createData('Otros conceptos operativos', 50, 40, 10, "12%", "explicación"),
  createData('Resultado Operativo', 260, 165, 95, "32%", "explicación"),
  createData('Resultados financieros', 30, 20, 10, "10%", "explicación"),
  createData('Impuesto a las ganancias', "(90)", "(70)", "(20)", "(28%)", "explicación"),
  createData('Resultado del ejercicio', 200, 105, 95, "96%", "explicación"),
];


//   TOOLTIP

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      minWidth: 500,
    },
});



export default function Chart() {
  return (
    <Fade in timeout={3000}>
      <TableContainer component={Paper} sx={{ minWidth: 700, maxWidth: 900, marginLeft: "auto", marginRight: "auto", marginTop: "50px", overflow:"visible"}}>
        <Table sx={{ minWidth: "inherit", maxWidth: "inherit" }} aria-label="customized table" className="chartFont">
          <TableHead>
            <TableRow>
              <StyledTableCell>12 months ended: </StyledTableCell>
              <StyledTableCell align="right">31/12/2022</StyledTableCell>
              <StyledTableCell align="right">31/12/2021</StyledTableCell>
              <StyledTableCell align="right">Var.</StyledTableCell>
              <StyledTableCell align="right">%</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.concept}>
                <StyledTableCell component="th" scope="row">
                  {row.concept}
                </StyledTableCell>
                <StyledTableCell align="right">{row.currentPeriod}</StyledTableCell>
                <StyledTableCell align="right">{row.previousPeriod}</StyledTableCell>
                <CustomWidthTooltip title={row.detail}>
                  <StyledTableCell align="right">{row.variation}
                  </StyledTableCell>
                </CustomWidthTooltip>
                <StyledTableCell align="right">{row.percent}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
}