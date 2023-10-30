import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { findCiroPoint } from "../store/actions/searchActions";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function CiroSelectBox() {
  const ciroPoint = useSelector((state) => state.search.selectedCiroPoint);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(findCiroPoint(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Ciro Puanı Filtrele
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"None"}
          value={ciroPoint}
          label="Ciro Point"
          onChange={handleChange}
        >
          <MenuItem value={"None"}>None</MenuItem>
          <MenuItem value={"A"}>A</MenuItem>
          <MenuItem value={"B"}>B</MenuItem>
          <MenuItem value={"C"}>C</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CiroSelectBox;
