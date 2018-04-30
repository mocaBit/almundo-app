import { NAVIGATE } from '../constants';

export function navigate(page){
  return {
    type: NAVIGATE,
    page
  }
}
