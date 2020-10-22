import styled from 'styled-components';

export default {
    Button: styled.button`
        background: white;
        border-radius: 3px;
        border: 2px solid rgb(51, 204, 51);     
        margin: 15px auto;
        padding: 0.25em 1em;
        display: flex;
        justify-content: center;
        font-weight: bold;
        font-family:  sans-serif;      

        :hover {                
            background-color: rgb(0, 102, 0);  
        }
    `
}
