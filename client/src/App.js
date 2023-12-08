import { Navigate, Route, Routes } from "react-router-dom";
import CompanyTable from "./components/company/CompanyTable";
import JobseekerTable from "./components/jobseeker/JobseekerTable";
import Header from "./components/utils/Header";
import Home from "./components/home/Home";
import CompanyProfile from "./components/profile/CompanyProfile";

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex mt-[15vh]">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<CompanyTable />} />
          <Route path="/jobseeker" element={<JobseekerTable />} />
          <Route path="/profile/companies/:id" element={<CompanyProfile />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
