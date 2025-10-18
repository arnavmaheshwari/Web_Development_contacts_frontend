import React,{ useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ContactList from './components/ContactList';
import SingleContact from './components/SingleContact';

export default function App() {

    const [showSingleContact,setShowSingleContact] = useState(false)
    // We need this state function in the ContactList.js as we are clicking the button in contact list to set the value of this state
    const [selectedID,setSelectedID] = useState(null)



    return(
        <div>
                <AppBar position="static">
                    {/* To create a single toolbox. Any number of toolboxes used will be considered as one only inside the app bar */}
                    <Toolbar>
                        {/* All components of the app surface are present inside the Toolbar tag */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Contacts
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {
                    showSingleContact == true
                    ? <SingleContact id={selectedID} func = {setShowSingleContact}/>
                    : <ContactList func = {setShowSingleContact} select = {setSelectedID}/>
                }
        </div>
    )
}