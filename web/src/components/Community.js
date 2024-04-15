import React,{useState,useEffect} from "react";
import axios from "axios";
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

const Community = () => {
const [isLoading, setisLoading] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const [logoImage, setLogoImage] = useState(null);
const [ad,setAd]=useState([]);
const [companyName,setCompanyName]=useState('');
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');

  
/* const handleLogoChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const logoUrl = URL.createObjectURL(file);
    setLogoImage(logoUrl,);    
    const logoLabel = document.querySelector('.logo-label');
    console.log(logoImage)
    logoLabel.innerHTML = `<img src='${logoImage}' alt="Logo" class="selected-image" />
        <input
        type="file"
        accept="image/*"
        onChange=${handleLogoChange}
        className="file-input"
         />`;
  }
}; */

const handleLogoChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const logoUrl = URL.createObjectURL(file);
    setLogoImage(logoUrl);    
  }
};

const handleLogoClick = () => {
  const fileInput = document.getElementById('logo-input');
  if (fileInput) {
    fileInput.click();
  }
};
  const handleUpload = async () => {
    if (!companyName || !startDate || !endDate || !selectedImage || !logoImage || !startTime || !endTime ) {
      alert("Please fill all the fields");
      return;
    }
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

  // Check if end date is greater than start date
    if (endDateObj <= startDateObj) {
      alert("End date should be greater than start date");
      return;
    }
   /*  console.log(startDate , endDate); */
   /*  setPostX({
      name: companyName,
      image: selectedImage,
      stDate : startDate,
      enDate : endDate,
    })
    console.log(postX.name) */
    
      const headers = {
        "Content-Type": "application/json",
      };
      const updatedData={
        garageId:"garagr123",
        startingDate: startDate,
        startingTime : startTime,
        endDate : endDate,
        endTime : endTime,
        companyName : companyName,
        logoUrl : "examoplel",
        photoUrl : "example",

      }
     

       try{
        console.log("Creating New Document...");
       
       
        await axios.post("http://localhost:4000/api/offer", updatedData, {
          headers,
        });
        console.log("New document created successfully!");
      }
    catch (error) {
      console.error("Error saving data:", error);
    }
 
    setAd([...ad,{
      name: companyName,
      image: selectedImage,
      stDate: startDate,
      enDate: endDate,
      logo : logoImage,
      stTime: startTime,
      enTime : endTime
    }])

    setCompanyName('');
    setStartDate('');
    setEndDate('');
    setStartTime('');
    setEndTime('');
   // setSelectedImage(null);
    //setLogoImage(null);

    

    /* const logoLabel = document.querySelector('.logo-label');
      logoLabel.innerHTML = `Upload-Logo
      <input
        type="file"
        accept="image/*"
        onChange={handleLogoChange}
        className="file-input"
      />`; */
    
  };
  const handleDeleteOffer = (index) => {
    const updatedAd = [...ad];
    updatedAd.splice(index, 1);
    setAd(updatedAd);
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
          <h6>Display Your Offers</h6>

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
                <div className="Sdate"><label for="startDate">Starting date:</label>
                  <input type="date" value={startDate} onChange={(e)=>setStartDate(e.target.value)} id="startDate" name="startDate"/>
                </div>
                <div className="Stime">Start Time:
                  <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </div>
                <div className="Edate"><label for="endDate">End date:</label>
                  <input type="date" value={endDate} onChange={(e)=>setEndDate(e.target.value)} id="endDate" name="endDate"/>
                </div>
                <div className="Etime"> End Time:
                  <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </div>
                <button className="upload-button" onClick={handleUpload}>
                    Upload
                 </button>
          </div>
          <div className="comes">
            {/* {selectedImage && ( */}
              <div className="selected-image-box" >
                
                <img
                  src={selectedImage}
                  alt="Upload an image by clicking post"
                  className="selected-image"
                />
                
              
              </div>
            {/* )} */}
              <div className="Details">
                <TextField
                required={true}
                label="Company Name"
                variant="outlined"
                size="small"
                fullWidth
                margin="normal"
                className="TextFieldStyles" 
                value={companyName}
                onChange={(e) => {
                  if (e.target.value.length <= 20) {
                    setCompanyName(e.target.value);
                  }
                }}
                inputProps={{ maxLength: 20 }}
                />
              <div className="RoundShape">
              <label className="logo-label" >
             {logoImage?<img
                          src={logoImage}
                          alt="Logo"
                          className="selected-image"
                          onClick={handleLogoClick}
                        />:<span>Upload-Logo</span>} 
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="file-input"
              />
            </label>
              </div>
              </div>
          </div>
        </div>
        <h6 className="inbar">Offers</h6>
          <div className="scrollable-post">
            
            {console.log(ad)}
              
               <div className="Offer">
                {
                
                ad.length>0?
                ad.map((item,index)=>(
                  <div key={index} className="OfferDisplay">
                  <div className="CompanyDetails">
                   <div className="logoAndName"> 
                    
                    <div className="logoImg">
                     {/*  {logoImage && ( */}
                        <div className="logoRound">
                          <img
                            src={item.logo}
                            alt="Logo"
                            className="selected-image"
                          />
                        </div>
                      {/* )} */}
                     </div>
                     <div className="ItemName">{item.name}</div>
                    </div>
                    <div className="Due">
                        <div className="Starting">Starts in<pre>
                          {item.stDate}</pre> {item.stTime}</div>
                        <div className="Ending">Ends in
                        <pre>{item.enDate}</pre>{item.enTime} </div>
                    </div>

                    <button className="deletePost" onClick={() => handleDeleteOffer(index)}>Delete</button>
                  </div>
                  <div className="itemImage">
                    <img
                      src={item.image}
                      alt="Upload an image by clicking post"
                      className="selected-image"
                    />
                  </div>
                </div>

                ))
                :null}
               </div>
               
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Community;