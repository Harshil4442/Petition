import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';



import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import '../../assets/css/style.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    label: 'Name of Author',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Contact details',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Petition details',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Publish',
    description: `Publish your petition.`,
  },
];


export default function VerticalLinearStepper() {
  const [showDelayedComponent, setShowDelayedComponent] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = (step) => {
         let errors = {};
         let isValid = true;
         setShowErrors(false);
         for (const key in formData) {
          if(step==='Name of Author' && key==='name'){
            if (formData[key]==="") {
              errors[key] = "true";
              isValid = false;
              setShowErrors(true);
            }
          }else if(step==='Contact details' && (key==='address' || key==='contactNumber' || key==='email')){
            if (formData[key]==="") {
              errors[key] = "true";
              isValid = false;
              setShowErrors(true);
            }
          }else if(step==='Petition details' && (key==='title' || key==='description' || key==='category' || key==='municipalCorpName')){
            if (formData[key]==="") {
              errors[key] = "true";
              isValid = false;
              setShowErrors(true);
            }
          }
         
         }
         if(!validNext(step))
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
         if (!isValid) {
          setFormErrors(errors);
          return;
        }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [formData, setFormData] = useState({
         title: "",
         description: "",
         municipalCorpName: "",
         address: "",
         category: "",
         name: "",
         contactNumber: "",
         email: ""
       });
       const [formErrors, setFormErrors] = useState({
         title: "",
         description: "",
         municipalCorpName: "",
         address: "",
         category: "",
         name: "",
         contactNumber: "",
         email: ""
       });
       const [showErrors, setShowErrors] = useState(false);
       const handleSubmit = (e) => {
         e.preventDefault();
         let errors = {};
         let isValid = true;
         setShowErrors(false);

         for (const key in formData) {
           if (formData[key]==="") {
             errors[key] = "true";
             isValid = false;
             setShowErrors(true);
           }
         }
    
         if (!isValid) {
          setFormErrors(errors);
          return;
        }
        // Form submission logic here
        console.log("Form submitted:", formData);
      };
      // Function to handle input changes
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Clear error message when user starts typing
        if (formErrors[id]) {
          setFormErrors({ ...formErrors, [id]: "" });
        }
      };

      const validNext=(step)=>{
        if(step==='Name of Author'){
          if(formData.name===""){
            return true;
          }
        }else if(step==='Contact details'){
          if(formData.address==="" || formData.contactNumber==="" || formData.email===""){
            return true;
          }
        }else if(step==='Petition details'){
          if(formData.title==="" || formData.municipalCorpName==="" || formData.category==="" || formData.description===""){
            return true;
          }
        }
        return false;
      }
  const inputs=(step)=>{
    if(step==='Name of Author'){
      return(
        <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'1  rem'}}>

         <input
         value={formData.name}
           className="form-control"
           id="name"
           placeholder='Name'
           onChange={handleChange}
         />
         {showErrors && formData.name === "" && <small className="text-danger">This field is required</small>}
       </div>
      )
    }
    if(step==='Contact details'){
      return(
        <>
        <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Address<span className="text-danger">*</span></h6></label>
         <input
          value={formData.address}
           className="form-control"
           id="address"
           placeholder='Address'
           onChange={handleChange}
         />
         {showErrors && formData.address === "" && <small className="text-danger">This field is required</small>}
       </div>
       <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
                <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Contact number<span className="text-danger">*</span></h6></label>
                <input
                value={formData.contactNumber}
                  type='tel'
                  className="form-control"
                  id="contactNumber"
                  placeholder='Contact number'
                  onChange={handleChange}
                />
                {showErrors && formData.contactNumber === "" && <small className="text-danger">This field is required</small>}
              </div>
              <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
                <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Email<span className="text-danger">*</span></h6></label>
                <input
                value={formData.email}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder='Email Id'
                  onChange={handleChange}
                />
                {showErrors && formData.email === "" && <small className="text-danger">This field is required</small>}
              </div>
              
              </>
      )
    }



    if(step==='Petition details'){
      return(
        <>
       <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
                <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Title<span className="text-danger">*</span></h6></label>
                <input
                  type="text"
                  value={formData.title}
                  className="form-control"
                  id="title"
                  placeholder='Title'
                  onChange={handleChange}
                />
              {showErrors && formData.title === "" && <small className="text-danger">This field is required</small>}      
       </div>
       <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Name of Municipal Corporation<span className="text-danger">*</span></h6></label>
         <input
         value={formData.municipalCorpName}
           className="form-control"
           id="municipalCorpName"
           placeholder='Name of Municipal Corporation'
           onChange={handleChange}
         />
         {showErrors && formData.municipalCorpName === "" && <small className="text-danger">This field is required</small>}
       </div>
        <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Category<span className="text-danger">*</span></h6></label>
         <input
         value={formData.category}
           className="form-control"
           id="category"
           placeholder='Category'
           onChange={handleChange}
         />
         {showErrors && formData.category === "" && <small className="text-danger">This field is required</small>}
       </div>
       <div className="form-group" style={{paddingLeft:'10px',marginTop:'2rem',marginBottom:'2rem'}}>
         <label htmlFor="exampleFormControlTextarea1" style={{marginBottom:'0.3rem'}}><h6>Description<span className="text-danger">*</span></h6></label>
         <textarea
           value={formData.description}
           className="form-control border-b"
           id="description"
           placeholder='Description'
           onChange={handleChange}
           rows="2"
         ></textarea>
         {showErrors && formData.description === "" && <small className="text-danger">This field is required</small>}
       </div>
       </>
      )
    }
  };
  const navigate = useNavigate();

  

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper  activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}
          sx={{
            '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
              color: '#242424', // circle color (COMPLETED)
            },
            '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
              color: '#31363F', // circle color (ACTIVE)
            },
            '& .css-1agspv7-MuiButtonBase-root-MuiButton-root': {
              backgroundColor: '#31363F', // circle color (ACTIVE)
            },
            '& .css-d86p8x-MuiButtonBase-root-MuiButton-root': {
              color: '#31363F', // circle color (ACTIVE)
            },
            '& .css-fuu7kn': {
              backgroundColor: '#31363F', // circle color (ACTIVE)
            },
            '& .css-d393pd': {
              color: '#31363F', // circle color (ACTIVE)
            },
            '& .css-4ff9q7.Mui-active': {
              backgroundColor: '#31363F', // circle color (ACTIVE)
            },
          }}
          >
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent >
                {inputs(step.label)}
              <Box sx={{ mb: 2 }}>
                <div style={{paddingLeft:'20px'}}>
                  <Button
                    variant="contained"
                    onClick={()=>handleNext(step.label)}
                    sx={{ mt: 5, mr: 1 }}
                    style={{fontSize:'0.7rem'}}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>

                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 5, mr: 1 }}
                    style={{fontSize:'0.7rem'}}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
          navigate("/")
      )}
    </Box>
  );
}









// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// // import '../../assets/css/style.css';
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// export default function Form1() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     municipalCorpName: "",
//     address: "",
//     category: "",
//     name: "",
//     contactNumber: "",
//     email: ""
//   });
//   const [formErrors, setFormErrors] = useState({
//     title: "",
//     description: "",
//     municipalCorpName: "",
//     address: "",
//     category: "",
//     name: "",
//     contactNumber: "",
//     email: ""
//   });
//   const [showErrors, setShowErrors] = useState(false);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let errors = {};
//     let isValid = true;
//     setShowErrors(false);

//     for (const key in formData) {
//       if (formData[key]==="") {
//         errors[key] = "true";
//         isValid = false;
//         setShowErrors(true);

//       }
//     }

//     if (!isValid) {
//       setFormErrors(errors);
//       return;
//     }

//     // Form submission logic here
//     console.log("Form submitted:", formData);
//   };

//   // Function to handle input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//     // Clear error message when user starts typing
//     if (formErrors[id]) {
//       setFormErrors({ ...formErrors, [id]: "" });
//     }
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <h3 style={{marginBottom:'2rem',marginTop:'1rem'}}>Create Petition Request</h3>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Title<span className="text-danger">*</span></h6></label>
//         <input
//           type="text"
//           value={formData.title}
//           className="form-control bg-transparent"
//           id="title"
//           onChange={handleChange}
//         />
//       {showErrors && formData.title === "" && <small className="text-danger">This field is required</small>}      </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlTextarea1" style={{marginBottom:'0.3rem'}}><h6>Description<span className="text-danger">*</span></h6></label>
//         <textarea
//           value={formData.description}
//           className="form-control bg-transparent border-b"
//           id="description"
//           onChange={handleChange}
//           rows="2"
//         ></textarea>
//         {showErrors && formData.description === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Name of Municipal Corporation<span className="text-danger">*</span></h6></label>
//         <input
//         value={formData.municipalCorpName}
//           className="form-control bg-transparent"
//           id="municipalCorpName"
//           onChange={handleChange}
//         />
//         {showErrors && formData.municipalCorpName === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Address<span className="text-danger">*</span></h6></label>
//         <input
//         value={formData.address}
//           className="form-control bg-transparent"
//           id="address"
//           onChange={handleChange}
//         />
//         {showErrors && formData.address === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Category<span className="text-danger">*</span></h6></label>
//         <input
//         value={formData.category}
//           className="form-control bg-transparent"
//           id="category"
//           onChange={handleChange}
//         />
//         {showErrors && formData.category === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Name<span className="text-danger">*</span></h6></label>
//         <input
//         value={formData.name}
//           className="form-control bg-transparent"
//           id="name"
//           onChange={handleChange}
//         />
//         {showErrors && formData.name === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Contact number<span className="text-danger">*</span></h6></label>
//         <input
//         value={formData.contactNumber}
//           type='tel'
//           className="form-control bg-transparent"
//           id="contactNumber"
//           onChange={handleChange}
//         />
//         {showErrors && formData.contactNumber === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
//         <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.3rem'}}><h6>Email<span className="text-danger">*</span></h6></label>
//         <input
//         value={formData.email}
//           type="email"
//           className="form-control bg-transparent"
//           id="email"
//           onChange={handleChange}
//         />
//         {showErrors && formData.email === "" && <small className="text-danger">This field is required</small>}
//       </div>
//       <div style={{display:'flex',justifyContent:'center'}}>
//         <button type="submit" className="btn btn-dark" style={{marginTop:'2rem',marginBottom:'2rem'}}>Submit</button>
//       </div>
      
//     </form>
//   );
// }


