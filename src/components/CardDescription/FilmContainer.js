import React from "react";

export default class DataContainer extends React.Component {
    constructor() {
      super();
  
      this.state = {
        loading: true,
        data: null
      };
    }
  
    componentDidMount() {
      fetch(this.props.url)
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({
            loading: false, 
            data,
          });
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  
    render() {
      return this.props.children({
        loading: this.state.loading,
        data: this.state.data
      });
    }
  }