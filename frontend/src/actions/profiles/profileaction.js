import axios from 'axios'
import {
  ADD_PROFILE,
  PROFILE_ERROR,
  CLEAR_CURRENT
} from '../../types'


export const addProfile = (formData) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }

  try {


    const res = await axios.post('/api/profile', formData, config);
    console.log(res)


    dispatch({
      type: ADD_PROFILE,
      payload: res.data
    });

   localStorage.setItem('profileDetails', JSON.stringify(res.data))
  } catch (error) {

    dispatch({
      type: PROFILE_ERROR,
      payload: error


    });



  }};


