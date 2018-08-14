import {LANDING, ABOUT_US} from "../actions/action-type";


let initialState = {
    toggle: {},

    landing: [
        {id: 1, name:'About Us', src: "https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg", small: 'Meet the crew' },
        {id: 2, name:'Services', src: "https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg", small: 'We provide for you and yours' },
        {id: 3, name:'Gallery',  src: "https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg", small: 'Check out our buds.' },
        {id: 4, name:'Contact',  src: "https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg", small: 'Get in touch with us' }
    ],

    aboutUs:[
        {id: 1, name:'Kayla', src: 'https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg', small: 'stuff about Kayla' },
        {id: 2, name:'Catherine', src: 'https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg', small: 'stuff about Catherine' },
        {id: 3, name:'Yuko', src: 'https://res.cloudinary.com/ocampot/image/upload/v1532396750/sbsitnstay/yuko.jpg', small: 'stuff about Yuko' },
    ]

};


export default function (state=initialState, action) {

    switch (action.type){
        //LANDING
        case LANDING:
            state.toggle = action.payload;
            return state;

        case ABOUT_US:
            return[ ...state, {toggle: action.payload}
            ]

        default:
            return state;

    }
}

