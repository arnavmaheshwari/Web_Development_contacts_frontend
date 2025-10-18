import { Box, Button, Divider, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import AccountCircle from '@mui/icons-material/AccountCircle';
import BusinessIcon from '@mui/icons-material/Business';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from 'react'
import data from '../db';

export default function EditForm(props) {

    // const [phoneNumbers, setPhoneNumbers] = useState([
    //     {
    //         code:'',
    //         phone:'',
    //         label:''
    //     }
    // ])
    // const [firstName,setFirstName] = useState("")
    // const [lastName,setLastName] = useState("")

    // const [formData,setFormData] = useState({
    //     firstname:'',
    //     lastname:'',
    //     company:'',
    //     jobtitle:'',
    //     email:'',
    //     phonenumbers:[
    //         {
    //             code:'+91',
    //             phone:'',
    //             label:''
    //         }
    //     ]
    // })

    const [formData,setFormData] = useState(data.filter((ele)=>ele.id == props.selectedContact)[0])

    const handlePhonenumbers = (index, value, name) => {
        // setFormData((prev)=> ({...prev,phonenumbers:[...prev.phonenumbers.slice(0,index),{...prev.phonenumbers[index],code:value},...prev.phonenumbers.slice(index+1)]}))
        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    phonenumbers: [...prev.phonenumbers.slice(0,index),{...prev.phonenumbers[index], [name]:value} , ...prev.phonenumbers.slice(index+1)]
                    // Or We can also use switch-cases to change different keys OR we use the name attribute in the input tag and pass it as a parameter

                    // ...prev.phonenumbers[index] gives the previously updated phonenumbers array of the given index(Spread operator(...) will give all the keys of the array separately)

                }
            )
        })
    }

    // const handleLabel = (index,value) => {
    //     setFormData((prev)=>{
    //         return(
    //             {
    //                 ...prev,
    //                 phonenumbers: [...prev.phonenumbers.slice(0,index),{...prev.phonenumbers[index],label:value} ,...prev.phonenumbers.slice(index+1)]

    //             }
    //         )
    //     })
    // }

    // const handleCode = (index,value) => {
    //     setFormData((prev)=>{
    //         return(
    //             {
    //                 ...prev,
    //                 phonenumbers: [...prev.phonenumbers.slice(0,index),{...prev.phonenumbers[index],code:value} ,...prev.phonenumbers.slice(index+1)]
    //             }
    //         )
    //     })
    // }

    const newNumber = ()=>{
        setFormData((prev=>{
            return(
                {
                    ...prev,
                    phonenumbers:[...prev.phonenumbers,{
                        // id:new Date().getTime(),
                        // We are using timestamp to get a unique id, as every passing millisecond, the id changes
                        code:'+91',
                        phone:'',
                        label:''
                    }]
                }
            )
        }))
        // setPhoneNumbers((prev)=>[
        //     ...prev,
        //     {
        //         code:"",
        //         phone:"",
        //         label:""
        //     }
        // ])
    }

    const removeNumber = (index) => {
        // console.log(index)

        // setPhoneNumbers((prev)=>prev.filter((ele,ind)=>ind!=index))
        // console.log(id) 
        // To get the id of the element inside the array
        // phoneNumbers.filter((ele)=>ele.id!=id)

        setFormData((prev)=>{
            return(
                {
                    ...prev,
                    phonenumbers:prev.phonenumbers.filter((ele,ind)=>ind!=index)
                }
            )
        })
    }
    // This function returns the previous array with an empyt set of all elements added to it

  return (
        <Box>
            {
                console.log(formData)
            }
            <Box sx={{
                display:'flex', 
                flexFlow:'row', 
                alignItems:'center', 
                height:'64px',
                paddingX:'16px'
            }}>
                <IconButton onClick={()=>props.setShowEditForm(false)}>
                    <CloseIcon />
                </IconButton>
                <Typography component="span">Edit Contact</Typography>
                <span style={{flexGrow:1}}></span>
                <Button variant="contained">Save</Button>
            </Box>

            <Divider />

            <form>
                <Box sx={{display:"flex", justifyContent:"center"}}>
                    <IconButton component="label" sx={{
                        height:'128px',
                        width:'128px'
                    }}>
                        <input hidden accept="image/*" type="file" />
                        <AddPhotoAlternateOutlinedIcon sx={{height:48, width:48}} />
                    </IconButton>
                </Box>

                <Box>
                    <Stack>
                        <Box sx={{ display: 'flex'}}>
                            <AccountCircle sx={{ color: 'action.active', mr: 2, mt: 3 }} />
                            {/* {console.log(formData)} */}
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <TextField id="input-with-sx" label="First Name" variant="standard" value={formData.firstname} onChange={(event)=>setFormData((prev)=>({...prev,firstname:event.target.value}))}/>
                                <TextField id="input-with-sx" label="Last Name" variant="standard" value={formData.lastname} onChange={(event)=>setFormData((prev)=>({...prev,lastname:event.target.value}))}/>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex'}}>
                            <BusinessIcon sx={{ color: 'action.active', mr: 2, mt: 3 }} />
                            
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <TextField id="input-with-sx" label="Company" variant="standard" value={formData.company} onChange={(event)=>setFormData((prev)=>({...prev,company:event.target.value}))}/>
                                <TextField id="input-with-sx" label="Job Title" variant="standard" value={formData.jobtitle} onChange={(event)=>setFormData((prev)=>({...prev,jobtitle:event.target.value}))}/>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <MailOutlineIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />

                            <TextField id="input-with-sx" label="Email" variant="standard" value={formData.email} onChange={(event)=>setFormData((prev)=>({...prev,email:event.target.value}))}/>
                        </Box>

                        {
                            formData.phonenumbers.map((element, index)=>{
                                return (
                                    <Box key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                            <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 2, my: 0.5 }} />
                                            {/* <InputLabel id="countrycode">Country</InputLabel> */}
                                            <Select
                                                id="countrycode"
                                                variant='standard'
                                                name='code'
                                                // value={formData.phonenumbers[index].code==''?'+91':formData.phonenumbers[index].code}
                                                value={formData.phonenumbers[index].code}
                                                onChange={(event)=>{handlePhonenumbers(index, event.target.value, event.target.name)}}
                                                label="Country"
                                                sx={{mr:0.5}}
                                            >
                                                <MenuItem value='+91'>+91</MenuItem>
                                                <MenuItem value='+92'>+92</MenuItem>
                                                <MenuItem value='+93'>+93</MenuItem>
                                            </Select>
                                            
                                            <TextField id="phonenumber" label="Phone" variant="standard" name='phone' value={formData.phonenumbers[index].phone} onChange={(event)=>handlePhonenumbers(index, event.target.value, event.target.name)}/>
                                            {
                                                index==0
                                                ?<IconButton onClick={newNumber}>
                                                    <AddCircleOutlineIcon />
                                                </IconButton>
                                                :<IconButton className="visible" onClick={()=>removeNumber(index)}>
                                                    <CloseIcon />
                                                </IconButton>
                                            }
                                        </Box>
                                        <Box sx={{ml:12}}>
                                            <TextField id="numberlabel" label="Label" variant="standard" name='label' value={formData.phonenumbers[index].label} onChange={(event)=>handlePhonenumbers(index, event.target.value, "label")}/>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                        

                    </Stack>
                </Box>
            </form>
        </Box>
  )
}
