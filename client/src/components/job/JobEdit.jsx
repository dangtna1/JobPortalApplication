import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateJobList } from '../../store/jobSlice';
import { useDispatch } from 'react-redux';


const JobEdit = () => {
    const location = useLocation();
    const [formData, setFormData] = useState(location.state);
    console.log( location.state);
    const dispatch = useDispatch();
    const navgigate = useNavigate();
    
    const [errors, setErrors] = useState({
        jobId: "",
        address: "",
        companyName: "",
        deadline: "",
        industry: "",
        jobSkills: "",
        salary:"",
        title:"",
      });

      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Validate
        if (!formData.companyName) {
          newErrors.companyName = "Company Name is required";
          isValid = false;
        }

        if (formData.salary <= 0) {
          newErrors.salary = "Invalid Salary";
          isValid = false;
        }

        if (!formData.title) {
            newErrors.title = "Job title is required";
            isValid = false;
        }
    
        if (!formData.maxNoApplicants) {
            newErrors.maxNoApplicants = "Max Number Of Application is required";
            isValid = false;
        }
        if (formData.maxNoApplicants < 0) {
          newErrors.maxNoApplicants = "Invalid number";
          isValid = false;
      }
        setErrors(newErrors);
        return isValid;
      };

      const handleInputChange = (e) => {
        setErrors({
          jobId: "",
          address: "",
          companyName: "",
          deadline: "",
          industry: "",
          jobSkills: "",
          salary:"",
          title:"",
        })
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
          try {
            const response = await fetch("/api/job", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
    
            if (response.ok) {
              setFormData({
                jobId: "",
                address: "",
                companyName: "",
                deadline: "",
                industry: "",
                jobSkills: "",
                salary:"",
                title:""
              });
              alert("Data updated successfully!");

              const data = await response.json();
              dispatch(updateJobList(data));
              navgigate(-1);
            } else {
              alert("Error updating data.");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while updating data.");
          }
        }
      };

    return (
      <div className='w-full border shadow-lg p-8 text-xl rounded-lg '>
        <div className="container mx-auto">
        <h1 className="text-2xl font-semibold mb-4">JOB</h1>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="jobId">job ID:</label>
            <input
              type="text"
              id="jobId"
              name="jobId"
              value={formData.jobId}
              onChange={handleInputChange}
              className={`border rounded-md p-2 w-full ${
                errors.jobId ? "border-red-500" : ""
              }`}
              disabled
            />
            {errors.jobId && (
              <p className="text-red-500">{errors.jobId}</p>
            )}
          </div>
          <div>
            <label htmlFor="address">Address Company:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={`border rounded-md p-2 w-full ${
                errors.address ? "border-red-500" : ""
              }`}
              disabled
            />
            {errors.address && (
              <p className="text-red-500">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
              disabled
            />
            {errors.companyName && (
            <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label htmlFor="industry">Industry:</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
              disabled
            />
          </div>
          <div>
            <label htmlFor="salary">Salary:</label>
            <input
              type='number'
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
            {errors.salary && (
            <p className="text-red-500">{errors.salary}</p>
            )}
          </div>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
            {errors.title && (
            <p className="text-red-500">{errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="title">Max Number Of Application:</label>
            <input
              type="input"
              id="maxNoApplicants"
              name="maxNoApplicants"
              value={formData.maxNoApplicants}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
            {errors.maxNoApplicants && (
            <p className="text-red-500">{errors.maxNoApplicants}</p>
            )}
          </div>

          <div>
            <label htmlFor="title">Requirement:</label>
            <input
              type="text"
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="title">Responsibilities:</label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleInputChange}
              className="border rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label htmlFor="title">Status Of Job:</label>
            <select name="status" id="status" onChange={handleInputChange} value={formData.status}>
                <option value="true">OPEN</option>
                <option value="false">CLOSED</option>
            </select>
          </div>
          <div>
            <Link
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              to={"/job"}
            >
              Go Back
            </Link>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              Submit
            </button>
          </div>
          
        </form>
      </div>
      </div>
    )
}

export default JobEdit