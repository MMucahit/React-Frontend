import * as React from "react";

import OfficeService from "../services/OfficeService";

import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

class FixedTags extends React.Component {
  state = { OfficeName: [] };

  async componentDidMount() {
    let officeService = new OfficeService();
    const response = await officeService.getOffices();
    this.setState({ OfficeName: response.data });
  }

  render() {
    const { searchOffice, handleChange } = this.props;
    const { OfficeName } = this.state;

    return (
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={searchOffice}
        onChange={handleChange}
        options={OfficeName}
        getOptionLabel={(option) => option.OfficeName}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip label={option.OfficeName} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search offices..."
            placeholder="Offices"
          />
        )}
      />
    );
  }
}

export default FixedTags;
