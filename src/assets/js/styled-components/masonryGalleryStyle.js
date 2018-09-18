import styled from 'styled-components'

export const masonryGalleryStyle ={

    Title: styled.h1`
        font-size: 1.5em;
        text-align: center;
         color: palevioletred; 
         background-color: pink;
         `,

    MasonryRow: styled.div`
         display: flex;
         flex-wrap: wrap;
         padding: 0 4px;
        `,

    MasonryCol: styled.div`
        flex: 25%;
        max-width: 25%;
        padding: 0 0.25em;
        `,
}

