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

