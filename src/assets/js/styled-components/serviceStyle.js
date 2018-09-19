import styled from 'styled-components'
export const serviceStyle ={
    SectionContainer: styled.section`
        display: flex;
        background: #f2f2f2 
    `,

    SectionTileImg: styled.div`
        
         width: 30em;
         background-image: linear-gradient(to bottom right, #ff00f2, #4b0648);
         color: #f2f2f2;
         object-fit: contain;    
       
    `,

    SectionTileText: styled.div.attrs({
        className: 'sectionText',
        // size: props => (props.small ? 3 : 8),
    })`
         position: relative;
         background-image: linear-gradient(to bottom right, #77e5d4, #3b8277);
         color: #f2f2f2;
         flex-grow: 2;
         
         display: flex;
         justify-content: center;
         align-items: center;
         
         h1{
            color: white;
         }
    `,
};