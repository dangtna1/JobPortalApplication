import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { companyData } from "../../assets/data";
import { Link } from "react-router-dom";

export default function CompanyTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/company/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  return (
    <div className="w-full">
      <div className="font-semibold text-2xl px-2 py-4">Company</div>

      <div style={{ height: "70vh", width: "100%" }} className="mb-4">
        <div>
          <Link
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            to={"/company/create"}
          >
            New Company
          </Link>
        </div>
        <div className="mt-2">
          {data && (
            <DataGrid
              rows={data}
              getRowId={(row) => row.companyId} // Specify a unique id based on the companyId
              columns={companyData.columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              autoHeight={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
