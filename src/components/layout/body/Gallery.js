import React,{Component} from 'react';

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={

            content: [],
            lightBox:[],

            slides: '',
            slideIndex: '',
            slideLength:'',
            dots: '',
            captionText: '',

            openModal : '',
            closeModal :'',
        };

        this.closeModal =this.closeModal.bind(this);

        this.openModal = this.openModal.bind(this);
        this.currentSlide = this.currentSlide.bind(this);

        this.showSlides = this.showSlides.bind(this);


    }

    componentWillMount(){
        this.setState({
            content: this.props.content,
            lightBox: this.props.lightBox,
        })



    }

    componentDidMount(){

        let slides = document.getElementsByClassName("mySlides"); // has to get called when comp mounts
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");


        let openModal = document.getElementById('myModal').style.display = "block"; // change to block when you want to open
        let closeModal = document.getElementById('myModal').style.display = "none"; // change to block when you want to open


        this.setState({
            slideIndex : 1,
            slides: slides,
            slideLength : slides.length,
            dots: dots,
            captionText: captionText,

            openModal: openModal,
            closeModal : closeModal,

        })



    }

    closeModal(){
        console.log('CLOSE modal ran');
        document.getElementById('myModal').style.display = "none";
    }

    openModal(){
        console.log('openModal ran');
        document.getElementById('myModal').style.display = "block";

    }

    currentSlide(n){
        this.showSlides(slideIndex = n)
    }


    showSlides(n){

        n=1

        console.log('showslides clicked', n);

        let i;

        let{slides, slideIndex, slideLength, dots, captionText, isOpen} = this.state;


        if(n > slideLength) {
            console.log('caseA');
            this.setState({slideIndex:1})
        }


        if (n < 1) {
            console.log('caseB');
            this.setState({slideIndex:slides.length})
        }


        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].style.display = "block";

        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;



    }


    render(){
        let style={
            width: 60,
        }

        // let {style} = this.state.style;

        console.log(this.props, 'see all props');

        const {content, lightBox} = this.state;



        let{slideLength, slideIndex, dots, captionText} = this.state;




                //-------   ------  ------  -----   ----    -

                return(

                    <div className='Gallery-Main'>

                        {/*Click the thumbnails*/}
                        <div className='row '>
                            <div className='column'>
                                <img name="arlo" src={content[0].src} onClick={this.openModal} />
                            </div>


                            <div className='column'>
                                <img src={content[2].src} onClick={this.openModal}/>
                            </div>

                            <div className='column'>
                                <img src={content[3].src}/>

                            </div>

                            <div className='column'>
                                <img src={content[1].src}/>

                            </div>
                        </div>


                        <div id="myModal" className="modal">

                            <span className="close cursor" onClick={()=>{
                                this.closeModal()}}>&times;</span>

                            <div className="modal-content">

                                <div className="mySlides">
                                    <div className="numbertext">1 / 4</div>
                                    <img src="https://res.cloudinary.com/ocampot/image/upload/v1534616139/sbsitnstay/gallery-sbsitnstay/20170304_110838.jpg" style={style}/>
                                </div>

                                <div className="mySlides">
                                    <div className="numbertext">2 / 4</div>
                                    <img src="https://res.cloudinary.com/ocampot/image/upload/v1534616139/sbsitnstay/gallery-sbsitnstay/20161231_140603.jpg" style={style}/>
                                </div>

                                <div className="mySlides">
                                    <div className="numbertext">3 / 4</div>
                                    {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1534616140/sbsitnstay/gallery-sbsitnstay/20170710_203907.jpg" style={style}/>*/}
                                </div>

                                <div className="mySlides">
                                    <div className="numbertext">4 / 4</div>
                                    {/*<img src="https://res.cloudinary.com/ocampot/image/upload/v1534616139/sbsitnstay/gallery-sbsitnstay/20170304_110838.jpg" style={style}/>*/}
                                </div>

                                {/*Next/previous controls*/}
                                {/*<a className="prev" onClick="plusSlides(-1)">&#10094;</a>*/}
                                <a className="prev" >&#10094;</a>

                                {/*<a className="next" onClick="plusSlides(1)">&#10095;</a>*/}
                                <a className="next" >&#10095;</a>

                                {/*Caption text*/}
                                <div className="caption-container">
                                    <p id="caption">'Test01</p>
                                </div>




                                {/*Thumbnail image controls*/}
                                <div className="column">

                                    <img className="demo" src={content[0].src} onClick={()=>{console.log('nature was clicked');}} alt="Nature"/>
                                </div>

                                <div className="column">
                                    <img className="demo" src="https://res.cloudinary.com/ocampot/image/upload/v1534616139/sbsitnstay/gallery-sbsitnstay/20170304_110838.jpg" onClick="currentSlide(2)" alt="Snow"/>
                                </div>

                                <div className="column">
                                    <img className="demo" src="img3.jpg" onClick="currentSlide(3)" alt="Mountains"/>
                                </div>

                                <div className="column">
                                    <img className="demo" src="img4.jpg" onClick="currentSlide(4)" alt="Lights"/>
                                </div>
                            </div>
                        </div>



                        </div>
                )}


}

export default Gallery





