import {LANDING, ABOUT_US } from "./action-type";




export const loadLanding =()=>{
    return{
        type: LANDING,
        payload: true

    }
};

export const loadAboutUs =()=>{
    return{
        type: ABOUT_US,
        payload: true

    }
};