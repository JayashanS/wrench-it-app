import React from "react";
import "../styles/Reservation.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  createTheme,
  ThemeProvider,
  getContrastRatio,
} from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Reservations = () => {

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
    palette: {
      primary: {
        main: "#09BEB1",
        contrastText: getContrastRatio("#09BEB1", "#fff") > 4.5 ? "#fff" : "#111",
      },
      
    },
  });



  return (
    <div class="container-reservation">
    

    <div class="column-1">
        <p class="res-titleBar" ><span class="container-title">Request</span></p>
        
        <div class="column-3">
          <div class="innerColumn-1">
            <p class="circle-kawishka"></p>
            <p><center><span class="container-title">john Smith</span></center></p>
          </div>
          <div class="innerColumn-1">

          <FormGroup>
              
              <FormControlLabel  control={<Checkbox />} label="Service 1" />
              <FormControlLabel  control={<Checkbox />} label="Service 2" />
              <FormControlLabel  control={<Checkbox />} label="Service 3" />
              <FormControlLabel  control={<Checkbox />} label="Service 4" />
             
          </FormGroup>
  
  
          </div>
          <div class="innerColumn-1">
  
            <p><span class="container-title">Date</span></p>
            <p>10/11/2023</p>
           

      

              <Stack spacing={2} direction="row">
      
               <Button variant="contained" style={{textTransform:"none", color:"white",width:"100px"}}>Accept</Button>
      
              </Stack>

           



    
          </div>
          <div class="innerColumn-1">
            <p><span class="container-title">Time</span></p>
            <p>10.00 AM</p>

           

           <ThemeProvider theme={theme}>

              <Stack spacing={2} direction="row">
      
               <Button variant="contained" color="error" style={{textTransform:"none", color:"white",width:"100px"}}>Decline</Button>
      
              </Stack>

           </ThemeProvider>
          </div>
  
            
        </div>
  
        <div class="column-3">
          <div class="innerColumn-1">
            
          </div>
          <div class="innerColumn-1">
            
          </div>
          <div class="innerColumn-1">
            
          </div>
          <div class="innerColumn-1">
           
          </div>
            
        </div>
        <div class="column-3">
          <div class="innerColumn-1">
            
          </div>
          <div class="innerColumn-1">
            
          </div>
          <div class="innerColumn-1">
            
          </div>
          <div class="innerColumn-1">
            
          </div>
           
        </div>
  
    </div>
  
    <div class="column-2">
        <p class="res-titleBar"><span class="container-title">Accepted</span></p>
        
  
        <div class="column-4">
  
          <div class="innerRow-1">
          
           <div class="item-1"> Alice Smith</div>
           <div class="item-1"> Toyota Chammy</div>
           <div class="item-1">10/11/2023</div>
           <div class="item-1"> 16.00 pm</div>
           <div style={{marginRight:"20px"}}><CheckCircleOutlineIcon style={{color:"#09BEB1"}}/></div>
           <div ><DeleteIcon style={{color:"red"}}/></div>
           
           
           
          </div>
          <div class="innerRow-2">
           
          <FormGroup>
            <div class="item-2"> <FormControlLabel  control={<Checkbox />} label="Service 1" /></div>
            <div class="item-2"> <FormControlLabel  control={<Checkbox />} label="Service 1" /></div>
            <div class="item-2"> <FormControlLabel  control={<Checkbox />} label="Service 1" /></div>
            <div class="item-2"> <FormControlLabel  control={<Checkbox />} label="Service 1" /></div>
              
          </FormGroup>
          </div>
        </div>
  
        <div class="column-4">
  
            ddddd
        </div>
        <div class="column-4">
  
            ddddd
        </div>
        <div class="column-4">
  
            ddddd
        </div>
        <div class="column-4">
  
            ddddd
        </div>
  
    </div>
  
  </div>
  

);
};

export default Reservations;
