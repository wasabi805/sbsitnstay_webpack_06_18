import styled from 'styled-components'

export const masonryGalleryStyle ={
 // =====    Gallery    =====
    Title: styled.h1`
        font-size: 1.5em;
        text-align: center;
         color: palevioletred; 
         background-color: pink;
         `,

    MasonryRow: styled.div.attrs({
        className: 'MasonryRow'
    })`
         display: flex;
         flex-wrap: wrap;
         padding: 0 4px;
         padding-bottom: 5em
         
         
         
        `,

    MasonryCol: styled.div.attrs({
        className: 'MasonryCol'
    })`
        flex: 25%;
        max-width: 25%;
        padding: 0 0.25em;
        `,
    // =====    Modal   =====

    //Background
    Modal: styled.div`
        display : none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.9);
    `,

    ModalContent: styled.div`
        margin : auto;
        display: block;
        width: 80%;
        max-width: 700px;
    `,
    ModalCaption: styled.div`
        margin: auto;
        display: block,
        width: 80%,
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 150px;
    `,

}



