import React from 'react';
import styled from 'styled-components'

export const mainContainerStyles = {
   AppWrapper : styled.div`
        height: 100vh;
        overflow-x : hidden;
        overflow-y : auto;
        perspective: 2px;  
   `,

    AppHeroBanner: styled.section`
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;
        object-fit: cover;
    `,

    AppHeroParallax: styled.section`
    
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
        }
    `,
    //this is section className="app-static app-static-content-01
    AppArticleOne : styled.article`
        background : url('http://api.thumbr.it/whitenoise-361x370.png?');
        padding-top: 2em;
        padding-bottom: 2em;
        position: relative;
        text-shadow: 0 0 5px #000;
        justify-content: center; 
        color: white;
    `,

    //this was div className='app-static-container'
    AppArticleContentContainer: styled.div`
        width: 80%;
        margin: 0 auto;
        object-fit: contain;
        
        // shadows
        -webkit-box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
        -moz-box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
        box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);    
        
        img{
        height: 100%;
        width: 100%;
        }

        h1{
        color: #00ff6c;
        position: absolute;
        top: .3em;
        left: 50%;
        transform: translateX(-50%);

        background: #232323;
        padding: 0 1em;

        font-weight: 300;
        font-size: 2.5rem;
        margin-top: 0;
    }
    `,

    AppArticleTextBox: styled.article`
        color: #FFF;
        background-color: #232323;
        padding: 3em;
        width: 32vw;
        outline: 2px solid #00ff6c;
        outline-offset: -2.5em;
        position: absolute;
        top: -5em;
        left: 6em;
    
        //  SHADOW-Card-Text-Box-LEFT
        -webkit-box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
        -moz-box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
        box-shadow: 17px 21px 18px 1px rgba(134,141,153,1);
    `,

    //used to be className="app-section-sidekick sidekick-parallax bgAbout2"
    AppSecondaryParallaxContainer : styled.section`
        position: relative;
        height: 70vh;
        /* For text formatting. */
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 0 0 5px #000;
    `,

    AppSecondaryParallaxBg: styled.section`
        &:after{
            content: " ";
            position: absolute;
            height: 100%;
            top: -3em;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url("https://res.cloudinary.com/ocampot/image/upload/q_60/background-white-sand-beach-ameen-fahmy-527435-unsplash.jpg");
        
            transform: translateZ(-1px) scale(1.5);
            background-size: 100%;
           
            z-index: -1;
        }
    `,

    AppBodyWrapper: styled.div`  
       
         position: relative;
         background-color: #5cb3fd;
         width: 100%;
         margin: 0 auto;
         padding: 3em;
         
         height: 40em;
         
        
         
         
    `,




};


