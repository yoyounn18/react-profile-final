import React, { Component } from 'react';
import './Main.css';
import './Greeting.css';
    
class Greeting extends Component {
    state = {
        cursorNumber: 0,
        number: 0,
        text: ''
      }
    cursorView = () => {
        if(this.state.cursorNumber === 0) {
            document.getElementById('cursor-div').classList.add('cursor-effect');
            this.setState({
                cusorNumber: 1
            });
        }else {
            document.getElementById('cursor-div').classList.remove('cursor-effect');
            this.setState({
                cusorNumber: 0
            });
        }
    }
    textView = () => {
        const sentence = '안녕하세요 김영조의 웹페이지 입니다.';
        
        this.setState({
            number: this.state.number + 1,
            text: sentence.substring(0, this.state.number)
        });
        if(this.state.number > 30) {
            this.setState({
                number: 0
            });
        }
    }
    componentDidMount() {
        const interval = 200;

        this.timer = setInterval(
            () => this.textView(), interval
        );
        this.timer = setInterval(
            () => this.cursorView(), interval
        );
    }
    render() {
        const myClass = 'greeting-title';
        let var1 = `<div class=${myClass}>${this.state.text}</div>`;

      return (
        <div id="cursor-div" className="global-container">
            <div className="greeting cursor">
                <div id="greeting-text" dangerouslySetInnerHTML={{ __html: var1 }}>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Greeting;


