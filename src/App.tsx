/**
 * Author : Synsoft Global
 * Date : 20-07-2019
 * Initialize react application
 * Include top level dependencies
*/
import React from 'react';
import logo from './logo.svg';
import './App.css';

import  VideoList from './views/videoListPage/Videolist'

interface props {
  history?: any,
}

export default class App extends React.Component <props> {
  render() {
    return (
      <VideoList history = {this.props.history}/>
    );
  }
}

