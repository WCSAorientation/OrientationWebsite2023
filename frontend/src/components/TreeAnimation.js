import React, { Component } from 'react';

class TreeAnimation extends Component {
  render() {
    return (
    <div>
      <div className='z-0'>
        <div className="sun"></div>
        <div className="forest1"></div>
        <div className="forest2"></div>
        <div className="forest3"></div>
        <div className="forest4"></div>
      </div>
        <style jsx>{`
          .sun {
            width: 80%;
            height: 50%;
            opacity: 0;
            background-image: url('./sun.png');
            position: absolute;
            animation-name: sun;
            animation-duration: 1s;
            animation-delay: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest1 {
            width: 50%;
            height: 226.31px;
            opacity: 0;
            background-image: url('./forest1.png');
            position: absolute;
            animation-name: forest1;
            animation-duration: .75s;
            animation-delay: .75s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest2 {
            width: 70%;
            height: 448.47px;
            opacity: 0;
            background-image: url('./forest2.png');
            position: absolute;
            animation-name: forest2;
            animation-duration: 1s;
            animation-delay: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest3 {
            width: 70%;
            height: 382.49px;
            opacity: 0;
            background-image: url('./forest3.png');
            position: absolute;
            animation-name: forest3;
            animation-duration: 1s;
            animate-delay: .25s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest4 {
            width: 100%;
            height: 338.18px;
            opacity: 0;
            background-image: url('./forest4.png');
            position: absolute;
            animation-name: forest4;
            animation-duration: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          @keyframes sun {
            0%   {opacity: 100; left:10%; bottom:-100px;}
            100%  {opacity: 100; left:10%; bottom:20%;}
          }
          @keyframes forest1 {
              0%   {opacity: 100; left:10%; bottom:-100px;}
              100%  {opacity: 100; left:10%; bottom:10%;}
          }
          @keyframes forest2 {
            0%   {opacity: 100; left:30%; bottom:-200px;}
            100%  {opacity: 100; left:30%; bottom:0px;}
          }
          @keyframes forest3 {
            0%   {opacity: 100; left:0px; bottom:-200px;}
            100%  {opacity: 100; left:0px; bottom:0px;}
          }
          @keyframes forest4 {
            0%   {opacity: 100; left:0px; bottom:-100px;}
            100%  {opacity: 100; left:0px; bottom:0px;}
          }
        `}</style>
    </div>

    );
  }
}

export default TreeAnimation;
