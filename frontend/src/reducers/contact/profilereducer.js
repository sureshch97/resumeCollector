import {
    ADD_PROFILE, PROFILE_ERROR,
    CLEAR_CURRENT
} from '../../types'


const intialState = {

    contacts: []
}

export const profileReducer = (state = intialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_PROFILE:
            return {
                profile: payload
            }
        case PROFILE_ERROR:
            return {
                error: payload
            }
        case CLEAR_CURRENT:
            return {
                contacts: null
            }


        default:
            return state;
    }
}