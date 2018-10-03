import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'

export const PricingContainer = styled.div.attrs({

})`
    background-color: #f2f2f2;
    padding-bottom: 20em;
    
     
    @media screen and (min-width: 0px) and (max-width: 640px) {padding-bottom: 10em;}
    @media screen and (min-width: 641px) and (max-width: 1200px) {padding-bottom: 8em;}
    @media screen and (min-width: 1201px) {padding-bottom: 5em;}

`;

export const CardWrapper = styled.div.attrs({
    className: 'card'
})`
    // previously was .pricing-card   
    background-image: linear-gradient(141deg, #90cddf 0%, #1fc8db 51%, #90cddf 75%);
    p{
        color: #f2f2f2;
    }
    
    .btn-container{
        outline: #f2f2f2 solid 2px;
        width: 40%;
        padding: 1em;
        text-align: center;
        
        
        
        .button{
            color: #f2f2f2;
        }
    }
`;



