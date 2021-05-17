import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Movie} from './movieDetails'
import { Genre} from './genre'
import {useEffect, useState} from 'react';



function CustomTabs() {
  const [key, setKey] = useState('movie');
  const [TabValue, setTabValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [movieDetail, setMovieDetail] = useState([])
  useEffect(() => {
    fetch('/testAPI/').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then((key,value) => setMovieDetail(key,value))
  },[])
  
  return (
    <div className="container-fluid">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab 
          eventKey="movie" 
          title="List Of Movies"
          value={TabValue}
          onChange={handleChange}
        >
          <Movie movieDetail={movieDetail}/>
        </Tab>
        <Tab eventKey="Genre" title="Genre">
          <Genre movieDetail={movieDetail}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default CustomTabs;
