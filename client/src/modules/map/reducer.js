import axios from 'axios';

const GET_USER_LOCATION = 'GET_USER_LOCATION';
const SHOW_MARKERS = 'SHOW_MARKERS';
const SAVE_MARKERS = 'SAVE_MARKERS';
const ADD_MARKER = 'ADD_MARKER';

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

export const saveMarkers = (data) => (dispatch) => {
	axios({
		method: 'post',
		url: 'http://localhost:5000/api/location/markers-array',
		data: data,
	})
		.then((res) => dispatch({
			type: SAVE_MARKERS,
			payload: -1,
		}));
};

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
};

const mapReducer = (state = defaultState, action) => {
	switch (action.type) {
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

export default mapReducer;
