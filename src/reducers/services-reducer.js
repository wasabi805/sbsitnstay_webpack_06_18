
//import types
import {SET_SERVICES_STATE} from "../actions/action-type";

const walkingThumb   =  "https://res.cloudinary.com/ocampot/image/upload/w_300/sbsitnstay/dog_leash_002.jpg";
const feedingThumb   =  "https://res.cloudinary.com/ocampot/image/upload/w_300/sbsitnstay/pups_eating.jpg";
const dropInsThumb   =  "https://res.cloudinary.com/ocampot/image/upload/w_300/dog-napping.jpg";
const overNightThumb =  "https://res.cloudinary.com/ocampot/image/upload/w_300/sbsitnstay/dog_sleeping_01.jpg";
const adventures     =  "https://res.cloudinary.com/ocampot/image/upload/w_300/dog-on-hike-00.jpg";

const cardBg02 = '.././assets/images/background/pic02.jpg';
const cardBg04 = '.././assets/images/background/pic04.jpg';
const cardBg06 = '.././assets/images/background/pic06.jpg';
const cardBg08 = '.././assets/images/background/pic08.jpg';


const initialState = {

    backGroundImg : [
        {id: 0, name: 'colLeft', src : '../.././src/assets/sass/images/pic02.jpg'}
    ],

    services: [
        {id: 1, name:'Walking',     src: walkingThumb ,     cardBg: cardBg04, small: 'Stuff About Walking' },
        {id: 2, name:'Feeding',     src: feedingThumb ,     cardBg: cardBg08, small: 'Stuff About Feeding' },
        {id: 3, name:'Drop-ins',    src: dropInsThumb ,     cardBg: cardBg04, small: 'Stuff About Drop-ins' },
        {id: 4, name:'Overnight Care', src: overNightThumb, cardBg: cardBg08, small: 'Stuff Overnight care' },
        {id: 5, name:'Adventures',  src:adventures ,        cardBg: cardBg04, small: 'Stuff About Adventures'},
    ],
};


export default function (state=initialState, action) {

    switch (action.type){

        case SET_SERVICES_STATE:{

            state = { ...state,
                content : state.services,
                backGroundImg : state.backGroundImg
            };

            return state
        }

        default:
            return state;

    }
}