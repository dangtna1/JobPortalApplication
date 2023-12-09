import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCompanyList } from "../../assets/fetchCompanyData";
import { updateCompanyList } from "../../store/companySlice";

const CompanyEdit = () => {
  const param = useParams();
  const companyId = param.id;

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    companyId: "",
    companyName: "",
    phoneNumber: "",
    industry: "",
    description: "",
    websiteUrl: "",
  });

  useEffect(() => {
    fetch(`/api/company/${companyId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFormData(data.company);
        console.log(data);
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );

    const fetchData = async () => {
      try {
        const companyList = await fetchCompanyList();
        dispatch(updateCompanyList(companyList));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const [errors, setErrors] = useState({
    companyId: "",
    companyName: "",
    phoneNumber: "",
    industry: "",
    description: "",
    websiteUrl: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate
    if (!formData.companyName) {
      newErrors.companyName = "Company Name is required";
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
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("/api/company/update", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({
            companyId: "",
            companyName: "",
            phoneNumber: "",
            industry: "",
            description: "",
            websiteUrl: "",
          });
          alert("Data updated successfully!");
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
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Add a company</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyId">Company ID:</label>
          <input
            type="text"
            id="companyId"
            name="companyId"
            value={formData.companyId}
            onChange={handleInputChange}
            className={`border rounded-md p-2 w-full ${
              errors.companyId ? "border-red-500" : ""
            }`}
            disabled
          />
          {errors.companyId && (
            <p className="text-red-500">{errors.companyId}</p>
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

export default CompanyEdit;
