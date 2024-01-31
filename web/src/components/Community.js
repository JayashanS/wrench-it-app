import React,{useState,useEffect} from "react";
import "../styles/Community.css";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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



const Community = () => {
  const [isLoading, setisLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  
  

  const handleUpload = () => {

    console.log("Upload button clicked. ");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      
    }
  };
  
  
  useEffect(() => {
    const initialImage = URL.createObjectURL(new File([""], "placeholder.jpg"));
    setSelectedImage(initialImage);
  }, []);

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
                 ⭐️⭐️⭐️⭐️
                 "The app provides a seamless user experience, but I noticed that the onboarding process could be more user-friendly. Consider adding interactive tutorials or tooltips to guide new users through key features."
                 - UXObserver
                 
                  
                  
                `)}
                {message(`
                  ⭐️⭐️⭐️⭐️⭐️
                  "I love this app! The user interface is intuitive, and it has become an essential tool in my daily routine. The features are fantastic, and I appreciate the regular updates that enhance the overall experience. Highly recommended!"
                  - HappyUser123
                  
                 
                `)}
                {message(`
                 ⭐️⭐️⭐️
                 "Great potential, but there's room for improvement. The app occasionally lags, especially when navigating between sections. Also, it would be great to see more customization options. Looking forward to future updates!"
                 - TechEnthusiast456
                 
                `)}
                 {message(`
                 
                 ⭐️⭐️⭐️⭐️
                  "Love the app, but it would be awesome to have a dark mode option for nighttime use. Please consider adding this feature in the next update! Keep up the good work!"
                  - NightOwlUser789

                 
                `)}
                 {message(`
                 ⭐️⭐️⭐️⭐️⭐️
                 "I faced a technical issue, but the support team was incredibly responsive and helped me resolve it promptly. Excellent customer service! The app is now working smoothly. Thank you!"
                 - GratefulUser101
                 
                 
                `)}
                
                
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <h6>Offers</h6>

          
          <div className="post-container">
          <div className="post-buttons">
            <label className="file-label">
              Post
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file-input"
              />
            </label>
            <button className="upload-button" onClick={handleUpload}>
              Upload
            </button>
          </div>
          <div className="comes">
            {selectedImage && (
              <div className="selected-image-box" >
                
                <img
                  src={selectedImage}
                  alt="Upload an image by clicking post"
                  className="selected-image"
                />
                
              
              </div>
            )}
              <div className="Details">
                <TextField
                label="Company Name"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
               className="TextFieldStyles" 
                />
              <div className="RoundShape">
                <button className="RoundButton" >
                  Upload Logo
                </button>
              </div>
              </div>
          </div>
        </div>
          <div className="scrollable-post">
              
                {posts(`
                 Offer 1 will shown in mobile app
                  
                `)}
                {posts(`
                   Offer 2 will shown in mobile app
                 
                `)}
              {posts(`
                   Offer 3 will shown in mobile app
                 
                `)}
                {posts(`
                   Offer 4 will shown in mobile app
                 
                `)}
                {posts(`
                   Offer 5 will shown in mobile app
                 
                `)}
              
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Community;