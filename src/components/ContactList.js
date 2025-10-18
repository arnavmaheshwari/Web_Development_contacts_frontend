import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import data from '../db.js'
import { Avatar,Checkbox, IconButton } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SingleContact from './SingleContact.js';
import EditForm from './EditForm.js';
import axios from 'axios';

export default function ContactList(props) {


  // We don't require a state for colors, as by creating a state we'll need a function 
  // to set the value of state by a function, and that function can only be called once 
  // while rendering/loading the page. Hence better to use local variable, color array 
  // and set the background color of avatar like that.
  
  let colors=['#99E6E6', '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#6666FF']

  const [selectedContact, setSelectedContact] = useState(data[0].id)
  // To return the data of the selected contact, based on each contact's id

  const [showEditForm,setShowEditForm]=useState(false)

  const handleClick = (id) =>{
    props.select(id)
    props.func(true)
  }

  const getData = () => {
    axios.get("http://localhost:8080/contacts")
    // If successful response comes from the given url
    .then((response)=>{
      console.log(response.data)
    })
    // If error, that is no response comes
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>


      {/* {console.log(props.func)} */}
        {
          showEditForm == true
          ? <EditForm selectedContact={selectedContact} setShowEditForm = {setShowEditForm}/>
          : <List>
            {/* To write JS code, we use {}. We are writing to add the contents to list */}
            {
              data.map((element,index)=>{
                return(
                  <ListItem className="ab" key={element.id}>
                    {/* <ListItemButton onClick={()=>handleClick(element.id)}> */}
                      <Box className="noDisplay" sx={{width:'42px',height:'42px'}}>
                        <Avatar sx={{bgcolor:colors[parseInt(Math.random()*colors.length)]}}>{element.firstname.charAt(0)}</Avatar>
                      </Box>

                      <Box  className="display" sx={{width:'42px',height:'42px'}}>
                        <Checkbox />
                      </Box>
                      <span style={{margin: '8px'}}></span>
                      <Box sx={{flexGrow:1,cursor:"pointer"}}  onClick={()=>handleClick(element.id)}>
                        <ListItemText primary={element.firstname+" "+element.lastname}/>
                      </Box>
                      <Box className="display">
                        <IconButton>
                          <StarBorderIcon sx={{color:"#919090"}}/>
                        </IconButton>
                        <span style={{margin: '8px'}}></span>
                        <IconButton onClick={()=>{setSelectedContact(element.id); setShowEditForm(true)}}>
                          <CreateOutlinedIcon sx={{color:"#919090"}}/>
                        </IconButton>  
                        <span style={{margin: '8px'}}></span>
                        <IconButton>
                          <MoreVertOutlinedIcon sx={{color:"#919090"}}/>
                        </IconButton>  
                      </Box>
                    {/* </ListItemButton> */}
                    {/* ListItemButton is used to create a button in the list */}
                    {/* ListItemText is used to write a text in the list */}
                    {/* Disable padding is used to have the effect of button for the entire text*/}
                  </ListItem>
                )
              })
            }
           </List>
        }
      
    </Box>
  );
}
