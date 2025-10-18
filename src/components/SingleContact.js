import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Avatar, Box,Card,CardContent,Divider,IconButton} from '@mui/material';
import data from '../db.js'
import ContactPageIcon from '@mui/icons-material/ContactPage';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CallIcon from '@mui/icons-material/Call';



export default function SingleContact(props) {

    const [contact,setContact] = useState(data.filter((element,index)=>element.id == props.id)[0])

    return(
        <div>
            {/* {console.log(data.filter((element,index)=>element.id == props.id)[0])} */}
            {/* We create 3 boxes for three rows of information*/}
            <Box>
            <IconButton onClick={()=>props.func(false)}>
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon />
            </IconButton>
            </Box>

            <Box sx={{display:"flex",justifyContent:"center",paddingBottom:"16px"}}>
                {/* Avatar */}
                {/* <span>{contact.pic}</span> */}
                <Avatar sx={{width:128,height:128}}><span style={{fontSize:"64px"}}>{contact.firstname.charAt(0)}</span></Avatar>
            </Box>

            <Divider />

            <Box sx={{padding:'16px'}}>
                {/* Details */}
                    {/* <div>{contact.id}</div>
                    <div>{contact.name}</div>
                    <div>{contact.dob}</div>
                    <div>{contact.email}</div>
                    <div>{contact.contacts}</div> */}

                    <Card sx={{ maxWidth: 400 }}>
                    <CardContent>
                        <Box className="row">
                            <Box className="iconbox">
                                <ContactPageIcon />
                            </Box>
                            <Box>{contact.firstname}</Box>
                        </Box>
                        <Box className="row">
                            <Box className="iconbox">
                                <EmailIcon />
                            </Box>
                            <Box>{contact.email}</Box>
                        </Box>
                        <Box className="row">
                            <Box className="iconbox">
                                <CalendarTodayIcon />
                            </Box>
                            <Box>{contact.dob}</Box>
                        </Box>
                        <Box className="row">    
                            <Box className="iconbox">
                                <CallIcon />
                            </Box>
                            <Box>
                            {
                                contact.phonenumbers.map((item,index)=>{
                                    return(
                                        <Box key={index}>{item.phone}</Box>
                                    )
                                })
                            }
                            </Box>
                        </Box>
                       
                    </CardContent>
                    </Card>
            </Box>
        </div>
    )
}