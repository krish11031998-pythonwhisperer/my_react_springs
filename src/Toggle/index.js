import React,{useState} from 'react'
import {useSpring,animated} from 'react-spring'
const Index = () => {
    const [isToggled,setToggle] = useState(false);
    const fade = useSpring({
        // opacity: isToggled ? 1 : 0,
        // fontSize: isToggled ? '10rem' : '20em',
        // transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)',
        // y: isToggled ? 0 : -50,
        y: isToggled ? 0 : 1,
        color: isToggled ? 'white' : 'gray',
        zIndex: 0
    })

    return (
        <animated.div
        style={{
            zIndex:0
        }}>  
            <animated.h1 style={{
                transform: fade.y
                .interpolate({
                    range:[0,.25,.5,.75,1],
                    output:[0,-25,-50,-100,-50]
                })
                .interpolate(val => {
                    console.log(val)
                    return `translate3d(0,${val}px,0)`
                }),
                ...fade
            }}>Hello</animated.h1>
            <button onClick={() => {setToggle(toggle => !toggle)}}>Toggle</button>
        </animated.div>
    )
}

export default Index
