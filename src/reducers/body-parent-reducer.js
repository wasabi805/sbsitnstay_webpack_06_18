import {LOAD_BODY_LANDING} from ".././actions/action-type";
// import {LOAD_BODY_ABOUT} from ".././actions/action-type";



const initialState = {

    landing: [
        {id: 1, name:'About Us', src: "https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg", small: 'Meet the crew' },
        {id: 2, name:'Services', src: "https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg", small: 'We provide for you and yours' },
        {id: 3, name:'Gallery',  src: "https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg", small: 'Check out our buds.' },
        {id: 4, name:'Contact',  src: "https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg", small: 'Get in touch with us' }
    ],

    about: [
        {id: 1, name:'TestKayla', src: "https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg", small: 'Meet the crew' },
        {id: 2, name:'TestCatherine', src: "https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg", small: 'We provide for you and yours' },
        {id: 2, name:'TestYuko', src: "https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg", small: 'We provide for you and yours' },
    ],

};


const defaults = {



};


export default function (state=initialState, action) {

    switch (action.type){

        case LOAD_BODY_LANDING:{
            state = { ...state, bodyData : defaults, toggle :action.payload};
            return state
        }


        default:
            return state;

    }
}

