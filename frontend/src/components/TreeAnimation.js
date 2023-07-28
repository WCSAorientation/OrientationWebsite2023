import React, { Component } from 'react';

class TreeAnimation extends Component {
  render() {
    return (
    <div>
      <div className='z-0 hidden md:block'>
        <div className="sun"></div>
        <div className="forest1"></div>
        <div className="forest2"></div>
        <div className="forest3"></div>
        <div className="forest4"></div>
      </div>
      <div className='md:hidden z-0'>
        <div className="sun-mobile"></div>
        <div className="forest1-mobile"></div>
        <div className="forest2-mobile"></div>
        <div className="forest3-mobile"></div>
        <div className="forest4-mobile"></div>
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
            height: 23%;
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
            height: 42%;
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
            height: 39%;
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
            height: 35%;
            opacity: 0;
            background-image: url('./forest4.png');
            position: absolute;
            animation-name: forest4;
            animation-duration: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          @keyframes sun {
            0%   {opacity: 100; left:15%; bottom:-10%;}
            100%  {opacity: 100; left:10%; bottom:15%;}
          }
          @keyframes forest1 {
              0%   {opacity: 100; left:14%; bottom:-10%;}
              100%  {opacity: 100; left:14%; bottom:8%;}
          }
          @keyframes forest2 {
            0%   {opacity: 100; left:30%; bottom:-20%;}
            100%  {opacity: 100; left:30%; bottom:0%;}
          }
          @keyframes forest3 {
            0%   {opacity: 100; left:0%; bottom:-20%;}
            100%  {opacity: 100; left:0%; bottom:0%;}
          }
          @keyframes forest4 {
            0%   {opacity: 100; left:0%; bottom:-10%;}
            100%  {opacity: 100; left:0%; bottom:0%;}
          }
          .sun-mobile {
            width: 100%;
            height: 50%;
            opacity: 0;
            background-image: url('./sun.png');
            position: absolute;
            animation-name: sun-mobile;
            animation-duration: 1s;
            animation-delay: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
            background-position: center center;
          }
          .forest1-mobile {
            width: 60%;
            height: 15%;
            opacity: 0;
            background-image: url('./forest1.png');
            position: absolute;
            animation-name: forest1-mobile;
            animation-duration: .75s;
            animation-delay: .75s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest2-mobile {
            width: 70%;
            height: 35%;
            opacity: 0;
            background-image: url('./forest2.png');
            position: absolute;
            animation-name: forest2-mobile;
            animation-duration: 1s;
            animation-delay: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest3-mobile {
            width: 70%;
            height: 25%;
            opacity: 0;
            background-image: url('./forest3.png');
            position: absolute;
            animation-name: forest3-mobile;
            animation-duration: 1s;
            animate-delay: .25s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          .forest4-mobile {
            width: 100%;
            height: 25%;
            opacity: 0;
            background-image: url('./forest4.png');
            position: absolute;
            animation-name: forest4-mobile;
            animation-duration: .5s;
            animation-fill-mode: forwards;
            background-size: cover;
          }
          @keyframes sun-mobile {
            0%   {opacity: 100; left:0%; bottom:-30%;}
            100%  {opacity: 100; left:0%; bottom:10%;}
          }
          @keyframes forest1-mobile {
              0%   {opacity: 100; left:14%; bottom:-10%;}
              100%  {opacity: 100; left:14%; bottom:8%;}
          }
          @keyframes forest2-mobile {
            0%   {opacity: 100; left:30%; bottom:-20%;}
            100%  {opacity: 100; left:30%; bottom:0%;}
          }
          @keyframes forest3-mobile {
            0%   {opacity: 100; left:0%; bottom:-20%;}
            100%  {opacity: 100; left:0%; bottom:0%;}
          }
          @keyframes forest4-mobile {
            0%   {opacity: 100; left:0%; bottom:-10%;}
            100%  {opacity: 100; left:0%; bottom:-.1%;}
          }
        `}</style>
    </div>

    );
  }
}

export default TreeAnimation;
