import styled from 'styled-components'
import {animated} from 'react-spring'
export const CheckoutContainer = styled(animated.div)`
   position:absolute;
   top:0;
   left:0;
   right:0;
   width:100%;
   height: 100vh;
   display:flex;
   flex-flow: row nowrap;
   /* justify-content: flex-start; */
`

export const SmallCheckoutContainer = styled(animated.div)`
    flex: 0 1 ${({small}) => small ? 35 : 65}%;
    background-color:${({color}) => color ? color : 'white'};
    /* width: 100%; */
    width:100%;
    height:100%;
    z-index:1;
`