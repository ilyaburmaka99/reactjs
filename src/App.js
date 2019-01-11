import React from 'react'
import pict from './1.png'
const someText = 'text,text,text'
//const someText1 = 'text2,text2,text2'
const someText2 = 'text3,text3,text3'

class App extends React.Component {
  state = {
    isVisible: true,
    isVisible_s: false,
    isVisible_t: false
  }
  handShowText = () => {
    this.setState({
      isVisible:true,
      isVisible_s:false,
      isVisible_t:false
    })
  }
  handShowText1 = () => {
    this.setState({
      isVisible:false,
      isVisible_s:true,
      isVisible_t:false
    })
  }
  handShowText2 = () => {
    this.setState({
      isVisible:false,
      isVisible_s:false,
      isVisible_t:true,
    })
  }
  render() {
    const { isVisible } = this.state
    const { isVisible_s } = this.state
    const { isVisible_t } = this.state
    return (
      <div className = {'block'} >
        <button className = {isVisible ? 'tab active' : 'tab'} onClick={this.handShowText}> 1 </button>
        <button className = {isVisible_s ? 'tab active' : 'tab'} onClick={this.handShowText1}> 2 </button>
        <button className = {isVisible_t ? 'tab active' : 'tab'} onClick={this.handShowText2}> 3 </button>
          <div className = {'background_big'}>
            <p className = {isVisible ? 'visible' : 'hidden' } > {someText} </p>
            <p className = {isVisible_s ? 'visible' : 'hidden' } ><img src = {pict} alt = {'pict'} /></p>
            <p className = {isVisible_t ? 'visible' : 'hidden' } > {someText2} </p>
          </div>
      </div>
    )
  }
}
export default App;
