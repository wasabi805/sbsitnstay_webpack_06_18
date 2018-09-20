import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'
import theme from 'styled-theme';

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
    export const AppSectionContentWrapper = styled.section.attrs({
        className: 'AppSectionContentWrapper',
    })`

        position: relative;
        display: flex;
        background-color : ${props => props.theme.bgColor};
        padding-top: 2em;
        padding-bottom: 7em;
        padding-left: 2em;
        padding-right 2em;


        text-shadow: 0 0 5px #000;
        color: white;
    `;

    // =====   Section Image =====
export const AppSectionImage = styled.div.attrs({
        className:  'AppSectionImage',
    })`
          position: relative;
          object-fit: contain;
          width: 50%;

          img{
                height: 100%;
                width: 100%;
        }
    `;

    // =====   Section TextBox =====
export const AppSectionTextBox =styled.article.attrs({
        className: 'AppSectionTextBox',
    })`
        position: relative;
        width: 75%;


        color: #FFF;
        background-color: #232323;
    `;








export const AppBodyWrapper = styled.div`

         position: relative;
         background-color: #5cb3fd;
         width: 100%;
         margin: 0 auto;
         padding: 3em;

         height: 40em;

    `;










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

