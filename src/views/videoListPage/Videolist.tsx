/**
 * Author: Synsoft Global
 * date: 20-07-2019
 * Video List is responsible for list video view
 * Retrieving data from apis
 * importing top level dependencies
 */
import React from "react";
import "./Videolist.css";
import * as api from "../../api/api";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from 'react-select';
import {getYearFromDate} from '../../utility/dateFormater'

/**
 * Defining `IVideo`
 * It will defines the structure of video object
 */
interface IVideo{
  id:number;
  name:string;
  type:string;
  releaseDate:string;
  poster:string;
  description:string;
}

/**
 * Defining `IState`
 * It will defines the structure of state variable
 */
interface IState {
  videolist: IVideo[];
  selectedOption: any;
  filterArray: IVideo[];
}

/**
 * Defining `IProps`
 * It will defines the structure of props of view
 */
interface IProps {
  history: any,
}

// Filter type 
const options = [
  { label: "All", value: "All" },
  { label: "Movie", value: "movie" },
  { label: "Trailer", value: "trailer" },
];
//define `VideoList` class
export default class VideoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleGridClick = this.handleGridClick.bind(this);
    this.state = { 
      videolist: [], 
      selectedOption: { label: "All", value: "All" }, filterArray: []
    };
    // calling apis
    api.getApiCall('videos', '').then(response => {
     const tempArray = response.filter(function (data: IVideo) {
        return data.name != null;
      });
      this.setState({
        videolist: tempArray,
        filterArray: tempArray
      })
    }).catch(error => {
        alert('Error ' + JSON.stringify(error));
      });
  }
  // This will filter data on the basis of selected filter
  filterVideoData = (selectedOption: any) => {
    var tempArray = this.state.videolist;
    if (selectedOption.value === "movie") {
      tempArray = this.state.videolist.filter(function (data: IVideo) {
        return data.type == "movie";
      });
    } else if (selectedOption.value === "trailer") {
      tempArray = this.state.videolist.filter(function (data: IVideo) {
        return data.type == "trailer";
      });
    }

    this.setState({
      selectedOption,
      filterArray: tempArray
    });
  }
  // load details of selected video
  handleGridClick = (data: IVideo) => {
    this.props.history.push({
      pathname: '/videodetail',
      search: '',
      state: { detail: data }
    })
  };
  // render will display the view part.
  render() {
    return (
      <div className="App">
        <div className="fixed-top top_fixed_cls">
          <Container>
            <Row className="parent_top_cls">
              <Col xs={12}> <Select options={options} value={this.state.selectedOption} onChange={this.filterVideoData} /> </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row className="parent_content_cls">
            {this.state.filterArray.map((data: any) =>
              <Col xs={6} key={data.id} >
                <a onClick={this.handleGridClick.bind(this, data)}>
                  <div>
                    <img src={data.poster} alt="logo" />
                    <div className="title_cls">{data.name} ({getYearFromDate(data.releaseDate)})</div>
                    <div className="content_cls">
                      {data.description.slice(0,200)}...</div>
                  </div>
                </a>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}