import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Movie} from './movieDetails'
import { Genre} from './genre'
import {useEffect, useState} from 'react';

const Loader = () => (
  <div class="divLoader">
    <svg className="svgLoader" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <circle cx="50" cy="50" fill="none" stroke="#fed136" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
  </circle>
</svg>
  </div>
);

function CustomTabs() {
  const [key, setKey] = useState('movie');
  const [movieDetail, setMovieDetail] = useState([])
  const [loading, setLoading] =useState(true)
  useEffect(() => {
    fetch('/movieAPI/').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then((key,value) => {
      setMovieDetail(key,value) 
      setLoading(false)
      
    })
  },[])
  
  return (
    <div className="container-fluid">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="movie" title="List Of Movies">
          {loading ? <Loader /> : <Movie movieDetail={movieDetail}/>}
          
        </Tab>
        <Tab eventKey="Genre" title="Genre">
          <Genre movieDetail={movieDetail}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default CustomTabs;
