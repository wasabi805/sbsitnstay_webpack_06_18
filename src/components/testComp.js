import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const testIMg = 'http://res.cloudinary.com/ocampot/image/upload/v1532313756/testImg.jpg'


class TestMenu extends Component {
    render(){
        return(
            <div>
                <img src={testIMg}/>

            </div>
        )
    }

}

export default TestMenu