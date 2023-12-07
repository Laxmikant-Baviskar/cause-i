import React from 'react';
import './Button.css';
function MyButton() {
    return (
        <div className="Button">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


            <div class="image-card">
    <div class="vignette">

    <img src="https://www.marthastewart.com/thmb/7UfJw45VxtL6bGM13-3G-6yZVjs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wedding-gift-tables-nataly-j-photography-02-0518-2000-df06bad0606b4846a5009b97651e69fb.jpg" alt="Card Image"/>
    </div>
    <div class="text-container">
      <p class="white-text">Lorem ipsum dolor sit amet, consectetur</p>
    </div>
  </div>



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
