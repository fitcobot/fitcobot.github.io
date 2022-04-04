import logo from './logo.svg';
import './App.css';
import eth_logo from './eth_logo.svg'
import github_logo from './github.svg'
import linked_in_logo from './linkedin_logo.svg'
import uniswap_logo from './uniswap_logo.svg'
import CADAS_logo from './CADAS.svg'
import warning from "./warning.svg"
import proto_coin from './proto-coin.png'
import test_model from './ProtoCoinTest.glb'
import video_file from './ProtoCoinLogo.webm'
import { useEffect, useRef, useState, createRef } from "react";
import nandith_picture from "./nnarayan.png"
import mirror from "./mirror.svg"
import lock from "./lock.svg"
import fire from "./fire.svg"
import checkmark from "./checkmark.svg"
import $ from 'jquery';
import fade_script from "./fade.js"
import gb from "./gb.svg"
import es from "./es.svg"
import SystemDiagram from "./SystemDiagram.png"
import SystemDiagram2 from "./SystemDiagram2.png"
import claw from "./claw.jpg"
import rviz from "./rviz.png"
import VisualRecognitionFlowchart from "./VisualRecognitionFlowchart1.png"

import SpeechRecognitionFlowchart from "./SpeechRecognitionFlowchart.png"

function App() {

  
  const canvasRef = useRef < HTMLCanvasElement > (null);

  var myRef = createRef();
  const prevScrollY = useRef(0);
  var state = {scrollTop: 0}

  var address = "0x50e3537E82d26576fA68605DAE6aBddc1AB1304B";

 

  const english_site = <div class="main_layout" lang="en">
        

  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
  </head>
  
  <head><script src="https://tarptaeya.github.io/repo-card/repo-card.js"></script></head>

  <div class="header_container">
    <div  class="general_side_bar">

      <div class="general_header" onClick={() => { scrollTo("AR3 COBOT Arm") }} href="#AR3 COBOT"><p>Arm Assembly</p></div>
      <div class="general_header" onClick={() => { scrollTo("ROS2") }} ><p>ROS2</p></div>
      <div class="general_header" onClick={() => { scrollTo("speech_recognition") }} ><p>Speech Recognition</p></div>
      <div class="general_header" onClick={() => { scrollTo("emg") }} ><p>EMG</p></div>
      <div class="general_header" onClick={() => { scrollTo("visual_recognition") }} ><p>Visual Recognition</p></div>
      <div class="general_header" onClick={() => { scrollTo("gallery") }} ><p>Gallery</p></div>
      <div class="general_header" onClick={() => { scrollTo("about_us") }} ><p>About Us</p></div>
      <div class="general_header" onClick={() => { scrollTo("contact") }} ><p>Contact</p></div>

      {/* <div class="general_header flag_bar" >           
      <div class="flag_bar_entry" onClick={()=> lang_switch("EN")} ><img src={gb} /> <p>EN</p></div>
      <div class="flag_bar_entry" onClick={()=> lang_switch("ES")} ><img src={es} /> <p>ES</p></div>
      </div> */}
    

    </div>


  </div>
  <div class="container">

    <div id="protocoin" class="title">COBOT ARM</div>


<div >

<small>The purpose of the COBOT capstone project is to develop a user-friendly, accessible robot system to aid any person in performing everyday tasks.</small>

</div>

    
    <div id="AR3 Arm"class="contact">
      <h2>Fall 2022</h2>
    </div>

    <img src={SystemDiagram}></img>
    <img src={SystemDiagram2}></img>
    <img width="50%"src={claw}></img>
    <img src={rviz}></img>
    <div id="AR3 Arm"class="contact">
      <h1>AR3 Cobot Arm</h1>
    </div>
    <div  id="ROS2" class="contact">
      <h1>ROS2</h1>
    </div>
    <div id="EMG"class="contact">
      <h1>EMG</h1>
    </div>


    <div id="speech_recognition" class="contact speech_recognition">
    <h1 id="contact">Speech Recognition </h1>
    <p>A natural solution for an easy-to-use user interface for issuing commands to the robot is speech recognition. The initial goal was therefore to use speech recognition to identify and then execute multiple possible commands.</p>
    <img width={"50%"} src={SpeechRecognitionFlowchart}></img>

    <div id="visual_recognition" class="contact visual_recognition">
    <h1 id="contact">Visual Recognition </h1>
    <p>

    To be able to detect hand gestures (principally stop, thumbs up, and thumbs down) in order to signal to the COBOT system that an action should be taken, a visual recognition subsystem is needed.
    In addition, this subsystem will have the COBOT be able to detect objects so that it can pick them up.
    </p>

    <b>Technologies</b>

    <p>LabelStudio, Python, YOLOV4 Tiny, Google Colab, Pico Flexx, Pico Flexx Python SDK, C++, Darknet, Make</p>

    <b>Python Libraries</b>

    <p>OpenCV, Matplotlib, Darknet interface libraries</p>
    <img width={"50%"} src={VisualRecognitionFlowchart}></img>
    </div>

    
    </div>


    <div id="about_us" class="about_us_wrapper">
      <h1>About Us</h1>
      <div class="about_us">
      <div id="nn" class="profile_card" >
          <div class="name_title">
            <h3>Wilner Viana</h3>
          </div>
          <div class="profile_picture">
            <img  height="100px"></img>
          </div>

          <div class="bio_plus_web_links">
            <h2>Bio</h2>
            Welcome! This project was created for so and so.  Please find my résumé linked below.





            <div class="horizontal_center_flex">
              <div class="web_links_splash">
                <h2>Web Links</h2>
                <div class="web_links_img">
                  <img onClick={() => { redirect("https://github.com/Nandith-Narayan") }} src={github_logo} ></img>
                  <img onClick={() => { redirect("https://www.linkedin.com/in/nandith-narayan-553084202/") }} src={linked_in_logo} ></img>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="basic_profile_credentials">
            <h4>Engineer at Thales</h4>
            <h4>Electrical Engineering 2022</h4>
          </div>


        </div>

        {/* <div id="da" class="profile_card" >
          <div class="name_title">
            <h3>David Nieves Acarón</h3>
          </div>
          <div class="profile_picture">
            <img src="https://i1.rgstatic.net/ii/profile.image/860436664692737-1582155495130_Q512/David-Nieves-Acaron.jpg" height="100px"></img>
          </div>

          <div class="bio_plus_web_links">
            <h2>Bio</h2>




            <div class="horizontal_center_flex">
              <div class="web_links_splash">
                <h2>Web Links</h2>
                <div class="web_links_img">
                  <img onClick={() => { redirect("https://github.com/DavidEnriqueNieves") }} src={github_logo} ></img>
                  <img onClick={() => { redirect("https://www.linkedin.com/in/david-enrique-nieves/") }} src={linked_in_logo} ></img>
                  <img onClick={() => { redirect("https://cadas.fit.edu") }} src={CADAS_logo} ></img>
                </div>
              </div>
            </div>
          </div>

          <div class="basic_profile_credentials">
            <h4>Research Assistant at Florida Institute of Technology</h4>
            <h4>Computer Engineering 2022</h4>
          </div>


        </div> */}
      </div>
    </div>
  </div>

  <div id="Gallery" class="contact">
      <h1>Gallery</h1>
    </div>


  <div class="footer_container">
    <div class="contact">
      <div class="attributions">
        <h1 id="contact">Contact </h1>
        <p>ResumeCoin@gmail.com </p>
        <h3>Attributions</h3>
        <p>We would like to credit the original developer of the AR3...</p>
        <p>Repo card generated using https://gh-card.dev/</p>
        <p>Annin, Chris (n.d.). Model AR3 Robot Manual. AR Annin Robotics. Retrieved from:
        DOWNLOADS & MANUALS | Annin Robotics 
        </p>
      </div>
    </div>

    


  </div>



</div>;



  
  const [lang_site_content, setValue] = useState(
    english_site); 

  function redirect(link) {
    var win = window.open(link, "_blank");
    win.focus();
  }

  function scrollTo(target) {
    document.getElementById(target).scrollIntoView();
  }

  function lang_switch(target) {
    console.log("LANG SWITCH IN PLACE");
    switch(target)
    {
      case "EN":
        setValue(english_site);
        break;
      case "ES":
        break;
    }

    //  setValue();
  }

  function onLinkClick(name) {
    document.getElementsByTagName(name).scrollIntoView();
  }


  
  return (

  lang_site_content
    
  );
}

export default App;


