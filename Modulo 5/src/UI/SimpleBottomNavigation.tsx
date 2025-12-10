import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 400, position: "fixed", bottom: 0 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <Link to="/">
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                </Link>

                <Link to="/profile">
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </Link>

                <Link to="/register">
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                </Link>
            </BottomNavigation>
        </Box>
    );
}
