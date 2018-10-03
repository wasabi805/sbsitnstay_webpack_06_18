import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme';

export const HeroBanner = styled.section.attrs({

})`
        position: relative;
        height: 100vh;
        
        display: flex;
        // align-items: center;
        // justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;
        object-fit: cover;
        
        
        overflow:auto;
        transform:scaleY(1);
        transform-origin:top;
    `;

export const HeroParallaxBg = styled.section.attrs({
})`
        &:after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width:100%
        transform: translateZ(-1px) scale(1.5);
        background-size: 100%;
        z-index: -1;
        background-image: url("https://res.cloudinary.com/ocampot/image/upload/q_60/matt-nelson-259365-unsplash.jpg");
        background-repeat: no-repeat;
        }
    `;