const string = `.doraemon * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ol, ul {
    list-style-type: none;
  }
  #html{
    min-height: 68vh;
    background-color: #fc3;
    position:relative;
  }
  .doraemon {
    width: 400px;
    height: 600px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 100px;
    margin: auto;
  }

  .head {
    width: 384px;
    height: 358px;
    border: 2px solid  #000;
    border-radius: 50%;
    position: absolute;
    left: 63px;
    top: 20px;
    overflow: hidden;
    background-color: #0097e3;
    z-index: 3;
  }
  .eye-wrap {
    position: absolute;
  }
  .eye-wrap.left {
    left: 73px;
    top: 35px;
    width: 87px;
    height: 106px;
  }
  .eye-wrap.right {
    left: 157px;
    top: 42px;
    height: 110px;
    width: 88px;
  }
  
  .eye {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid  #000;
    position: absolute;
    overflow: hidden;
    z-index: 3;
    width: 100%;
    height: 100%;
    animation:eye-close 6s 5s infinite;
  }
  @keyframes eye-close {
    0%, 3%, 6%, 100% {
      height:100%;
    }
    1.5%, 4.5% {
      height:5%;
    }
  }
  .pupil {
    position: absolute;
    width: 25px;
    height: 35px;
    background-color: #000;
    border-radius: 50%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .pupil:after {
    display: block;
    content: '';
    width: 7px;
    height: 14px;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;  
  }
  .nose {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 2px solid  #000;
    background-color: #e40224;
    position: absolute;
    left: 115px;
    top: 123px;
    z-index: 3;
  }
  .mustache-list {
    position: absolute;
    z-index: 3;
  }
  .mustache-list li {
    width: 90px;
    height: 5px;
    background-color: #000;
    position: relative;
  }
  @media(max-width:500px){
    .mustache-list li {
      width: 60px;
      height: 4px;
      background-color: #000;
      position: relative;
    }
  }
  .mustache-list li:first-child {
    -webkit-transform: rotate(15deg);
    top: -1.75em;
  }
  .mustache-list li:last-child {
    -webkit-transform: rotate(-15deg);
    top: 1.75em;
  }
  .mustache-list.left {
    -webkit-transform: rotate(15deg);
    top: 165px;
    left: 5px;
  }
  .mustache-list.right {
    -webkit-transform: scaleX(-1.4) rotate(0deg);
    top: 188px;
    right: 65px;
  }
  .nose:after {
    display: block;
    content: '';
    background-color: #fff;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 11px;
    top: 11px;
  }
  .mouth {
    width: 340px;
    height: 280px;
    background-color:#fff;
    border-radius: 50%;
    left: 7px;
    top: 85px;
    position: absolute;
    border: 2px solid  #000;
    z-index: 1;
    overflow: hidden;
    -webkit-transform: rotate(5deg);
  }
  .philtrum {
    position: absolute;
    min-height: 150px;
    min-width:50px;
    border-radius: 50%;
    border: 2px solid  #000;
    border-top-color:transparent;
    border-right-color:transparent;
    border-bottom-color:transparent;
    left: 126px;
    top: 60px;
    z-index: 5;
    /*
    height: 115px;
    width:2px;
    background-color: #000;
    left: 131px;
    top: 85px;
    z-index: 5;
    -webkit-transform: rotate(-5deg);
    */
  }
  .lips {
    width: 285px;
    height: 200px;
    border: 2px solid  #000;
    border-radius: 50%;
    margin-left: 5px;
    position: relative;
    z-index: 3;
    -webkit-transform: rotate(-10deg);
  }
  .lips:before {
    display: block;
    content: '';
    width: 305px;
    height: 105px;
    background-color:#fff;
    position: absolute;
    left: -2px;
  }
  .dimple {
    width: 50px;
    height: 50px;
    border: 2px solid  #000;
    border-radius: 50%;
    position: absolute;
    z-index: 6;
    top: 105px;
    left: 9px;
    border-right-color:transparent;
    border-bottom-color:transparent;
    -webkit-transform: rotate(10deg);
  }
  .necklace {
    width: 255px;
    height: 80px;
    background-color: #d9011a;
    border: 2px solid  #000;
    border-radius: 50%;
    position: absolute;
    left: 123px;
    top: 305px;
    -webkit-transform: rotate(2deg);
    z-index: 2;
  }
  .drop {
    width: 55px;
    height: 55px;
    border: 2px solid  #000;
    background-color: #f5cc07;
    border-radius: 50%;
    position: absolute;
    top:68px;
    left: 50px;
    overflow: hidden;
  }
  .drop:before {
    display: block;
    content: '';
    position: absolute;
    width: 17px;
    height: 8px;
    border: 2px solid  #000;
    border-radius: 50%;
    background-color: #665a4c;
    left: .5em;
    top: 25px;
    z-index: 3;
  }
  .drop:after {
    display: block;
    content: '';
    border-radius: 50%;
    border: 2px solid  #000;
    border-top-color:transparent;
    border-bottom-color:transparent;
    border-right-color:transparent;
    min-width: 35px;
    min-height: 35px;
    position: absolute;
    bottom: -4px;
    left: 15px;
    -webkit-transform: rotate(-17deg);
  }
  .drop-line {
    position: absolute;
    left: -140%;
    top:10px;
    min-width: 170px;
    min-height: 170px;
    border: 2px solid  #000;
    border-radius: 50%;
    border-left-color:transparent;
    border-bottom-color:transparent;
    border-right-color:transparent;
  }
  .drop-line:nth-of-type(2) {
    top:18px;
  }
  .body {
    width: 250px;
    height: 280px;
    
    
    position: absolute;
    left: 120px;
    top: 255px;
    z-index: 1;
    
  }
  .trunk {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #0097e3;
    border: 2px solid  #000;
    border-right-color:transparent;
    border-bottom-color:transparent;
  }
  .stomach {
    width: 175px;
    height: 145px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid  #000;
    left:10px;
    top:95px;
    -webkit-transform: rotate(15deg);
    overflow: hidden;
    z-index: 1;
  }
  .pocket {
    position: absolute;
    width: 90%;
    height: 90%;
    border: 2px solid  #000;
    border-radius: 50%;
    top: .5em;
    left: .5em;
  }
  .pocket:after {
    content: '';
    position: absolute;
    left: -25px;
    top: -10px;
    border: 2px solid #000;
    display: inline-block;
    min-width: 169px;
    -webkit-transform: rotate(-10deg);
    min-height: 65px;
    padding: 0.5em;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    border-left-color: transparent;
    background-color: #fff;
  }
  .arm {
    background-color: #0097e3;
  }
  .hand {
    display: block;
    content: '';
    width: 70px;
    height: 70px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
    border: 2px solid  #000;
    top: 175px;
    left: 270px;
  }
  .arm.right:before {
    display: block;
    content: '';
    width: 50px;
    height: 55px;
    background-color: #0097e3;
    position: absolute;
    top:0;
    left: -10px;
    z-index: 3;  
    -webkit-transform: rotate(30deg);
  }
  .arm.right:after {
    display: block;
    content: '';
    width: 40px;
    height: 95px;
    background-color: #0097e3;
    border-radius: 50%;
    border: 2px solid  #000;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    -webkit-transform: rotate(-7deg);
    position: absolute;
    top: 6px;
    left:-12px;
  }
  .arm.right {
    position: absolute;
    width: 70px;
    height: 120px;
    border-radius: 40%;
    right: -55px;
    border: 2px solid  #000;
    background-color: #0097e3;
    top:90px;
    -webkit-transform: rotate(-30deg);
    z-index: 1;
  }
  .arm.left {
    z-index: -1;
    position: absolute;
    border-radius: 50%;
    width: 45px;
    height: 65px;
    top:85px;
    left:-15px;
    border: 2px solid  #000;
    -webkit-transform: rotate(15deg);
  }
  .trunk:before {
    display: block;
    content: '';
    width: 20px;
    height: 20px;
    background-color: #0097e3;
    position: absolute;
    top:85px;
    left:0;
    z-index: 3;
  }
  .trunk:after {
    display: block;
    content: '';
    width: 110px;
    height: 145px;
    background-color: #0097e3;
    position: absolute;
    top: 110px;
    left:1px;
    -webkit-transform: rotate(15deg);
  }
  .footer {
    
  }
  .leg.left {
    width: 120px;
    height: 110px;
    background-color: #0097e3;
    position: absolute;
    border: 2px solid  #000;
    left: 95px;
    top: 430px;
  }
  .foot {
    width: 105px;
    height: 160px;
    background-color: #fff;
    position: absolute;
    border: 2px solid  #000;
    border-radius: 50%;
    z-index: 10;
  }
  .leg.left .foot {
    -webkit-transform:rotate(-30deg);
    left:-4em;
    top: -1.5em; 
  }
  .leg.right + .foot {
    -webkit-transform:rotate(-40deg);
    left:206px;
    top: 450px;
    width: 125px;
    height: 150px;
  }
  .leg.left:before {
    display: block;
    content: '';
    min-width: 45px;
    min-height: 45px;
    border-radius: 50%;
    border: 2px solid  #000;
    position: absolute;
    left:-10px;
    top:-10px;
    background-color: #0097e3;
    border-left-color:transparent;
    border-right-color:transparent;
    border-bottom-color:transparent;
  }
  .leg.left:after {
    display: block;
    content: '';
    min-width: 140px;
    min-height: 140px;
    border-radius: 50%;
    border: 2px solid  #000;
    background-color: #fc3;
    position: absolute;
    top:98px;
    left:8px;
    border-left-color:transparent;
    border-right-color:transparent;
    border-bottom-color:transparent;
    z-index:3;
  }
  .right-padding {
    position: absolute;
    z-index: 8;
    top:455px;
    left: 288px;
  }
  .right-padding:before {
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    background-color: #0097e3;
    border: 2px solid  #000;
    border-left-color:transparent;
    border-right-color:transparent;
    border-bottom-color:transparent;
    position: absolute;
    left:0;
    top:0;
    z-index: -1;
    -webkit-transform:rotate(-15deg);
  }
  .leg.right {
    width: 75px;
    height: 160px;
    border: 2px solid  #000;
    border-radius: 50%;
    background-color: #0097e3;
    position: absolute;
    left: 290px;
    top: 410px;
    -webkit-transform:rotate(20deg);
  }

`
let n = 1
demo1.innerText = string.substr(0,n)
demo2.innerHTML = string.substr(0,n)
let time = 0
const run = ()=>{
  n+=1
  if(n>string.length){
      window.clearInterval(id)
      return
  }
  demo1.innerText = string.substr(0,n)
  demo2.innerHTML = string.substr(0,n)
  demo1.scrollTop = demo1.scrollHeight
}

let id = setInterval(run,time)

btnPause.onclick = ()=>{
  window.clearInterval(id)
}

btnPlay.onclick=()=>{
  id = setInterval(run,time)
}

btnSlow.onclick = ()=>{
  window.clearInterval(id)
  time = 100
  id = setInterval(run,time)
}



btnFast.onclick = ()=>{
  window.clearInterval(id)
  time = 0
  id = setInterval(run,time)
}