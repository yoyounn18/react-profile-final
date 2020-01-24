import React from 'react';
import './Main.css';
import './Social.css';

const Social = () => {
    return(
        <div className="global-container" id="social">
            <div className="social-container">
                <div className="social-title global-font-kor">
                    <a href="https://github.com/yoyounn18">
                        Github
                    </a>
                </div>
                <div className="social-title global-font-kor">
                    <a href="https://blex.kr/@yoyounn18">
                        Blog
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Social;