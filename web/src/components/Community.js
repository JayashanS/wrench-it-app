import React,{useState} from "react";
import "../styles/Community.css";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

const data = [
  { value: 5, label: 'Excellent' },
  { value: 10, label: 'Good' },
  { value: 15, label: 'Average' },
  { value: 20, label: 'Poor' },
];

const size = {
  width: 300,
  height: 130,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}
function message(contents) {
  return(<div className="message">
  <span >{contents}
</span></div>
)
}
function posts(mess) {
  return(<div className="posts">
  <span >{mess}
</span></div>
)
}

// ... (imports)

const Community = () => {
  const [isLoading, setisLoading] = useState(false);

  return (
    <div className="community-container">
      <h6>Community</h6>
      <div className="div-container">
        <div className="left">
          <div className="userRatings">
            <PieChart series={[{ data, innerRadius: 50, outerRadius: 60 }]} {...size}>
              <PieCenterLabel>User Ratings</PieCenterLabel>
            </PieChart>
          </div>
          <div className="feedbacks">
            <h6>Feedbacks</h6>
            <div className="scrollable-container">
              <div className="content">
                {message(`
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  // Rest of the essay
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  
                  
                `)}
                {message(`
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  // Rest of the essay
                 
                `)}
                {message(`
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  // Rest of the essay
                 
                `)}
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h6>Community</h6>

          <div className="post1">
            <div className="accordion-container">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header">
                  <Typography>Post Here...</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Title" variant="outlined" size="small" />
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Description"
                      multiline
                      maxRows={8}
                      fullWidth
                    />
                  </Box>
                  <Stack spacing={2} direction="row" sx={{ marginLeft: "9px", marginTop: "9px" }}>
                    <Button variant="contained" disabled={isLoading} >Add Post</Button></Stack>
                </AccordionDetails>
                  </Accordion>
            </div>

            <div className="scrollable-post">
              
                {posts(`
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  // Rest of the essay
                  // (Repeat the content as needed)
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  
                `)}
                {posts(`
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  // Rest of the essay
                  // (Repeat the content as needed)
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  
                 
                `)}
                {message(`
                  Sure, here's an essay on the environment:
                  Title: The Fragile Harmony of Our Environment
                  Introduction:
                  
                  Introduction:
                  The environment, our intricate web of ecosystems, provides the very foundation of life on Earth...
                  // Rest of the essay
                 
                `)}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;

