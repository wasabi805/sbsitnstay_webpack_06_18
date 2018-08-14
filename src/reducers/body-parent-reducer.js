import {TOGGLE_VIEW} from "../actions/action-type";


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
    ],

    services:[
        {id: 1, name:'Walking', src: 'https://res.cloudinary.com/ocampot/image/upload/v1532399332/sbsitnstay/dog_leash_002.jpg', small: 'stuff about Walking' },
        {id: 2, name:'Feeding', src: 'https://res.cloudinary.com/ocampot/image/upload/v1532399233/sbsitnstay/pups_eating.jpg', small: 'stuff about Feeding' },
        {id: 3, name:'Drop-in Care', src: 'https://res.cloudinary.com/ocampot/image/upload/v1533787475/dog-napping.jpg', small: 'stuff about Drop in' },
        {id: 4, name:'Overnight Care', src: 'https://res.cloudinary.com/ocampot/image/upload/v1532399537/sbsitnstay/dog_sleeping_01.jpg', small: 'stuff about Overnights' },
        {id: 5, name:'Adventures', src: 'https://res.cloudinary.com/ocampot/image/upload/v1533787592/dog-on-hike-00.jpg', small: 'stuff about Adventures' },
    ]

};

export default function (state=initialState, action) {
    switch (action.type){
        //Hide and Seek w/ BodyParent sub-components
        case TOGGLE_VIEW:
            return [ ...state, {toggle: action.payload} ];
        default:
            return state;

    }
}

