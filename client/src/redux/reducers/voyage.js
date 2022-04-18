import { ADD, DELETE, EDIT, FAIL, GET, LOAD } from "../actionTypes/voyage";

const intialeState = {
  voyage: {},
  voyages: [],
  load: false,
  errors: [],
};

const voyageReducer = (state = intialeState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case ADD:
      return { ...state, load: false, voyage: payload.voyage };
    case EDIT:
      return { ...state, load: false, voyage: payload.voyage };
    case DELETE:
      return { ...state, load: false, voyage: payload.voyage };
    case GET:
      return { ...state, load: false, voyages: payload.voyages };
    case FAIL:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};

export default voyageReducer;
