import React, { useState, useEffect, useRef } from 'react'
import KeysComponent from './keysComponent'

const App = () => {
  const [expression, setExpression] = useState('');
  const [themeNum, setThemeNum] = useState("1");
  const [coordinates, setCoordinates] = useState({});
  const inputField = useRef(null);
  const dot = useRef(null)


  useEffect(() => {
    inputField.current.focus()
  }, [])

  useEffect(() => {
    // theme 1
    if (themeNum === "1") {
      let main = document.getElementsByClassName('main')
      main[0].style.backgroundColor = "hsl(222, 26%, 31%)";

      let keypad = document.getElementsByClassName('keys-section');
      keypad[0].style.backgroundColor = 'hsl(223, 31%, 20%)';

      let screen = document.getElementsByClassName('input-screen');
      screen[0].style.backgroundColor = 'hsl(224, 36%, 15%)';
      screen[0].style.color = "white"

      let header = document.getElementsByTagName('header');
      header[0].style.color = 'white';

      let dotContainer = document.getElementsByClassName('dot-container');
      dotContainer[0].style.backgroundColor = 'hsl(224, 36%, 15%)';

      dot.current.style.backgroundColor = 'hsl(6, 63%, 50%)';

      let buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'hsl(30, 25%, 89%)'
        buttons[i].style.boxShadow = "0px 2.5px hsl(28, 16%, 65%)"
        buttons[i].style.color = 'hsl(221, 14%, 31%)'
      }

      let btns = document.getElementsByClassName('btns');
      for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        element.style.backgroundColor = 'hsl(225, 21%, 49%)';
        element.style.boxShadow = "0 2.5px hsl(224, 28%, 35%)"
        element.style.color = 'white'
      }

      let btn = document.getElementsByClassName('btn');
      btn[0].style.backgroundColor = 'hsl(6, 63%, 50%)'
      btn[0].style.boxShadow = "0 2.5px hsl(6, 70%, 34%)"
      btn[0].style.color = 'white'
    }
    // theme 2
    if (themeNum === "2") {
      let main = document.getElementsByClassName('main')
      main[0].style.backgroundColor = "hsl(0, 0%, 90%)";

      let keypad = document.getElementsByClassName('keys-section');
      keypad[0].style.backgroundColor = 'hsl(0, 5%, 81%)';

      let screen = document.getElementsByClassName('input-screen');
      screen[0].style.backgroundColor = 'hsl(0, 0%, 93%)';
      screen[0].style.color = "hsl(60, 10%, 19%)"

      let header = document.getElementsByTagName('header');
      header[0].style.color = 'hsl(198, 20%, 13%)';

      let dotContainer = document.getElementsByClassName('dot-container');
      dotContainer[0].style.backgroundColor = 'hsl(0, 5%, 81%)';

      dot.current.style.backgroundColor = 'hsl(25, 98%, 40%)';

      let buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'hsl(45, 7%, 89%)'
        buttons[i].style.boxShadow = "0px 2.5px hsl(35, 11%, 61%)"
        buttons[i].style.color = 'hsl(60, 10%, 19%)'
      }

      let btns = document.getElementsByClassName('btns');
      for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        element.style.backgroundColor = 'hsl(185, 42%, 37%)';
        element.style.boxShadow = "0 2.5px hsl(185, 58%, 25%)"
        element.style.color = 'white'
      }

      let btn = document.getElementsByClassName('btn');
      btn[0].style.backgroundColor = 'hsl(25, 98%, 40%)'
      btn[0].style.boxShadow = "0 2.5px hsl(25, 99%, 27%)"
      btn[0].style.color = 'white'
    }
    // theme 3
    if (themeNum === "3") {
      let main = document.getElementsByClassName('main')
      main[0].style.backgroundColor = "hsl(268, 75%, 9%)";

      let keypad = document.getElementsByClassName('keys-section');
      keypad[0].style.backgroundColor = 'hsl(268, 71%, 12%)';

      let screen = document.getElementsByClassName('input-screen');
      screen[0].style.backgroundColor = 'hsl(268, 71%, 12%)';
      screen[0].style.color = "hsl(52, 100%, 62%)"

      let header = document.getElementsByTagName('header');
      header[0].style.color = 'hsl(52, 100%, 62%)';

      let dotContainer = document.getElementsByClassName('dot-container');
      dotContainer[0].style.backgroundColor = 'hsl(268, 71%, 12%)';

      dot.current.style.backgroundColor = 'hsl(176, 100%, 44%)';

      let buttons = document.getElementsByTagName('button');
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'hsl(268, 47%, 21%)'
        buttons[i].style.boxShadow = "0px 2.5px hsl(290, 70%, 36%)"
        buttons[i].style.color = 'hsl(52, 100%, 62%)'
      }

      let btns = document.getElementsByClassName('btns');
      for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        element.style.backgroundColor = 'hsl(281, 89%, 26%)';
        element.style.boxShadow = "0 2.5px hsl(285, 91%, 52%)"
        element.style.color = 'white'
      }

      let btn = document.getElementsByClassName('btn');
      btn[0].style.backgroundColor = 'hsl(176, 100%, 44%)'
      btn[0].style.boxShadow = "0 2.5px hsl(177, 92%, 70%)"
      btn[0].style.color = 'hsl(198, 20%, 13%)'
    }
  }, [coordinates, themeNum]);

  return (
    <main className="main">
      <section className="main-section">
        <header>
          <h1 className='title'>calc</h1>
          <div className="theme">
            <h5>THEME</h5>
            <div className="themes">
              <div className="themes-num">
                <p className="one" onClick={(e) => {
                  document.getElementById('dot-container').style.justifyContent = 'flex-start'
                  setThemeNum('1');
                }}>1</p>
                <p className="two" onClick={(e) => {
                  document.getElementById('dot-container').style.justifyContent = 'center'
                  setThemeNum('2')
                }}>2</p>
                <p className="three" onClick={(e) => {
                  document.getElementById('dot-container').style.justifyContent = 'flex-end'
                  setThemeNum('3')
                }}>3</p>
              </div>
              <div className="dot-container" id="dot-container">
                <div className="dot" id='dot' ref={dot}></div>
              </div>
            </div>
          </div>
        </header>
        <input className="input-screen" id='input' type="text" value={expression} onChange={(e) => {
          setExpression(e.target.value);
        }} onKeyUp={(e) => { // hitting the enter key will evaluate the expression 
          if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementsByClassName('equal')[0].click();
          }
        }} ref={inputField} />
        <KeysComponent expression={expression} setExpression={setExpression} />

      </section>
    </main>
  )
}

export default App
