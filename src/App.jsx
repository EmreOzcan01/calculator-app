import { useState } from 'react'
import './App.css'

function App() {
  const [previous, setPrevious] = useState('0')
  const [current, setCurrent] = useState('0')
  const [markId, setMarkId] = useState(null)

  const clickFunc = e => {
    if (current.length < 7) {
      if (current[current.length - 1] === '.' && e.target.innerHTML === '0') {
        return
      } else {
        if ([...current].includes('.')) {
          if (e.target.innerHTML === '.') {
            return
          } else {
            setCurrent(current + e.target.innerHTML)
          }
        } else {
          if (current === '0') {
            if (e.target.innerHTML === '.') {
              setCurrent(current + e.target.innerHTML)
            } else {
              setCurrent(e.target.innerHTML)
            }
          } else {
            setCurrent(current + e.target.innerHTML)
          }
        }
      }
    } else {
      return
    }
  }

  const calcFunc = e => {
    if (!(e.target.id === '5')) {
      setPrevious(current + e.target.innerHTML)
      setCurrent('0')
      setMarkId(e.target.id)
    } else if (e.target.id === '5' && !(previous === '0') && !(markId === '0')) {
      let result
      setCurrent('0')
      if (markId === '1') {
        result = Number(previous.slice(0, previous.length - 1)) / Number(current)
        if (String(result).length > 6) {
          setPrevious(String(result.toFixed(6)))
        } else {
          setPrevious(String(result))
        }
      } else if (markId === '2') {
        result = Number(previous.slice(0, previous.length - 1)) * Number(current)
        if (String(result).length > 6) {
          setPrevious(String(result.toFixed(6)))
        } else {
          setPrevious(String(result))
        }
      } else if (markId === '3') {
        result = Number(previous.slice(0, previous.length - 1)) + Number(current)
        setPrevious(String(result))
      } else if (markId === '4') {
        result = Number(previous.slice(0, previous.length - 1)) - Number(current)
        setPrevious(String(result))
      }
      setMarkId('0')
    }
  }

  const clearFunc = e => {
    setCurrent('0')
  }

  const delFunc = e => {
    if (current.length === 1) {
      setCurrent('0')
    } else {
      setCurrent(current.slice(0, current.length - 1))
    }
  }

  return (
    <div className='screen'>
      <div className="output">
        <div className="previous-operand">{previous}</div>
        <div className="current-operand">{current}</div>
      </div>
      <div className="button-grid">
        <button onClick={clearFunc} className="span-two gray">AC</button>
        <button onClick={delFunc} className='gray'>DEL</button>
        <button onClick={calcFunc} id='1' className='orange'>÷</button>
        <button onClick={clickFunc}>1</button>
        <button onClick={clickFunc}>2</button>
        <button onClick={clickFunc}>3</button>
        <button onClick={calcFunc} id='2' className='orange'>x</button>
        <button onClick={clickFunc}>4</button>
        <button onClick={clickFunc}>5</button>
        <button onClick={clickFunc}>6</button>
        <button onClick={calcFunc} id='3' className='orange'>+</button>
        <button onClick={clickFunc}>7</button>
        <button onClick={clickFunc}>8</button>
        <button onClick={clickFunc}>9</button>
        <button onClick={calcFunc} id='4' className='orange'>-</button>
        <button onClick={clickFunc}>.</button>
        <button onClick={clickFunc}>0</button>
        <button className="span-two orange" onClick={calcFunc} id='5'>=</button>
      </div>
    </div>
  )
}

export default App
