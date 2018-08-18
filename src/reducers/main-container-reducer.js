import {MAIN_CONTAINER} from "../actions/action-type";
const testImg01 = 'https://res.cloudinary.com/ocampot/image/upload/v1532313756/testImg.jpg'

const initialState = {

    bannerParentState :[
        {name : 'landing',  title: "South Bay Sit 'N Stay ", src: "https://res.cloudinary.com/ocampot/image/upload/v1532397239/sbsitnstay/dog-leash-01.jpg", small: 'Welcome' },
        {name : 'about',    title: 'About us',  src: 'https://res.cloudinary.com/ocampot/image/upload/v1532397892/sbsitnstay/dog_and_owner_sunset.jpg', small: 'A little about us ...'},
        {name : 'services', title: 'Services',  src: 'https://res.cloudinary.com/ocampot/image/upload/v1532398062/sbsitnstay/dog_trainer_silhouettes_sunset.jpg', small: 'Providing the best for your pup.'},
        {name : 'gallery',  title: 'Gallery' ,  src: 'https://res.cloudinary.com/ocampot/image/upload/v1532398181/sbsitnstay/dog_selfie.jpg', small: 'Come hang with crew!'},
        {name : 'contact',  title: 'Contact',   src: 'https://res.cloudinary.com/ocampot/image/upload/v1532398257/sbsitnstay/dog_on_phone.jpg', small: 'Get in touch with us.'},
    ],

    bodyParentState : {

        landing: [
            {id: 1, name:'About Us', src: "https://res.cloudinary.com/ocampot/image/upload/v1533245189/tmnt_2003_group_selfie_by_autobot2.jpg", small: 'Meet the crew' },
            {id: 2, name:'Services', src: "https://res.cloudinary.com/ocampot/image/upload/v1532397698/sbsitnstay/dogs_on_leash.jpg", small: 'We provide for you and yours' },
            {id: 3, name:'Gallery',  src: "https://res.cloudinary.com/ocampot/image/upload/v1532398583/sbsitnstay/dog_leash.jpg", small: 'Check out our buds.' },
            {id: 4, name:'Contact',  src: "https://res.cloudinary.com/ocampot/image/upload/v1532398723/sbsitnstay/dog_laptop.jpg", small: 'Get in touch with us' }
        ],

        about: [
            {id: 1, name:'Meet Kayla', src: "https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg", small: 'Stuff About Kayla' },
            {id: 2, name:'Meet Catherine', src: "https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg", small: 'Stuff About Catherine' },
            {id: 3, name:'Meet Yuko', src: "https://res.cloudinary.com/ocampot/image/upload/v1532396750/sbsitnstay/yuko.jpg", small: 'Stuff About Yuko' },
        ],

        services: [
            {id: 1, name:'Walking', src: "https://res.cloudinary.com/ocampot/image/upload/v1532399332/sbsitnstay/dog_leash_002.jpg", small: 'Stuff About Walking' },
            {id: 2, name:'Feeding', src: "https://res.cloudinary.com/ocampot/image/upload/v1532399233/sbsitnstay/pups_eating.jpg", small: 'Stuff About Feeding' },
            {id: 3, name:'Drop-ins', src: "https://res.cloudinary.com/ocampot/image/upload/v1533787475/dog-napping.jpg", small: 'Stuff About Drop-ins' },
            {id: 4, name:'Overnight Care', src: "https://res.cloudinary.com/ocampot/image/upload/v1532399537/sbsitnstay/dog_sleeping_01.jpg", small: 'Stuff Overnight care' },
            {id: 5, name:'Adventures', src: "https://res.cloudinary.com/ocampot/image/upload/v1533787592/dog-on-hike-00.jpg", small: 'Stuff About Adventures'},
        ],

        images : [
            'https://i1.sndcdn.com/artworks-000046904102-0iwr24-t500x500.jpg',
            'http://www.thechurchillobserver.com/wp-content/uploads/2018/03/image1.png',
            'https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/c7/e6/b0/c7e6b060-51c0-971b-0d80-518cd97db3c3/UMG_cvrart_00044003173460_01_RGB72_1502x1502_13CANIM00972.jpg/1200x630bb.jpg',
            'https://cdn.shopify.com/s/files/1/1477/9384/articles/wu_tang_clan_enter_the_wu_tang_36_chambers_x750.jpeg?v=1481162833',
        ],

        breakPoints:[350 , 500, 750],


        contact: [
            {id:1 , name :'see the main-container-reducer and set up defaults' ,src: testImg01, small: 'Make up ome content'}
        ]
    },


};



export default function (state=initialState, action) {
    switch (action.type){

        case MAIN_CONTAINER:{
            state = { ...state};

            console.log('FROM REDUCER', state);

            return state
        }

        //THIS IS WHAT YOU ARE WORKING OFF OF ON INITIAL RENDER
        default:
            return state;

    }
}
