import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import {useSpring,animated} from 'react-spring';
import Toggle from './Toggle'
import Menu from './Menu'
import Checkout from './Checkout'
const App = () => {
  let menuRef = useRef(null)
  let checkoutRef = useRef(null)
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to:{
      opacity: 1
    }
  });

  var onClick = (button) => {
    var container = null
    switch(button){
      case 'menu':
        container = menuRef.current
        break;
      case 'checkout':
        container = checkoutRef.current
        break;
      default:
        console.log('Container will be empty')
        break;
    }
    // console.log('Menu button was clicked!');
    // if (menuRef.current){
    //   console.log('menu should open now !')
    //   menuRef.current.clickOpen()
    // }
    if(container){
      container.clickOpen()
    }
  }

  var hideToggle = () => menuRef && menuRef.current && menuRef.current.openMenu ? 0 : 1 || 1
  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="logo" />
        <button className="menu-button" onClick={() => {onClick('menu')}}>Menu</button>
        <button className="menu-button" onClick={() => {onClick('checkout')}}>Checkout</button>
      </header>
      <Menu ref={menuRef}/>
      <Checkout ref={checkoutRef}/>
      <Toggle style={{opacity: hideToggle()}}/>
    </animated.div>
  );
}
export default App;
