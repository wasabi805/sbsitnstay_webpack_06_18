import {MAIN_CONTAINER, TEST_MAIN, OPEN_NAV_MODAL, CLOSE_NAV_MODAL} from "../actions/action-type";
const testImg01 = 'https://res.cloudinary.com/ocampot/image/upload/v1532313756/testImg.jpg'
import {testTheMain} from '.././actions/main-container-actions'

import close from '.././assets/images/loading.gif'


const initialState = {

    gallery: [

        {id: 'gallery-00', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20180129_192156.jpg'},
        {id: 'gallery-01', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20170304_110838.jpg'},
        {id: 'gallery-02', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20161231_140603.jpg'},
        {id: 'gallery-03', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20170710_203907.jpg'},
        {id: 'gallery-04', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20161015_162730.jpg'},
        {id: 'gallery-05', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20171122_132128.jpg'},
        {id: 'gallery-06', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20160801_182236.jpg'},
        {id: 'gallery-07', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20160508_191857.jpg'},
        {id: 'gallery-08', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20170529_124148.jpg'},
        {id: 'gallery-09', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/sbsitnstay/gallery-sbsitnstay/20171028_215554.jpg'},

        {id: 'gallery-10', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160716_183734.jpg'},
        {id: 'gallery-11', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160618_093938.jpg'},
        {id: 'gallery-12', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160701_174543.jpg'},
        {id: 'gallery-13', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20180127_224819.jpg'},
        {id: 'gallery-14', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20171222_195748.jpg'},
        {id: 'gallery-15', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20161008_111823.jpg'},
        {id: 'gallery-16', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20161007_185518.jpg'},
        {id: 'gallery-17', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20170203_194845.jpg'},
        {id: 'gallery-18', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20161220_201416.jpg'},
        {id: 'gallery-19', src: 'https://res.cloudinary.com/ocampot/image/upload/w_400,c_scale/20160702_204520.jpg'},
    ],

    ourPricingContent: [
        {title: 'Standard Care', subTitle : 'Stop in Visits' , price: '$25', rate: ' /per visit' , badge: 'fa fa-shoe-prints', text: 'This option is ideal for the homebody pet. We come to you and take care of your pet overnight in the comfort of their home.  Also offered for overnight stays: watering your indoor and outdoor plants, picking up your mail, accepting deliveries, and more!' },
        {title: 'Deluxe', subTitle : 'Overnight Care', price: '$40' , rate: ' /per stay' ,  badge: 'fa fa-bone', text: 'Working late? Date night? We’ve got you covered with an hour stop in visit. We can feed, play, and spend quality time with your pet while you are out. Per visit can to multiple visits a day.' },
        {title: 'VIP Care', subTitle : 'Pawesome Adventures', price: ' starting at $40' , rate: ' /per trip' ,  badge: 'fa fa-tree', text: 'Sometimes we just need to get away, and sometimes your pets do too! We offer adventures spanning from trips to the dog park, to off-leash parks at the beach,  to dog friendly hiking trails around the bay. Feel free to join us on these trips, or we can always accompany you on your dog adventures if your hands are full!' }
    ],

    meetTheCrewContent : [
        {name: 'Kayla', image: 'https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg', text: 'Kayla started South Bay Sit N’ Stay in 2013 after receiving her certifications in dog training, pet massage, pet nutrition, and pet boarding through Animal Behavior College. She has also spent over 100 hours working with dogs at the Humane Society- Silicon Valley as a volunteer. She loves taking her own dogs out for adventures to the beach and hiking throughout the South Bay'},
        {name: 'Catherine', image: 'https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg', text: 'Catherine joined the South Bay Sit N’ Stay team after moving to California in 2016. Her volunteer work at the Humane Society and dog sitting in her home state of Wisconsin has developed her into an incredibly patient caregiver. It is a passion of hers to work with animals and provide them with the love and attention they need, especially when they are away from their owners'},
        {name: 'Yuko', image: '.././assets/images/tina.jpeg', text: 'Yuko is the newest member of the South Bay Sit N’ Stay team. She specializes in cat care and is a proud cat mom of 5 herself. She has worked with cats for about 10 years and has completed a cat training course through Animal Behavior College. When she’s not snuggling with her kitties, Yuko enjoys exploring all the amazing food and adventures the bay has to offer'},
    ],



    testReturnFromReducer:{},
    toggleNavModal: 'none'

};


export default function (state=initialState, action) {
    switch (action.type){

        case MAIN_CONTAINER:
            return{...state};

        case TEST_MAIN:
            return {
                testReturnFromReducer: action.payload
            };

        case OPEN_NAV_MODAL:
            return{
                toggleNavModal: action.payload
            };

        case CLOSE_NAV_MODAL:
            return{
                toggleNavModal: action.payload
            };



        //THIS IS WHAT YOU ARE WORKING OFF OF ON INITIAL RENDER
        default:
            return state;

    }
}
