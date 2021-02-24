import styled from 'styled-components'
import {animated} from 'react-spring'

export const MenuContainer = styled(animated.div)`
    position:absolute;
    top:0;
    width: 100%;
    /* width:100vw; */
    height:100vh;
    padding: 5% 5%;
    display:flex;
    flex-flow: column nowrap;
    justify-content:flex-start;
    align-items: center;
    background-color: var(--purp);
    z-index:1;

    ul{
        list-style: none;
        width:100%;
        padding:5% 0;
        margin:0;
        display:flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: flex-start;
    }

    li{
        flex: 0 1 auto;
        margin: 0% 0;
        padding: 25px;
        width:fit-content;
        transition: all 0.3s ease;
        color:white;
        border-radius: 15px;
        &:hover{
            transform: scale(1.1);
            background-color:white;
            color:black;
            box-shadow: 0 10px 10px rgba(0,0,0,0.2);
            border-radius: 30px;
        }

    }
`