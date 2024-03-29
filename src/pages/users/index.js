// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DeleteOutline } from '@mui/icons-material/index';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material/index';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const UsersPage = () => {
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9)
    ];

    return (
        <MainCard>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="center">Calories</TableCell>
                        <TableCell align="center">Fat&nbsp;(g)</TableCell>
                        <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="center">Protein&nbsp;(g)</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                            <TableCell align="center">{row.protein}</TableCell>
                            <TableCell align="center" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <Button variant="contained" color="primary" onClick={() => alert('update')}>
                                    <EditIcon />
                                </Button>
                                <Button variant="contained" color="error" onClick={() => alert('delete')}>
                                    <DeleteOutline />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </MainCard>
    );
};

export default UsersPage;
