import React , {Component}from 'react'
import IndexLanding from './components/IndexLanding'
import Header from './components/Header'
import Menu from './components/Menu'

import mainCss from './assets/css/main.scss';

class App extends Component{
    render(){
        return(
            <div id="wrapper">
                <Header/>
                <Menu/>
                <IndexLanding/>
            </div>
        )
    }
}



export default App