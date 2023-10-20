import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

import { useDispatch, useSelector } from "react-redux";
import {
  getOffices,
  findOffices,
  getOfficeShap,
} from "../store/actions/searchActions";

// import OfficeService from "../services/OfficeService";
import OfficeServiceByRegionId from "../services/OfficeServiceByRegionId";
import OfficeUsersService from "../services/OfficeUsersService";
import DecodeJwt from "../services/DecodeJwt";

import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function FixedTags() {
  const [cookie] = useCookies(["Token"]);

  const dispatch = useDispatch();

  const handleDecodeToken = (cookie) => {
    let decodeToken = new DecodeJwt();
    const decoded_token = decodeToken.get_token(cookie.Token.access_token);
    return decoded_token;
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const region = handleDecodeToken(cookie).region_id;

        let officeServiceByRegionId = new OfficeServiceByRegionId();
        const response = await officeServiceByRegionId.getOfficesByRegionId(
          region
        );

        // let officeService = new OfficeService();
        // const response = await officeService.getOffices();

        dispatch(getOffices(response.data));
      } catch (error) {
        console.log("Something happen when fetching data", error);
      }
    }
    fetchData();
  }, [dispatch, cookie]);

  const updatedOfficeShapData = async (event, newValue) => {
    let officeUsersService = new OfficeUsersService();
    if (newValue.length !== 0) {
      const response = await officeUsersService.getOfficeUsers(
        newValue.map((office) => office.office_name)
      );
      dispatch(getOfficeShap(response.data));
    } else {
      const response = await officeUsersService.getOfficeUsers(null);
      dispatch(getOfficeShap(response.data));
    }
  };

  const updateSelectedOfficeData = async (event, newValue) => {
    dispatch(findOffices(newValue));
  };

  const updateDatas = async (event, newValue) => {
    updatedOfficeShapData(event, newValue);
    updateSelectedOfficeData(event, newValue);
  };

  const offices = useSelector((state) => state.search.Offices);
  const selectedOffices = useSelector((state) => state.search.selectedOffices);

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={selectedOffices}
      onChange={updateDatas}
      options={offices}
      getOptionLabel={(option) => option.office_name}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option.office_name} {...getTagProps({ index })} />
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

export default FixedTags;
