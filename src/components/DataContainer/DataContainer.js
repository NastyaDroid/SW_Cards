import React from "react";

export default class DataContainer extends React.Component {
    _isMounted = false;
    constructor() {
      super();
  
      this.state = {
        loading: true,
        data: null
      };
    }
  
    componentDidMount() {
        this._isMounted = true;
      fetch(this.props.url)
        .then(res => {
          return res.json();
        })
        .then(data => {
            if(this._isMounted) {
          this.setState({
            loading: false, 
            data,
          });
            }
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
      return this.props.children({
        loading: this.state.loading,
        data: this.state.data
      });
    }
  }