import {LOAD_BODY_LANDING} from ".././actions/action-type";

const initialState = {

    imgGallery: [
        {id:0, src: "https://i1.sndcdn.com/artworks-000046904102-0iwr24-t500x500.jpg"},
        {id:1, src: 'http://www.thechurchillobserver.com/wp-content/uploads/2018/03/image1.png'},
        {id:2, src: 'https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/c7/e6/b0/c7e6b060-51c0-971b-0d80-518cd97db3c3/UMG_cvrart_00044003173460_01_RGB72_1502x1502_13CANIM00972.jpg/1200x630bb.jpg'},
        {id:3, src: 'https://cdn.shopify.com/s/files/1/1477/9384/articles/wu_tang_clan_enter_the_wu_tang_36_chambers_x750.jpeg?v=1481162833'},

    ]


};


export default function (state=initialState, action) {

    switch (action.type){

        case LOAD_BODY_LANDING:{
            state = { ...state, toggle :action.payload};
            return state
        }

        default:
            return state;

    }
}

