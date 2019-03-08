import React, { Component } from 'react';
import AllPostContainer from './containers/AllPostContainer';
import PostFormContainer from './containers/PostFormContainer';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div className="App" style={divStyle}>
        <h1 style={h1Style}>
          QUẢN LÍ SẢN PHẨM
        </h1>
        <PostFormContainer />
        <AllPostContainer />
      </div>
    );
  }
}
//style----------------------------------------
const h1Style={
  color: 'pink',
  fontFamily:'UTM',
  backgroundColor:'grey'
};
const divStyle={
  textAlign:'center'
}
export default App;