import React , {Component}from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import Banner from './components/Banner'
import IndexMain from './components/IndexMain'


import mainCss from './assets/css/main.scss';
import dogLeash from './images/dog-leash.jpg'

class App extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }



    render(){

        return(

                <div>

                    <Banner/>
                    <IndexMain/>

                </div>

        )
    }
}



export default App