import classes from './styles.module.scss';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const Row = ({ label, value }) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
    <TableCell align="left">{label}</TableCell>
    <TableCell align="right">{value}</TableCell>
  </TableRow>
);

export const ProfileTable = ({ profile }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className={classes.tableCellHead}
      >
        <TableBody>
          <Row label="ФИО" value={profile.name} />
          <Row label="Дата рождения" value={profile.birthday} />
          <Row label="Взвод" value={profile.squadId} />
          <Row label="Должность" value={profile.role} />
          <Row label="Номер ВУС" value={profile.vus} />
        </TableBody>
      </Table>
    </TableContainer>
  );
};
