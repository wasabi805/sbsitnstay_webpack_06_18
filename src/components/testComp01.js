import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const img01 ='https://i1.sndcdn.com/artworks-000046904102-0iwr24-t500x500.jpg';const img02 ='http://www.thechurchillobserver.com/wp-content/uploads/2018/03/image1.png';const img03 ='https://is3-ssl.mzstatic.com/image/thumb/Music4/v4/c7/e6/b0/c7e6b060-51c0-971b-0d80-518cd97db3c3/UMG_cvrart_00044003173460_01_RGB72_1502x1502_13CANIM00972.jpg/1200x630bb.jpg';const img04 = 'https://cdn.shopify.com/s/files/1/1477/9384/articles/wu_tang_clan_enter_the_wu_tang_36_chambers_x750.jpeg?v=1481162833';const img05 ='https://s3.amazonaws.com/rapgenius/kendrick-lamar-good-kid-maad-city-cover.jpg';
const img06 = 'https://upload.wikimedia.org/wikipedia/en/d/d9/SayItSingle.jpg'; const img07 = 'https://i.ebayimg.com/images/g/sNcAAOSwNkJaMGMA/s-l1600.jpg'; const img08= 'https://upload.wikimedia.org/wikipedia/en/1/1d/Drake_-_So_Far_Gone_cover.png'; const img09 = 'https://cps-static.rovicorp.com/3/JPG_500/MI0004/336/MI0004336043.jpg?partner=allrovi.com'
class TestComp01 extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render(){
           let tracks =[{pic: img01}, {pic: img02}, {pic: img03}, {pic: img04},
               {pic: img05}, {pic: img06}, {pic: img07}, {pic: img08},{pic: img09}
           ];
           console.table(tracks);

        return(

            <div className='container container-fluid p-0'>
                <div className='track-img-cont'>

                    {tracks.map((track,key)=>{
                        let trackImg = track.pic;
                        return(

                            <div key={key} className='track d-inline-block'>
                                <img src={trackImg} className='track-img'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TestComp01