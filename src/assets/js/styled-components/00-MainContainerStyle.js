import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'


export const AppMainContainer = styled.div.attrs({
    })`
        height: 100vh;
        overflow-x : hidden;
        overflow-y : auto;
        perspective: 2px; 
        `;

//     // =====   Section Wrapper : FLEX CONTAINER =====
    export const SectionContainer = styled.section.attrs({

    })`
        position: relative;
        display: flex;
        background-color : ${props => props.theme.bgColor};
        margin: ${props => props.theme.margin};
        padding: ${props => props.theme.padding};  
        padding-left: ${props => props.theme.paddingLeft};
        padding-right: ${props => props.theme.paddingRight}; 
             
        
        border:  ${props => props.theme.border};  
        border-radius: ${props => props.theme.borderRadius};  
    `;

    // =====   Section Image =====
export const ImageBox = styled.div.attrs({

    })`
          position: relative;
          object-fit: contain;
          width: 100%;
          
          img{
                width: 100%;
        }
    `;

    // =====   Section TextBox =====
export const TextBox =styled.div.attrs({
        className: 'TextBox',
    })`
        position: ${props => props.theme.position};
      
        width: ${props => props.theme.width};
        color:  ${props => props.theme.color};
        background-color: ${props => props.theme.bgColor};

        margin: ${props => props.theme.margin}
        text-align: ${props => props.theme.textAlignment};
         
        h1{
             position: relative;
             color: #00c9d5;
             border-bottom: 0.01em solid #edf1f9;
            
              left: 50%;
              transform: translateX(-50%);
              
              // line-height: 2em;
              // font-size: 2.5em;
             // font-weight: 900;
        }
        
        
     
        p{
            color:  ${props => props.theme.color};
            width: 100%;
        } 
    `;



export const ProfileImageWrapper = styled.div.attrs({
    className : 'ProfileImageWrapper'
})`
    background-color: lime;
    object-fit: contain;
    width: 25em;
    margin: 1em auto;
    
    img{
        width: 100%
    }
`;

export const SecondaryParallaxBanner = styled.section.attrs({
    className: 'SecondaryParallaxBanner'
})`
    position: relative;
    height: 55rem;
    display: flex;
    align-items: center;
    color: blue;
    
    &:after{
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        bottom 0;
        left 0;
        transform: translateZ(-1px) scale(1.5);
        background-size: 125%;
        z-index: -1;
        background-image: url('../.././assets/images/sbSitNStayMap2.png');
        background-repeat: no-repeat;
        
    }
   
`;

export const FormContainer = styled.div.attrs({
    className :  'FormContainer'
})`
    position: relative;
    display: flex;
    width: 100%;
    padding-top : 2%;
    padding-bottom : 2%;
    padding-right: 25%;
    padding-left: 5%;
    
    
    top: -6em;
    
    
    // background-color: pink;
    &:before{
    content: ' ';
    position: absolute;
    top:0;
    width: 75%;
    height: 100%;

    z-index: 0;
    opacity: .3;
    background-color:  black;
    padding: 5em 2em;


  }
    
`;

export const FormCol1 =styled.div.attrs({
    className: 'FormCol1',
})`
    flex-grow: 0.25;
    background-color:  #00c9d5;
    font-size: 1em;
    margin-left: 2em;
    
`;

export const FormCol2 =styled.div.attrs({
    className: 'FormCol2',
})`
    flex-grow: 2;
    position: relative;
    padding: 3em;
    // background-color: lime;
     
`;



export  const FormTextArea = styled.textarea.attrs({
    className: 'FormTextArea',
    placeholder: 'Comments',
    rows: '10',


})`
  overflow: hidden;
  width: 10em;
`;






export const Footer = styled.footer.attrs({
    className: 'Footer'
})`
   
    background-color: grey;
    height: 30rem;
`;







export const AppBodyWrapper = styled.div`

         position: relative;
         background-color: #5cb3fd;
         width: 100%;
         margin: 0 auto;
         padding: 3em;

         height: 40em;

    `;

//THEMES : DEFAULTS
SectionContainer.defaultProps = {
    theme: {
        bgColor: "#f2f2f2",
        padding: '',
        border: '',
        borderRadius: '',
        paddingLeft: '',
        paddingRight: '',
        paddingBottom: "",
}
};

TextBox.defaultProps ={
    theme:{
        position: '',
        color: '#666',
        textAlignment: '',
        bgColor: "white",
        width: '100%',
        margin: '',
    }
};













// export const AppSection =styled.div.attrs({
//     className: 'AppSection'
// })`
//         position: relative;
//         width: 80%;
//         margin: 0 auto;
//         background: #232323;
//         padding: 0 1em;
//
//
//         h1{
//         color: #00ff6c;
//         position: absolute;
//         top: .3em;
//         left: 50%;
//         transform: translateX(-50%);
//
//         font-weight: 300;
//         font-size: 2.5rem;
//         margin-top: 0;
//
//         shadows
//         -webkit-box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
//         -moz-box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
//         box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
//     }
//     `;

