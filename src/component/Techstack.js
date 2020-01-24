import React, { Component } from 'react';
import './Main.css';
import './Techstack.css';

class Techstack extends Component {
    state = {
        text : '',
    }
    empty = () => {
        this.setState ( {
            text : ''
        });
    }
    well = () => {
        this.setState ( {
            text : '상'
        });
    }
    soso = () => {
        this.setState ( {
            text : '중'
        });
    }
    awful = () => {
        this.setState ( {
            text : '하'
        });
    }
    windowDiv = () => {
        this.setState ( {
            text : '정품 보유'
        });
    }
    macOs = () => {
        this.setState ( {
            text : '맥북 사용'
        });
    }
    render() {
        const myClass = "render-div";
        let var1 = `<div class=${myClass}>${this.state.text}</div>`;
      return (
        <div className="global-container" id="techstack">
            <div className="techstack-container">
                <div className="tech-row">
                    <div className="tech-column" id="c++"
                    onMouseOver={(event) =>{ this.soso(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        C++
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.well(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        HTML
                    </div>
                    <div className="tech-column">
                        
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.well(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        CSS
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.awful(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Ubuntu
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.soso(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Fedora
                    </div>
                    <div className="tech-column">

                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.well(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Javascript
                    </div>
                    <div className="tech-column">
                        
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.awful(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        MySQL
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.well(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        React.js
                    </div>
                    <div className="tech-column">
                        
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: var1 }}>
                        
                    </div>
                    <div className="tech-column">
                        
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.soso(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        C
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-column">

                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.awful(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Node.js
                    </div>
                    <div className="tech-column">
                        
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.macOs(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Mac OS
                    </div>
                    <div className="tech-column">
                        
                    </div>
                </div>
                <div className="tech-row">
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.soso(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Python
                    </div>
                    <div className="tech-column">
                        
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.awful(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Oracle
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.windowDiv(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Window
                    </div>
                    <div className="tech-column"
                    onMouseOver={(event) =>{ this.well(event) }}
                    onMouseOut={(event) => { this.empty(event) }}>
                        Java
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export default Techstack;