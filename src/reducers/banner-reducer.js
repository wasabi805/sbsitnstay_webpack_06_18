import {SET_BANNER_STATE} from "../actions/action-type";

const landingBgImg = "https://res.cloudinary.com/ocampot/image/upload/q_60/matt-nelson-259365-unsplash.jpg";
const aboutBgImg = 'https://res.cloudinary.com/ocampot/image/upload/v1532397892/sbsitnstay/dog_and_owner_sunset.jpg';
const servicesBgImg = 'https://res.cloudinary.com/ocampot/image/upload/q_60/patrick-hendry-406636-unsplash.jpg';
const galleryBgImg = 'https://res.cloudinary.com/ocampot/image/upload/v1532398181/sbsitnstay/dog_selfie.jpg';
const contactBgImg ='https://res.cloudinary.com/ocampot/image/upload/v1532398257/sbsitnstay/dog_on_phone.jpg';


const initialState = {

    banner :[
        {name : 'landing',  title: "South Bay Sit 'N Stay", src: landingBgImg ,     small: 'Welcome' },
        {name : 'about',    title: 'About us',              src: aboutBgImg ,       small: 'A little about us ...' , style: 'section parallax banner-bg-about'},
        {name : 'services', title: 'Services',              src: servicesBgImg ,    small: 'Providing the best for your pup.'},
        {name : 'gallery',  title: 'Gallery' ,              src: galleryBgImg ,     small: 'Come hang with crew!'},
        {name : 'contact',  title: 'Contact',               src: contactBgImg ,     small: 'Get in touch with us.'},
    ],


};

export default function (state=initialState, action) {

    switch(action.type){

        case SET_BANNER_STATE:

            return {...state};

        default:
            return state;
    }
}