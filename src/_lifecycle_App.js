import React from 'react';

// state를 사용하기 위해 component를 사용해야 한다.
class App extends React.Component {
  // state이 변경 되면 리액트가 다시렌더링 해준다
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log('construct');
    console.log(props);
  }

  add = () => {
    console.log('add');
    //this.setState({ //count: this.state.count + 1 });
      this.setState(current => ({count:current.count + 1}));
  };

  minus = () => {
    console.log('minus');
    // this.setState({
    //   count: this.state.count - 1
    // })
      this.setState(current => ({count:current.count - 1}));
  };

  componentDidMount() {
    console.log("component rendered");
  }

  render() {
    console.log('render');
    return <div> 
      The number is: {this.state.count}
      <button onClick={this.add}>Add</button>{/* 함수에 ()가 들어가면 즉시 호출로 인식 됨*/}
      <button onClick={this.minus}>Minus</button>
      </div>;
  }
}

export default App;