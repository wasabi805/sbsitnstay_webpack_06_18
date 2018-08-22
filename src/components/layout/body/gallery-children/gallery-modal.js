import React, {Component} from 'React'

const GalleryModal =(props)=>{



    return(
        <div>
            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01"/>
                <div id="caption"></div>
            </div>
        </div>
    )

};

export default GalleryModal