import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCompanyList } from "../../assets/fetchCompanyData";
import { updateCompanyList } from "../../store/companySlice";

const CompanyForm = () => {
  const dispatch = useDispatch();
  const navgigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    industry: "",
    description: "",
    websiteUrl: "",
    email: ""
  });

  const [errors, setErrors] = useState({
    companyName: "",
    phoneNumber: "",
    industry: "",
    description: "",
    websiteUrl: "",
    email: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate
    if (!formData.companyName) {
      newErrors.companyName = "Company Name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Company email is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(formData);

    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("/api/company/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({
            companyName: "",
            phoneNumber: "",
            industry: "",
            description: "",
            websiteUrl: "",
            email: ""
          });
          alert("Data posted successfully!");

          navgigate(-1);
        } else {
          alert("Error posting data to the API.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while posting data.");
      }

      //update companyList after all
      const companyList = await fetchCompanyList();
      dispatch(updateCompanyList(companyList));
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add a company</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className={`border rounded-md p-2 w-full ${
              errors.companyName ? "border-red-500" : ""
            }`}
          />
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName}</p>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
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
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="websiteUrl">Website URL:</label>
          <input
            type="text"
            id="websiteUrl"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="websiteUrl">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <Link
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            to={"/company"}
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
