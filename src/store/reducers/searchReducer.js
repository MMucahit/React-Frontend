import {
  OFFİCE,
  FİND_OFFİCE,
  FİND_USER,
  CURRENT_PAGE,
  FİND_POİNT,
  FİND_REGİON,
  FİND_CİRO_POİNT,
} from "../actions/searchActions";
import {
  Offices,
  selectedOffices,
  searchUser,
  currentPage,
  selectedPoint,
  selectedRegion,
  selectedCiroPoint,
} from "../initialValues/initials";

const initialState = {
  Offices: Offices,
  selectedOffices: selectedOffices,
  searchUser: searchUser,
  currentPage: currentPage,
  selectedPoint: selectedPoint,
  selectedRegion: selectedRegion,
  selectedCiroPoint: selectedCiroPoint,
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OFFİCE:
      return {
        ...state,
        Offices: payload,
      };
    case FİND_OFFİCE:
      return {
        ...state,
        selectedOffices: payload,
      };
    case FİND_USER:
      return {
        ...state,
        searchUser: payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    case FİND_POİNT:
      return {
        ...state,
        selectedPoint: payload,
      };
    case FİND_REGİON:
      return {
        ...state,
        selectedRegion: payload,
      };
    case FİND_CİRO_POİNT:
      return {
        ...state,
        selectedCiroPoint: payload,
      };
    default:
      return state;
  }
}
