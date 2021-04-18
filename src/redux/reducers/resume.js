import {SET_RESUME_ACTIVE_ITEM} from './../actions/resume';
const initialState = {
    resume_active_item : 'experience'
}
function resume(state = initialState, action){
    switch (action.type){
        case SET_RESUME_ACTIVE_ITEM:
            return{
                ...state,
                resume_active_item: action.resume_active_item
            };
        default:
            return state;
    }
};

export default resume;