import React,{useState,useEffect,forwardRef,useImperativeHandle} from 'react'
import {useSpring} from 'react-spring'
import {
    CheckoutContainer,
    SmallCheckoutContainer

} from './style'
const Index = forwardRef((props,ref) => {
    let [checkout,setCheckout] = useState(false);

    useEffect(() => {
        console.log('Checkout changed to ', checkout);
    },[checkout])

    useImperativeHandle(ref,() => ({
        checkout,
        clickOpen(){
            setCheckout(cout => !cout)
        }
    }))

    return (
        <CheckoutContainer
            style={{
                zIndex: checkout ? 1 : -1
            }}
        >
            {/* <SmallCheckoutContainer small={true} color={'var(--white-60)'}></SmallCheckoutContainer>
            <SmallCheckoutContainer small={false} color={'var(--black-60)'}></SmallCheckoutContainer> */}
            <SideContainers dir={"left"} small={true} open={checkout} color={'var(--white-60)'}>
                Hello
            </SideContainers>
            <SideContainers dir={"right"} small={false} open={checkout} color={'var(--purp)'}>
                Hello
            </SideContainers>
        </CheckoutContainer>
    )
})


const SideContainers = (props) => {
    let {dir,small,open,color} = props
    let x_off = dir === 'right' ? 100 : -100
    let [transition,setTransition] = useSpring(() => ({
        opacity:0,
        x: x_off
    }))

    useEffect(() => {
        console.log("the checkout open :",open);
        setTransition({x : open ? 0 : x_off, opacity: open ? 1 : 0})
    },[open])

    var trans = (x) => `translate3d(${x}%,0,0)`

    var componentStyle = {
        opacity: transition.opacity,
        transform: transition.x.interpolate(trans)
    }


    return <SmallCheckoutContainer small={small} color={color} style={componentStyle}/>
}

export default Index
