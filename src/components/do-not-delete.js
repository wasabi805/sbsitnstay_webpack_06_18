{/*<div className='generic-body-comp-main container-fluid'>*/}


    {/*<div className='generic-body-comp-row row bg-success'>*/}

        {/*<div className='generic-body-comp-colA col-sm-2 col-md-3 p-0 bg-info'>*/}

            {/*<div className='overlay'>I'm the overlay</div>*/}

            {/*<div className='generic-body-comp-img-cont'>*/}
                {/*<img src='https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg'></img>*/}
            {/*</div>*/}
        {/*</div>*/}


        {/*<div className='col generic-body-comp-colB col-sm-10 col-md-9'>*/}
            {/*<div className='generic-body-comp-content'>*/}
                {/*<h2>Meet Kayla</h2>*/}
                {/*<p>stuff about kayla</p>*/}

                {/*<button className='btn'> Read More About Kayla</button>*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}


    {/*<div className='generic-body-comp-row row'>*/}
        {/*<div className='col generic-body-comp-colB col-sm-10  col-md-9'>*/}
            {/*<div className='generic-body-comp-content'>*/}
                {/*<h2>Meet Catherine</h2>*/}
                {/*<p>stuff about Catherine</p>*/}

                {/*<button className='btn'> Read More About Catherine</button>*/}
            {/*</div>*/}
        {/*</div>*/}


        {/*<div className='col generic-body-comp-colA col-sm-2 col-sm-2 p-0 col-md-3 '>*/}
            {/*<div className='overlay'>I'm the overlay</div>*/}
            {/*<div className='generic-body-comp-img-cont'>*/}
                {/*/!*<img src='https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg'></img>*!/*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}

    {/*<div className='generic-body-comp-row row'>*/}

        {/*<div className='col generic-body-comp-colA col-sm-2 col-md-3 p-0'>*/}
            {/*<div className='overlay'>I'm the overlay</div>*/}
            {/*<div className='generic-body-comp-content'>*/}
                {/*/!*<img src='https://res.cloudinary.com/ocampot/image/upload/v1532396750/sbsitnstay/yuko.jpg'></img>*!/*/}
            {/*</div>*/}
        {/*</div>*/}


        {/*<div className='col generic-body-comp-colB col-sm-10 col-md-9'>*/}
            {/*<div className='generic-body-comp-content'>*/}
                {/*<h2>Meet Yuko</h2>*/}
                {/*<p>stuff about Yuko</p>*/}

                {/*<button className='btn'> Read More About Yuko</button>*/}
            {/*</div>*/}
        {/*</div>*/}
    {/*</div>*/}


{/*</div>*/}



// const kaylaImg = 'https://res.cloudinary.com/ocampot/image/upload/v1533777073/kayla-portrait.jpg';
// const catherineImg = 'img src=\'https://res.cloudinary.com/ocampot/image/upload/v1532396286/sbsitnstay/catherine.jpg';
// const yukoImg = 'img src=\'https://res.cloudinary.com/ocampot/image/upload/v1532396750/sbsitnstay/yuko.jpg';
//
// const walking='https://res.cloudinary.com/ocampot/image/upload/v1532399332/sbsitnstay/dog_leash_002.jpg';
// const feeding ='https://res.cloudinary.com/ocampot/image/upload/v1532399233/sbsitnstay/pups_eating.jpg';
// const dropIns = 'https://res.cloudinary.com/ocampot/image/upload/v1533787475/dog-napping.jpg';
// const overnightCare = 'https://res.cloudinary.com/ocampot/image/upload/v1532399537/sbsitnstay/dog_sleeping_01.jpg';
// const adventures = 'https://res.cloudinary.com/ocampot/image/upload/v1533787592/dog-on-hike-00.jpg';






// profiles: [
//     {id: 1, name: 'Meet Kayla', img: kaylaImg, subContent: 'some stuff about Kayla', btn: 'More About Kayla'},
//     {id: 2, name: 'Meet Catherine', img: catherineImg, subContent: 'some stuff about Catherine', btn: 'More About Catherine'},
//     {id: 3, name: 'Meet Yuko', img: yukoImg, subContent: 'some stuff about Yuko', btn: 'More About Yuko'},
// ],
//
//     services: [
//     {id: 1, name: 'Walking', img: walking},
//     {id: 2, name: 'Feeding', img: feeding},
//     {id: 3, name: 'Drop-in Visits', img: dropIns},
//     {id: 4, name: 'Overnight Care', img: overnightCare},
//     {id: 5, name: 'Adventures', img: adventures},
//
// ]

//          BELOW -- this worked before

// import React, {Component} from 'react';
// import {Link, Route, Switch} from 'react-router-dom';
//
// import Landing from './layout/body/Landing'
// import AboutUs from './layout/body/AboutUs'
// import GenericBodyComp from './layout/body/GenericBodyComp'
//
// class BodyParent extends Component{
//
//     constructor(props) {
//         super(props);
//         this.state= {
//             siteLocation: [{comp: <Landing/>} , {comp:  <AboutUs/>} , {comp:  <GenericBodyComp/>}],
//
//
//
//         };
//
//         this.checkLocation = this.checkLocation.bind(this);
//         this.mapLocation = this.mapLocation.bind(this);
//         this.setLocation=this.setLocation.bind(this);
//
//     }
//
//     checkLocation(loc){
//         loc = this.props.location.pathname;
//         return loc
//     }
//
//     mapLocation(loc, locations){
//         //----  MAPPED SITE COMPS   ------
//         locations = this.state.siteLocation;
//         const mappedLocation = locations.map(obj=>{
//             const locationComp=[];
//
//             locationComp.comp= obj.comp ;
//
//             return locationComp
//         });
//         return mappedLocation
//     }
//
//     setLocation(loc, siteComps){
//
//         loc = this.checkLocation(); //check path after everything is mapped
//         siteComps = this.mapLocation();
//
//         let renderLocation =null;
//
//         if(loc ==='/'){
//             renderLocation = siteComps[0].comp;
//         }
//
//
//         if(loc ==='/about-us'){
//             renderLocation = siteComps[1].comp;
//         }
//
//         if(loc ==='/services'){
//             renderLocation = siteComps[2].comp;
//         }
//
//         return renderLocation
//
//     }
//
//
//     componentDidMount(){
//         this.checkLocation();
//         this.mapLocation();
//         this.setLocation();
//
//     }
//     render(){
//
//         // console.log(this.setLocation());
//
//
//         return(
//             <div className='body-parent'>
//                 {/*{this.setLocation()}*/}
//
//             </div>
//         )
//     }
// }
//
// export default BodyParent