import React, {Component} from 'react'

//IMPORT THE MODAL WHEN THE GALLEY IS COMPLETE

class MasonryGallery extends Component{

    constructor(props) {
        super(props);
        this.state={
            content: '',
            modalBtns: '',
            col1: '',
            col2: '',
            col3: '',
            col4: '',
        }
    }

    componentWillMount(){
        this.setState({
            content: this.props.content,
            modalBtns: this.props.modalBtns
        })
    }

    componentDidMount(){

        let {content, modalBtns} = this.state
        let w; let x; let y; let z;


        let col1Imgs = []; let col2Imgs = []; let col3Imgs = []; let col4Imgs = [];

        //Col 1
        for(w=0; w <= content.length -16 ; w++ ){
            let img = <img key={w} src={content[w].src} />;
            col1Imgs.push(img);
        }
        //Col 2

        for(x=5; x <= content.length-11; x++ ){
            let img = <img key={x} src={content[x].src} />;
            col2Imgs.push(img);
            console.log(content.length);
        }
        // Col 3
        for(y=10; y <= content.length-6; y++ ){
            let img = <img key={y} src={content[y].src} />;
            col3Imgs.push(img);
            console.log(y);
        }

        // Col 4
        for(z=15; z <= content.length-1; z++ ){
            let img = <img key={z} src={content[z].src} />;
            col4Imgs.push(img);
            console.log(z);
        }


        this.setState({
            col1 : col1Imgs,
            col2 : col2Imgs,
            col3 : col3Imgs,
            col4 : col4Imgs,
        })

    }


    render(){
        const {content, modalBtns} = this.state;

        console.log(this.state.col1, 'from the actual gallery');

        return(
            <div className='masonry-main container'>
                <div className='row '>

                    <div className='column'>
                        {this.state.col1}
                    </div>

                    <div className='column'>
                        {this.state.col2}
                    </div>

                    <div className='column'>
                        {this.state.col3}
                    </div>

                    <div className='column'>
                        {this.state.col4}
                    </div>

                </div>

            </div>
        )
    }
}

export default MasonryGallery