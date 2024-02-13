import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import Votes from './Votes';

// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');

    const candidates = [
        {
            name: 'Mohamed Farah',
            image: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4='
        },
        {
            name: 'Hussein Ahmed',
            image: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4='
        },

        {
            name: 'Asma Guled',
            image: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4='
        },
        {
            name: 'Asma Guled',
            image: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4='
        },
        {
            name: 'Asma Guled',
            image: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=1024x1024&w=is&k=20&c=v0FzN5RD19wlMvrkpUE6QKHaFTt5rlDSqoUV1vrFbN4='
        }
    ];

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            {/* <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid> */}

            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <MainCard content={false} sx={{ mt: 1.5, minHeight: '80vh' }}>
                    <Box sx={{ pt: 1, pr: 2 }}>{/* <IncomeAreaChart slot={slot} /> */}</Box>
                    <Grid container>
                        <Grid item md={4}>
                            <Votes seriesData={[120]} labels={['Total Votes']} />
                        </Grid>
                        <Grid item md={4}>
                            <Votes seriesData={[0]} labels={['Casted Votes']} />
                        </Grid>
                        <Grid item md={4}>
                            <Votes seriesData={[0]} labels={['Remaining Votes']} />
                        </Grid>
                    </Grid>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <Grid container spacing={2}>
                            {candidates.map((candidate, index) => (
                                <Grid key={index} item xs={12} sm={6} md={3} lg={4}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Avatar alt={candidate.name} src={candidate.image} />
                                        <Typography variant="h3" align="center">
                                            {candidate.name}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box> */}
                </MainCard>
            </Grid>

            <Grid item xs={12} sx={{ mb: -4 }}>
                <Typography variant="h3">Result</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>{/* <IncomeAreaChart slot={slot} /> */}</Box>
                    <Votes />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
