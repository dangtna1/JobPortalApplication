import { Navigate, Route, Routes } from "react-router-dom";
// import CompanyTable from "./components/company/CompanyTable";
import JobseekerTable from "./components/jobseeker/JobseekerTable";
import Header from "./components/utils/Header";
import Home from "./components/home/Home";
import CompanyProfile from "./components/profile/CompanyProfile";
import CompanyTable from "./components/company/CompanyTable";
import CompanyForm from "./components/company/CompanyForm";
import CompanyEdit from "./components/company/CompanyEdit";
import Layout from "./components/utils/Layout";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import JobEdit from "./components/job/JobEdit";
import JobProfile from "./components/job/JobProfile";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/job" />} />
          <Route path="/job/" element={<Home />} />
          <Route path="/job/edit/:id" element={<JobEdit />} />
          <Route path="/job/detail/:id" element={<JobProfile />} />
          <Route path="/company" element={<CompanyTable />} />
          <Route path="/company/create" element={<CompanyForm />} />
          <Route path="/company/edit/:id" element={<CompanyEdit />} />
          <Route path="/jobseeker" element={<JobseekerTable />} />
          <Route path="/profile/companies/:id" element={<CompanyProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
