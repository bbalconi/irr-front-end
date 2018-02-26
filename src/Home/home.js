import React, { Component } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors'
import "./home.css"
import img from "./irr.jpeg";



const style={
  "zIndex":0,
  "top":"50px",
  "backgroundImage": "url(" + img + ")",
  "width":"100%",
  "backgroundSize":"cover"
}

export default class App extends Component {
  render(){
    return(
      <div className="barf">
        <AutoRotatingCarousel
        label="Get started"
        open
        style={style}
      >
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" alt="dude"/>}
          mediaBackgroundStyle={{ backgroundColor: red400 }}
          contentStyle={{ backgroundColor: red600 }}
          title="Demo the App"
          subtitle="Just using this will blow your mind."
        />
        <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" alt="barf"/>}
          mediaBackgroundStyle={{ backgroundColor: blue400 }}
          contentStyle={{ backgroundColor: blue600 }}
          title="Data Intensive"
          subtitle="Data Intensic"
        />
         <Slide
          media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" alt="dude2" />}
          mediaBackgroundStyle={{ backgroundColor: green400 }}
          contentStyle={{ backgroundColor: green600 }}
          title="Remote Control"
          subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars universe."
        />
      </AutoRotatingCarousel>
      </div>
    )
  }
}