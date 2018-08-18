import React,{Component} from 'react';
// import Masonry from 'react-masonry-component'
import Masonry from './gallery-children/Masonry'
import ReactDOM from 'react-dom';
const { render } = ReactDOM;



class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={
            content: [],
            breakPoints:[]

        }
    }

    componentWillMount(){
        this.setState({
            content: this.props.content,
            breakPoints: this.props.breakPoints
        })

    }

    componentDidMount(){
        console.log(this.state, 'from Gallery CompDidMount');
    }

    render(){

        console.log(this.props, 'zzzzzzz');



        console.log(this.state.breakPoints, "Bout to send this in");


       const {content, breakPoints} = this.state;


        return(

            <div className="container">
                <div className="masonry-container">

                    <Masonry brakepoints={breakPoints}>

                        {content.map((image, index)=>{

                            return(
                                <Tile key={index} src={image}/>
                            )
                        })}
                    </Masonry>
                </div>

            </div>

        )
    }

}

const Tile = ({src}) => {
    return (
        <div className="tile">
            <img src={src} />
        </div>
    );
};



// render(<Gallery content={} brakePoints={breakPoints} />, root);
export default Gallery





