import React from 'react';
import styled from 'styled-components';
import { font, palette } from 'styled-theme'

export const ServiceTilesContainer =styled.div.attrs({
    className: 'service-tiles-container clearfix'
})`
    position: relative;
    background-color: #f2f2f2;
    padding: 1em;

`;

export const ServiceTilesWrapper =styled.div.attrs({
    className: 'service-tiles-wrapper'
})`
    position: relative;
    left: 4%;
    display: inline-block;
    width: 100%;

`;

export const ServiceTile =styled.div.attrs({
    className: 'service-tile'
})`
    width:44%;
    height: 100%;
    margin:8px;
    float: left;
    border:1px solid black;

`;

//NOTE: keep grid style global -> used in other places


export const slideEffect =styled.div.attrs({
    className: 'service-tile'
})`
    width:44%;
    height: 100%;
    margin:8px;
    float: left;
    border:1px solid black;

`;










export const ServiceCards = styled.div.attrs({
    className : 'ServiceCards'
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

export const ServiceCardText = styled.div.attrs({

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
    className: 'FaContainer'
})`
    
    position: relative;
    padding: 0;

    left: 50%;
    transform: translate(-50%, 50%);
    
    
    li{
        list-style: none;
        width: 10em;
        margin: 0 auto;
        // background-color:yellow;
        
        
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


ServiceCardText.defaultProps = {
    height: '',
    top: '',
}