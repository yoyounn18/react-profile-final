import React, { Component } from 'react';
import './Main.css';
import './Project.css';

class Project extends Component {
    render() {
        return (
            <div className="global-container1" id="project">
                <div className="project-container">
                    <div className="project-picture">
                        <img src="Jarani.png" />
                    </div>
                    <div className="project-content">
                        <div className="project-title global-font-kor">
                            자전거 후방 감지 및 방향지시등 모듈
                        </div>
                        <div className="project-explain global-font-kor">
                            팀 : 졸업작품 프로젝트 팀 (4인)<br></br>
                            기술 : Arduino, C, Android Studio, Java, App Inventor<br></br>
                            역할 : 앱 개발<br></br>
                            완성도 : 100%
                            <a class="project-anchor" href="https://github.com/yoyounn18/Jarani">Github</a>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-picture">
                        <img src="howabout.png" />
                    </div>
                    <div className="project-content">
                        <div className="project-title global-font-kor">
                            How About Potato
                        </div>
                        <div className="project-explain global-font-kor">
                            팀 : Spring 프로젝트 팀(4인)<br></br>
                            기술 : Spring, Oracle, Html, Css, JavaScript, JQuery, Tomcat<br></br>
                            역할 : Front-End 개발<br></br>
                            완성도 : 90%
                            <a class="project-anchor" href="https://github.com/stylish-sys/HowAboutPotato-">Github</a>
                        </div>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-picture">
                        <img src="comingsoon.jpg" />
                    </div>
                    <div className="project-content">
                        <div className="project-title global-font-kor">
                            Blog
                        </div>
                        <div className="project-explain global-font-kor">
                            팀 : 개인 프로젝트<br></br>
                            기술 : React.js, Node.js<br></br>
                            역할 : 총괄<br></br>
                            완성도 : 10%
                            <a class="project-anchor" href="https://github.com/yoyounn18/BolgProject">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;