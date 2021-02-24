import React,{useState,useEffect,forwardRef,useImperativeHandle} from 'react'
import {useSpring,animated} from 'react-spring';
import {
    MenuContainer
} from './style'
const Index = forwardRef((props,ref) => {

    const menuEl = ['Home','About Us','Products','Services','Contact']
    let [openMenu,setOpenMenu] = useState(false)
    let [transition,setTransition] = useSpring(() => ({
        opacity: 0,
        y: -100
    }))

    var interpolate = (y) => `translate3d(${y}%,0,0)`
    
    useEffect(() => {
        setTransition({opacity: openMenu ? 1 : 0,y : openMenu ? 0 : -100});
    },[openMenu])


    useImperativeHandle(ref,() => ({
        openMenu,
        transition,
        clickOpen(){
            setOpenMenu(menu => !menu);
        }
    }))
    return (
        <MenuContainer style={{
            opacity: transition.opacity,
            transform:transition.y.interpolate(interpolate)
        }}>
            <animated.ul>
                {menuEl.map(el => <animated.li>{el}</animated.li>)}
            </animated.ul>
        </MenuContainer>
    )
})

export default Index
