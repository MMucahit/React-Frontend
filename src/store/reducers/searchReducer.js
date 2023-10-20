import {
  USERS,
  OFFİCE,
  FİND_OFFİCE,
  FİND_USER,
  USER_SHAP,
  OFFİCE_SHAP,
  USER_GRAPH,
  USER_LİNE_CHART,
  CURRENT_PAGE,
  SELECTED_USER,
} from "../actions/searchActions";
import {
  Users,
  Offices,
  selectedOffices,
  searchUser,
  userShap,
  officeShap,
  userGraph,
  userLineChart,
  currentPage,
  selectedUser,
} from "../initialValues/initials";

const initialState = {
  Users: Users,
  Offices: Offices,
  selectedOffices: selectedOffices,
  searchUser: searchUser,
  userShap: userShap,
  officeShap: officeShap,
  userGraph: userGraph,
  userLineChart: userLineChart,
  currentPage: currentPage,
  selectedUser: selectedUser,
};

export default function searchReducer(state = initialState, { type, payload }) {
  switch (type) {
    case USERS:
      return {
        ...state,
        Users: payload, //[...state.SearchOffice, payload],
      };
    case SELECTED_USER:
      return {
        ...state,
        selectedUser: payload,
      };

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
    case USER_SHAP:
      return {
        ...state,
        userShap: payload,
      };
    case USER_GRAPH:
      return {
        ...state,
        userGraph: payload,
      };
    case USER_LİNE_CHART:
      return {
        ...state,
        userLineChart: payload,
      };
    case OFFİCE_SHAP:
      return {
        ...state,
        officeShap: payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return state;
  }
}
