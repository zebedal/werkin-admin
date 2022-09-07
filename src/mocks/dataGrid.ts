import {
    GridColDef,
} from "@mui/x-data-grid";

export const columns: GridColDef[] = [
    { field: "firstName", headerName: "First name", width: 110, flex: 1 },
    { field: "lastName", headerName: "Last name", width: 110, flex: 1 },
    { field: "cohort", headerName: "Cohort", width: 100, flex: 1 },
    { field: "organization", headerName: "Organization", width: 130, flex: 1 },
    { field: "job", headerName: "Job Title", width: 130, flex: 1 },
    { field: "roles", headerName: "Roles", width: 90, flex: 1 },
    { field: "status", headerName: "Status", width: 100, flex: 1 },
    { field: "personal", headerName: "Personal Workbook", width: 130, sortable: false, align: 'center', flex: 1 },
    { field: "shared", headerName: "Shared Workbook", width: 130, sortable: false, align: 'center', flex: 1 },

];

export const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", cohort: 'Jan 2020', organization: 'ALannister Family', job: 'Title here...', roles: 'Mentor', status: 'Active', personal: 1, shared: 2 },
    { id: 3, lastName: "Mathews", firstName: "Richard", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Mentee', status: 'Active', personal: 1, shared: 2 },
    { id: 4, lastName: "Costa", firstName: "Alda", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
    { id: 5, lastName: "Neves", firstName: "Íris", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
    { id: 6, lastName: "Spring", firstName: "Adelaide", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Mentor, Mentee', status: 'Inactive', personal: 1, shared: 2 },
    { id: 7, lastName: "Matias", firstName: "Sérgio", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
    { id: 8, lastName: "Snow", firstName: "Martha", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
    { id: 9, lastName: "Williams", firstName: "Jax", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Mentee', status: 'Inactive', personal: 1, shared: 2 },
    { id: 10, lastName: "Braga", firstName: "John", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
    { id: 11, lastName: "Edwards", firstName: "Sean", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Mentor', status: 'Active', personal: 1, shared: 2 },
    { id: 12, lastName: "Fonseca", firstName: "Sonia", cohort: 'Jan 2020', organization: 'ACME Corp', job: 'Title here...', roles: 'Buddy', status: 'Active', personal: 1, shared: 2 },
];
