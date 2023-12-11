import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; 
const handleDeleteCompany = async (companyId) => {
  fetch(`/api/company/delete/${companyId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // alert("Deleted company successfully");
      } else {
        alert("Error deleting company:", response.statusText);
      }
    })
    .catch(() => {
      // alert("Deleted company successfully");
    });
  window.location.reload();
};
const handleDelete = (companyId) => {
  confirmAlert({
    title: 'Confirm to delete',
    message: 'Are you sure to delete this.',
    buttons: [
      {
        label: 'Yes',
        onClick:  async () => {handleDeleteCompany(companyId)}
      },
      {
        label: 'No',
        onClick: () => {}
      }
    ]
  });
}
export const companyData = {
  columns: [
    { field: "companyId", headerName: "ID", width: 50 },
    {
      field: "companyName",
      headerName: "Company name",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      renderCell: (params) => (
        <div
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {params.value}
        </div>
      ),
    },
    {
      field: "industry",
      headerName: "Industry",
      width: 100,
    },
    {
      field: "phoneNumber",
      headerName: "Phone number",
      description: "This column is not sortable.",
      sortable: false,
      width: 150,
    },
    {
      field: "websiteUrl",
      headerName: "Website URL",
      description: "This column is not sortable.",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      ),
    },
    {
      field: "branches",
      headerName: "Branches",
      description: "This column is not sortable.",
      sortable: false,
      width: 400,
      innerHeight: 200,
      renderCell: (params) => (
        <div>
          {
            // console.log(params.row.branches)
            params.row.branches.map((branch, index) => (
                <li  key={index}>
                    <span>{branch.address}</span>
                </li>
            ))
          }
        </div>
      ),
    },
    {
      field: "deleteButton",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-2">
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            to={`/company/edit/${params.row.companyId}`}
          >
            Edit
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(params.row.companyId)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ],
};

export const jobseekerData = {
  columns: [
    { field: "id", headerName: "ID", width: 100 },
    { field: "fullName", headerName: "Full Name", width: 200 },
    { field: "phoneNumber", headerName: "Phone number", width: 200 },
    {
      field: "note",
      headerName: "Note",
      width: 200,
    },
    {
      field: "quote",
      headerName: "Quote",
      description: "This column is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "expSal",
      headerName: "Expected Salary",
      width: 200,
    },
    {
      field: "lastAccessed",
      headerName: "Last Accessed",
      width: 200,
    },
  ],

  rows: [
    {
      id: 1,
      fullName: "Nguyen Van A",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 2,
      fullName: "Nguyen Van B",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 3,
      fullName: "Nguyen Van C",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 4,
      fullName: "Nguyen Van D",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 5,
      fullName: "Nguyen Van E",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 6,
      fullName: "Nguyen Van F",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 7,
      fullName: "Nguyen Van G",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 8,
      fullName: "Nguyen Van H",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
    {
      id: 9,
      fullName: "Nguyen Van J",
      phoneNumber: "0123456789",
      note: "No note",
      quote: "No quote",
      expSal: "5000$",
      lastAccessed: "a day ago",
    },
  ],
};
