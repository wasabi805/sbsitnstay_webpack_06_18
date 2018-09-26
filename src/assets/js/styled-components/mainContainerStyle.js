import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'


export const AppWrapper = styled.div.attrs({className: 'AppWrapper'})`
        height: 100vh;
        overflow-x : hidden;
        overflow-y : auto;
        perspective: 2px; 
        `;

export const AppHeroBanner = styled.section.attrs({
        className: 'AppHeroBanner',
    })`
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;
        object-fit: cover;
    
    `;

export const AppHeroParallax = styled.section.attrs({
        className: 'AppHeroParallax',
    })`
        &:after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateZ(-1px) scale(1.5);
        background-size: 100%;
        z-index: -1;
        background-image: url("https://res.cloudinary.com/ocampot/image/upload/q_60/matt-nelson-259365-unsplash.jpg");
        background-repeat: no-repeat;
        }
    `;





//     // =====   Section Wrapper : FLEX CONTAINER =====
    export const AppSectionContentWrapper = styled.div.attrs({
        className: 'AppSectionContentWrapper',
    })`

        position: relative;
        display: flex;
        background-color : ${props => props.theme.bgColor};
        margin: ${props => props.theme.margin};
        padding: ${props => props.theme.padding};
        
        // background-color: yellow;
        
    `;

    // =====   Section Image =====
export const AppSectionImage = styled.div.attrs({
        className:  'AppSectionImage',
    })`
          position: relative;
          object-fit: contain;
          width: 100%;
         

          img{
                height: 100%;
                width: 100%;
        }
    `;

    // =====   Section TextBox =====
export const AppSectionTextBox =styled.div.attrs({
        className: 'AppSectionTextBox',
    })`
        position: relative;
      
        width: ${props => props.theme.width};
        color: #666;
        background-color: ${props => props.theme.bgColor};
        // padding:0 2em;
        margin: ${props => props.theme.margin}
        
     
        text-align: ${props => props.theme.textAlignment};
         
        h1{
             position: relative;
             
             font-size: 2.5em;
             font-weight: 900;
             color: #00c9d5;
             
             border-bottom: 0.01em solid #edf1f9;
             line-height: 2em;
             // margin-top: -0.5em;
             margin: 0 auto;
             
              left: 50%;
              transform: translateX(-50%);
            
        }
        p{
            color: #666;
            width: 100%;
            margin-bottom: 2em;
            margin-left: auto;
            margin-right: auto;
        } 
    `;

export const ServiceTiles = styled.div.attrs({
    className : 'ServiceTiles'
})`
    display: ${props => props.theme.display};
    position: relative;
    width: 13em;
    height: 30em;
    background-color: #f4f9f8;
    flex-grow:1;
    margin-right: 2.5em;
    margin-left: 2.5em;
    margin-bottom: 3em;
    `;
export const ServiceTilesText = styled.div.attrs({
    className : 'ServiceTilesText'
})`
    position: relative;
    background-color: #e9f0f0;
    top: ${props => props.theme.top};
    width: 75%;
    height: ${props => props.theme.height};
    margin: 0 auto;
    text-align: center;
    
    h1{
        color: #696969
    }
    
    
    `;

export const FaContainer = styled.ul.attrs({
    className : 'FaContainer',
})`
    display: flex;
    position: absolute;

    left: 50%;
    transform: translate(-50%, 50%);
    
    li{
        list-style: none;
        
        &:nth-child(1) a:before{
            background: #00c9d5;
            z-index:0
        }
        
        a{
            //NOTE: fa icons ARE font items: change the font size to increase the icon size
            font-size: 4.5em;
            background-color: #f2f2f2;
            width: 2em;
            height: 2em;
            text-align: center;
            line-height: 2em;
            border-radius: 50%;
            
            position: relative;
            overflow: hidden;
            border: 3px solid #fff;
            
            margin  : 0 10px;
            display: block;
            z-index:1;
            
            
            
            .fa{
                color: #00c9d5;
                position: relative;
                transition: .5s;
            }
            
            &:hover .fa{
                color: #fff;
                transform: rotateY(360deg);
            }
            
             
            &:before {
                content: ' ';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 100%
                background-color: #f00; 
                transition: .5s;
                z-index:2;
            }
            
            &:hover:before{
                top:0;
               
            }
        }
        
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
AppSectionContentWrapper.defaultProps = {
    theme: {
        bgColor: "#f2f2f2",
        padding: ''
}
};

AppSectionTextBox.defaultProps ={
    theme:{
        textAlignment: '',
        bgColor: "white",
        width: '100%',
        margin: '',
    }
};

ServiceTilesText.defaultProps = {
    height: '',
    top: '',
}











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

