import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
//All Styles for Gallery
import {styles} from '../../../assets/js/styled-components/masonryGalleryStyle'




import {Button} from 'react-bootstrap'
import {handleThumbnailClick, fetchGalleryData} from "../../../actions/gallery-actions";

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            galleryThumbs: [],
            modalImages: [],
            modalBtns: [],

            col1: '',
            col2: '',
            col3: '',
            col4: '',
            modals: [],

        };

    }
    componentWillMount(){
        console.log( this.props, 'From Gallery');

    }


    render(){
        let {Title} = styles;

        return(
            <div>

            </div>
        )
    }
}

export default Gallery












