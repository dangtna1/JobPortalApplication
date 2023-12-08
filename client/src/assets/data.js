export const companyData = {
    columns: [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'companyName', headerName: 'Company name', width: 200 },
        { field: 'phoneNumber', headerName: 'Phone number', width: 200 },
        {
            field: 'industry',
            headerName: 'Industry',
            width: 200,
        },
        {
            field: 'description',
            headerName: 'Description',
            description: 'This column is not sortable.',
            sortable: false,
            width: 200,
        },
        {
            field: 'websiteUrl',
            headerName: 'Website URL',
            description: 'This column is not sortable.',
            sortable: false,
            width: 200,
        },

    ],

    rows: [
        { id: 1, companyName: 'A Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 2, companyName: 'B Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 3, companyName: 'C Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 4, companyName: 'D Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 5, companyName: 'E Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 6, companyName: 'F Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 7, companyName: 'G Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 8, companyName: 'H Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
        { id: 9, companyName: 'J Company', phoneNumber: '0123456789', industry: "IT", description: "No description", websiteUrl: "https://abc.com" },
    ]

}


export const jobseekerData = {
    columns: [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'fullName', headerName: 'Full Name', width: 200 },
        { field: 'phoneNumber', headerName: 'Phone number', width: 200 },
        {
            field: 'note',
            headerName: 'Note',
            width: 200,
        },
        {
            field: 'quote',
            headerName: 'Quote',
            description: 'This column is not sortable.',
            sortable: false,
            width: 200,
        },
        {
            field: 'expSal',
            headerName: 'Expected Salary',
            width: 200,
        },
        {
            field: 'lastAccessed',
            headerName: "Last Accessed",
            width: 200
        }

    ],

    rows: [
        { id: 1, fullName: 'Nguyen Van A', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 2, fullName: 'Nguyen Van B', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 3, fullName: 'Nguyen Van C', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 4, fullName: 'Nguyen Van D', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 5, fullName: 'Nguyen Van E', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 6, fullName: 'Nguyen Van F', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 7, fullName: 'Nguyen Van G', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 8, fullName: 'Nguyen Van H', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
        { id: 9, fullName: 'Nguyen Van J', phoneNumber: '0123456789', note: "No note", quote: "No quote", expSal: "5000$", lastAccessed: "a day ago" },
    ]
}