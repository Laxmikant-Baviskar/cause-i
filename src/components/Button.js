import React from 'react';
import './Button.css';
function MyButton() {
    return (
        <div className="Button">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            <div className="grd-but">

                <a class="btn" href="#">
                    <span>Previous</span>
                </a>
                <a class="btn" href="#" style={{width: '200px'}} >
                    <span>Next Question ▷|</span>
                </a>

            </div>



        </div>
    );
}

export default MyButton;
