import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { updateCompanyList } from "../../store/companySlice";
import { searchCompany } from "../../assets/api";

const MyFilter = ({ handleClose }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      job: data.get("keyword"),
      minSalary: data.get("minSalary"),
    });

    try {
      const searchCompanyList = await searchCompany({
        keyword: data.get("keyword"),
        salary: data.get("minSalary"),
      });

      dispatch(updateCompanyList(searchCompanyList));
    } catch (err) {
      console.log(err);
    }
    handleClose();
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="keyword"
        label="Keyword"
        name="keyword"
        type="text"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="minSalary"
        label="Min salary"
        type="text"
        id="minSalary"
        defaultValue={0}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Filter
      </Button>
    </Box>
  );
};

export default MyFilter;
