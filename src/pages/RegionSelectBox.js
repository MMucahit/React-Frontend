import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { findRegion } from "../store/actions/searchActions";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function RegionSelectBox() {
  const region = useSelector((state) => state.search.selectedRegion);
  const dispatch = useDispatch();

  const handleChange = async (event) => {
    dispatch(findRegion(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bölge Filtrele</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"None"}
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default RegionSelectBox;
