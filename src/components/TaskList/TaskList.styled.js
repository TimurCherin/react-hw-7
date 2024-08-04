import styled from 'styled-components';

export const Wrap = styled.div`
    padding: 20px;
`
export const List = styled.ul`
    display: flex;
    background-color: skyblue;
    flex-direction: column;
    gap: 25px;
    list-style: none;

    li{
        color: purple;
    }
    
    button{
        padding: 3px 15px;
        border: 1px solid purple;
        border-radius: 25px;
        margin-left: 10px;
    }
`