const SET_RESUME_ACTIVE_ITEM = "SET_RESUME_ACTIVE_ITEM";

function setResumeActiveItem(active){
    return {    
        type : SET_RESUME_ACTIVE_ITEM,
        resume_active_item : active
    }
}

export {
    SET_RESUME_ACTIVE_ITEM,
    setResumeActiveItem
}