import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    state = {
        number : 0,
        text : 'Front-End 개발자 지망생입니다.'
    }

    changeDiv = () => {
        const arrayText = ['열정이라는 단어를 좋아합니다.', '개발을 좋아합니다.', '협업을 좋아합니다.', 'Javascript를 사랑합니다.', '스포츠를 좋아합니다.'];
        
        this.setState ( {
            number: this.state.number + 1,
            text : arrayText[this.state.number]
        });

        var el = document.querySelector("div.change-div");
   
        if (el) {
          el.className = "change-div1";
        } else {
          el = document.querySelector("div.change-div1");
          el.className = "change-div";
        }
    }
    
    componentDidMount() {
        const interval = 2000;

        this.timer = setInterval(
            () => this.changeDiv(), interval
        );
    }

    render() {
        const myClass = "change-div";
        let var1 = `<div class=${myClass}>${this.state.text}</div>`;

        if(this.state.number > 4) {
            this.setState ( {
                number : 0
            });
        }

        return(
            <div className="global-container" id="profile">
                <div className="profile-container">
                    <div className="profile-picture">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTW3n2QYecqnRgKcaoPyaN0cgdjxI2CJKligp2Nay54hra8tu&s"/>
                    </div>
                </div>
                <div className="profile-content" id="profile-content">
                    <div className="profile-content-myinfo global-font-kor">
                        김영조(25세 남 무직)
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: var1 }}>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;