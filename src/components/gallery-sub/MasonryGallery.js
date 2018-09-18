import React,{Component} from 'react';
import styled from 'styled-components';
import {masonryGalleryStyle} from '../.././assets/js/styled-components/masonryGalleryStyle'

class MasonryGallery extends Component{
    constructor(props){
        super(props);
        this.state={
            images: [],
            col1: [],
            col2: [],
            col3: [],
            col4: [],
        }
        this.sortPics = this.sortPics.bind(this)
    }
    sortPics(){
        //Takes the length of mapped Img, divides by for cols, splices array and renders those chunks into the gallery cols
        let col1 = [], col2 = [], col3 = [], col4 = [];
        let imgArray = this.props.masonryGallery;
        let total = this.props.masonryGallery.length
        let columns = 4;

        let chunk = total/columns;

        col1.push(imgArray.splice(0, chunk)); col2.push(imgArray.splice(0, chunk)); col3.push(imgArray.splice(0, chunk)); col4.push(imgArray.splice(0, chunk));

        this.setState({
            col1 : col1,
            col2 : col2,
            col3 : col3,
            col4 : col4
        })
    }
    componentWillMount() {
        this.sortPics()
    }

    render(){
        let {Title, MasonryRow, MasonryCol} = masonryGalleryStyle;

        return(
            <React.Fragment>

                <MasonryRow>
                   <MasonryCol>
                       {this.state.col1}

                   </MasonryCol>

                    <MasonryCol>
                        {this.state.col2}

                    </MasonryCol>

                    <MasonryCol>
                        {this.state.col3}

                    </MasonryCol>

                    <MasonryCol>
                        {this.state.col4}

                    </MasonryCol>

                </MasonryRow>

            </React.Fragment>

        )
    }
}

export default MasonryGallery
