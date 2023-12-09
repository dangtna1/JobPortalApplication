import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function CustomMenu() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Company', 'JobSeeker'].map((text, index) => (
                    <Link to={text.toLowerCase()} key={index}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {
                                        text === "Home" ? (
                                            <HomeIcon />
                                        ) : text === "Company" ? (
                                            <ApartmentIcon />
                                        ) : (
                                            <PersonIcon />
                                        )
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)}>
                    <MenuIcon style={{ color: "white", fontSize: "2rem" }} />
                </Button>
                <Drawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    sx={{ zIndex: 4000 }}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}