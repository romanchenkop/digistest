const GET_USER_LOCATION = 'GET_USER_LOCATION';
const SHOW_MARKERS = 'SHOW_MARKERS';
const SAVE_MARKERS = 'SAVE_MARKERS';
const ADD_MARKER = 'ADD_MARKER';
const GET_VALUE_FROM_SIDE_BAR = 'GET_VALUE_FROM_SIDE_BAR';

const defaultState = {
  markersOpacity: 1,
  markers: [],
  location: {
    lat: '',
    lng: '',
  },
  zoom: 3,
  saveBtnAble: false,
  allowsUserLocation: false,
  sideBarValue: '',
  sideBarItemChecked: false,
};

const mapReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_VALUE_FROM_SIDE_BAR: {
      return {
        ...state,
        sideBarValue: action.payload.value,
        sideBarItemChecked: action.payload.checked,
      };
    }
    case GET_USER_LOCATION: {
      return {
        ...state,
        location: action.payload,
        allowsUserLocation: true,
        zoom: 13,
      };
    }
    case ADD_MARKER: {
      return {
        ...state,
        markers: [...state.markers, action.payload],
        saveBtnAble: true,
      };
    }
    case SHOW_MARKERS:
      return {
        ...state,
        markersOpacity: action.payload,
      };
    case SAVE_MARKERS:
      return {
        ...state,
        markersOpacity: action.payload,
      };
    default:
      return state;
  }
};

export const getValueFromSideBar = (data) => {
  console.log(data)
  return {
    type: GET_VALUE_FROM_SIDE_BAR,
    payload: data,
  };
};

export const getUserLocation = (data) => {
  return {
    type: GET_USER_LOCATION,
    payload: data,
  };
};

export const addMarker = (data) => {
  return {
    type: ADD_MARKER,
    payload: data,
  };
};

export const showMarkers = () => {
  return {
    type: SHOW_MARKERS,
    payload: 1,
  };
};

export const saveMarkers = (data) => {
  return {
    type: SAVE_MARKERS,
    payload: -1,
  };
};

export default mapReducer;
