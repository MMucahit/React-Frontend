import React, { Component } from "react";

import OfficeService from "../services/OfficeService";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class SelectOfficeBox extends Component {
  state = {
    OfficeName: [],
  };

  async componentDidMount() {
    let officeService = new OfficeService();
    const response = await officeService.getOffices();
    this.setState({ OfficeName: response.data });
  }

  render() {
    const { OfficeName } = this.state;
    const { searchOffice, handleChange } = this.props;

    return (
      <div>
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-multiple-checkbox-label">Offices</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={searchOffice}
            onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {OfficeName.map((office, index) => (
              <MenuItem key={index} value={office.OfficeName}>
                <Checkbox
                  checked={searchOffice.indexOf(office.OfficeName) > -1}
                />
                <ListItemText primary={office.OfficeName} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default SelectOfficeBox;
