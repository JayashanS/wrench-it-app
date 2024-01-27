import React, { useState } from "react";
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
import { Accordion, Card } from "react-bootstrap";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


{/*}
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
*/}


import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';




function Reservations () {

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
  

//
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = date.daysInMonth();
      const daysToHighlight = [1, 2, 3].map(() => getRandomNumber(1, daysInMonth));

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException('aborted', 'AbortError'));
    };
  });
}

const initialValue = dayjs('2022-04-17');

function ServerDay(props) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth && highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🌚' : undefined}
    >
      <PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
    </Badge>
  );
}

const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  }


//

  //const [value, setValue] = React.useState(dayjs('2022-04-17'));

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };



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

            <p><span class="container-title">Date</span>
            <br/>10/11/2023</p>
            <p><span class="container-title">Vehicle</span><br/>
            Prius</p>
          
  
  
          </div>
          <div class="innerColumn-1">
  
            <p><span class="container-title">Time</span>
            <br/>10.00 AM</p>
            <p><span class="container-title">Contact</span>
            <br/>0778149714</p>

              
          </div>
          <div class="innerColumn-1">
            <Stack spacing={2} direction="row">
                <Button variant="contained" style={{textTransform:"none", color:"white",width:"100px"}}>Accept</Button>
            </Stack>
            <br/>
              <Stack spacing={2} direction="row">
               <Button variant="contained" color="error" style={{textTransform:"none", color:"white",width:"100px"}}>Decline</Button>

              </Stack>
            <br/>
            <Stack spacing={2} direction="row">
            <Button className="service-button"style={{textTransform:"none"}} endIcon={<KeyboardArrowDownIcon/>} onClick={toggleAccordion}>
             Service
            </Button>

            </Stack>


            {isAccordionOpen && (
              <div className="service-accordion">
                <Card className="service-accordion-card">
                <Card.Body>
                    <Accordion defaultActiveKey="0">
                      Have some battery issue
                      <br />
                      <br/>
                      <button className="service-button" onClick={toggleAccordion}>
                      Close
                      </button>
                    </Accordion>
                  </Card.Body>
                </Card>
              </div>
            )}


          
          </div>
  
            
        </div>
  
        <div class="column-3">

        <div class="innerColumn-1">
            <p class="circle-kawishka"></p>
            <p><center><span class="container-title">john Smith</span></center></p>
          </div>
          <div class="innerColumn-1">

            <p><span class="container-title">Date</span>
            <br/>10/11/2023</p>
            <p><span class="container-title">Vehicle</span><br/>
            Prius</p>
          
  
  
          </div>
          <div class="innerColumn-1">
  
            <p><span class="container-title">Time</span>
            <br/>10.00 AM</p>
            <p><span class="container-title">Contact</span>
            <br/>0778149714</p>

              
          </div>
          <div class="innerColumn-1">
            <Stack spacing={2} direction="row">
      
                <Button variant="contained" style={{textTransform:"none", color:"white",width:"100px"}}>Accept</Button>

            </Stack>
            <br/>
              <Stack spacing={2} direction="row">
      
               <Button variant="contained" color="error" style={{textTransform:"none", color:"white",width:"100px"}}>Decline</Button>
      
              </Stack>
            <br/>

            <Button>
             Service
            </Button>
           


          
          </div>
        

        </div>
        <div class="column-3">
        <div class="innerColumn-1">
            <p class="circle-kawishka"></p>
            <p><center><span class="container-title">john Smith</span></center></p>
          </div>
          <div class="innerColumn-1">

            <p><span class="container-title">Date</span>
            <br/>10/11/2023</p>
            <p><span class="container-title">Vehicle</span><br/>
            Prius</p>
          
  
  
          </div>
          <div class="innerColumn-1">
  
            <p><span class="container-title">Time</span>
            <br/>10.00 AM</p>
            <p><span class="container-title">Contact</span>
            <br/>0778149714</p>

              
          </div>
          <div class="innerColumn-1">
            <Stack spacing={2} direction="row">
      
                <Button variant="contained" style={{textTransform:"none", color:"white",width:"100px"}}>Accept</Button>

            </Stack>
            <br/>
              <Stack spacing={2} direction="row">
      
               <Button variant="contained" color="error" style={{textTransform:"none", color:"white",width:"100px"}}>Decline</Button>
      
              </Stack>
            <br/>

            <Button>
             Service
            </Button>
            

          
          </div>
        </div>
  
    </div>
  
    <div class="column-2">





      <div class="calenderContainer">
      
      

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>


            {/*}  
            <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
              
              <DemoItem label="Calendar">
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
            */}
      </div>
      <div class="reservationContainer">
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
           
          have a Electrical problem
          </div>
        </div>
  
        
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
          
         have a Electrical problem
         </div>
        </div>
        
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
          
          have a Electrical problem
         
         </div>
        </div>
        </div>
    </div>
  
  </div>
  

);
};

export default Reservations;
