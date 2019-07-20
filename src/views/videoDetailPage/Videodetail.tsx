/**
 * Author: Synsoft Global
 * date: 20-07-2019
 * Video detail view
 * Retrieving data from the previous view
 * importing top level dependencies
 */
import React from "react";
import ReactPlayer from 'react-player'
import "./Videodetail.css";
import * as api from "../../api/api";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import back from './back-btn.png'
import {getYearFromDate} from '../../utility/dateFormater'


/**
 * Defining `IState`
 * It will defines the structure of state variable
 */

interface IState {
  videoData: any,
  videoUrl: string
}

/**
 * Defining `IProps`
 * It will defines the structure of props of view
 */
interface IProps {
  location?: any,
  history: any
} 

// define `VideoDetail` class
export default class VideoDetail extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { videoData: {}, videoUrl: '' }
  }

  componentDidMount() {
    this.setState({
      videoData: this.props.location.state.detail
    })
    console.log(this.props.location.state.detail
    )
    const videoId = 'videoId=' + this.props.location.state.detail.id
    api.getApiCall('streams', videoId).then(response => {
      if (response.count != 0) {
        this.setState({
          videoUrl: response[0].link,
        })
      }
    })
      .catch(error => {
        alert('Error ' + JSON.stringify(error));
      });
  }
  // This will push back to previous view
  back = () => {
     this.props.history.goBack()
  }
  // render will display the view part.
  render() {
    return (
      <div className="App">
        <div className= "fixed-top detail_top"> 
          <a onClick = {this.back}> <img src={back}/> Video List </a>
        </div>
          
        <Container className="detail_box_container">
          <Row className="detail_box">
              <Col xs={12}  >
              <img className="poster" src={this.state.videoData.poster} alt="logo" />
              </Col>
              <Col xs={12}  >
              <h1>{this.state.videoData.name} ({getYearFromDate(this.state.videoData.releaseDate)})</h1>
              </Col>
              <Col xs={12}  >
              <div className="desc-content">{this.state.videoData.description}</div>
              </Col>
          </Row>
          <Row className="video_cls">
            <ReactPlayer url={this.state.videoUrl}  controls = {true} />
          </Row>
        </Container>
        </div>
    );
  }
}