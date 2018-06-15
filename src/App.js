import React , {Component}from 'react'
import Landing from './components/Landing'
import Header from './components/Header'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Main from './components/Main'


import mainCss from './assets/css/main.scss';

class App extends Component{
    render(){
        return(
            <div id="wrapper">
                <Header/>
                <Menu/>
                <Banner/>
                <Main/>
                <Landing/>
            </div>
        )
    }
}



export default App