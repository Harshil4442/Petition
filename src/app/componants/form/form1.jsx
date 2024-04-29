import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import '../../assets/css/style.css';
import { useState } from 'react';

export default function Form1() {
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
  return (
    <form onSubmit={handleSubmit}>
      <h3 style={{marginBottom:'2rem',marginTop:'1rem'}}>Create Petition Request</h3>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Title<span className="text-danger">*</span></h6></label>
        <input
          type="text"
          value={formData.title}
          className="form-control bg-transparent border-bottom border-secondary"
          id="title"
          onChange={handleChange}
        />
      {showErrors && formData.title === "" && <small className="text-danger">This field is required</small>}      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlTextarea1" style={{marginBottom:'0.8rem'}}><h6>Description<span className="text-danger">*</span></h6></label>
        <textarea
          value={formData.description}
          className="form-control bg-transparent border-b border-secondary"
          id="description"
          onChange={handleChange}
          rows="3"
        ></textarea>
        {showErrors && formData.description === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Name of Municipal Corporation<span className="text-danger">*</span></h6></label>
        <input
        value={formData.municipalCorpName}
          className="form-control bg-transparent border-bottom border-secondary"
          id="municipalCorpName"
          onChange={handleChange}
        />
        {showErrors && formData.municipalCorpName === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Address<span className="text-danger">*</span></h6></label>
        <input
        value={formData.address}
          className="form-control bg-transparent border-bottom border-secondary"
          id="address"
          onChange={handleChange}
        />
        {showErrors && formData.address === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Category<span className="text-danger">*</span></h6></label>
        <input
        value={formData.category}
          className="form-control bg-transparent border-bottom border-secondary"
          id="category"
          onChange={handleChange}
        />
        {showErrors && formData.category === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Name<span className="text-danger">*</span></h6></label>
        <input
        value={formData.name}
          className="form-control bg-transparent border-bottom border-secondary"
          id="name"
          onChange={handleChange}
        />
        {showErrors && formData.name === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Contact number<span className="text-danger">*</span></h6></label>
        <input
        value={formData.contactNumber}
          type='tel'
          className="form-control bg-transparent border-bottom border-secondary"
          id="contactNumber"
          onChange={handleChange}
        />
        {showErrors && formData.contactNumber === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div className="form-group" style={{marginTop:'2rem',marginBottom:'2rem'}}>
        <label htmlFor="exampleFormControlInput1" style={{marginBottom:'0.8rem'}}><h6>Email<span className="text-danger">*</span></h6></label>
        <input
        value={formData.email}
          type="email"
          className="form-control bg-transparent border-bottom border-secondary"
          id="email"
          onChange={handleChange}
        />
        {showErrors && formData.email === "" && <small className="text-danger">This field is required</small>}
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <button type="submit" className="btn btn-dark" style={{marginTop:'2rem',marginBottom:'2rem'}}>Submit</button>
      </div>
      
    </form>
  );
}
