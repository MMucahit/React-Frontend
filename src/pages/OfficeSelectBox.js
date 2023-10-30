import React, { useEffect } from "react";
// import { useCookies } from "react-cookie";

import { useDispatch, useSelector } from "react-redux";
import {
  findOffices,
  getCurrentPage,
  getOffices,
} from "../store/actions/searchActions";

import OfficeService from "../services/OfficeService";
// import OfficeServiceByRegionId from "../services/OfficeServiceByRegionId";
// import DecodeJwt from "../services/DecodeJwt";

import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function OfficeSelectBox() {
  // const [cookie] = useCookies(["Token"]);

  const dispatch = useDispatch();

  // const handleDecodeToken = (cookie) => {
  //   let decodeToken = new DecodeJwt();
  //   const decoded_token = decodeToken.get_token(cookie.Token.access_token);
  //   return decoded_token;
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        // const region = handleDecodeToken(cookie).region_id;

        let officeService = new OfficeService();
        const response = await officeService.getOffices();

        dispatch(getOffices(response.data));
      } catch (error) {
        console.log("Something happen when fetching data", error);
      }
    }
    fetchData();
  }, [dispatch]); // cookie

  const updateSelectedOfficeData = async (event, newValue) => {
    dispatch(findOffices(newValue));
  };

  const updateCurrentPageData = async () => {
    dispatch(getCurrentPage(1));
  };

  const updateDatas = async (event, newValue) => {
    updateCurrentPageData();
    updateSelectedOfficeData(event, newValue);
  };

  const offices = useSelector((state) => state.search.Offices);
  const selectedOffices = useSelector((state) => state.search.selectedOffices);
  const region = useSelector((state) => state.search.selectedRegion);

  const office_filter = (office, region) => {
    if (region === "None") {
      return office.region_id;
    } else {
      return office.region_id === region;
    }
  };

  let filtered_offices = offices.filter((office) => {
    return office_filter(office, region);
  });

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={selectedOffices}
      onChange={updateDatas}
      options={filtered_offices}
      getOptionLabel={(option) => option.office_name}
      isOptionEqualToValue={(option, value) =>
        option.office_name === value.office_name &&
        option.region_id === value.region_id
      }
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option.office_name} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label="Ofis Ara..." placeholder="Offices" />
      )}
    />
  );
}

export default OfficeSelectBox;
