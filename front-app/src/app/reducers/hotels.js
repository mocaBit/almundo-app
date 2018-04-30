import { NAVIGATE } from '../constants';

export default (state = [], action = {}) => {
  switch(action.type) {
    case NAVIGATE:
      return {
        page: action.page
      }
    default:
      return state;
  }
};
