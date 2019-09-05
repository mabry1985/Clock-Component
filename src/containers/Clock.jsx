import React from 'react';
import ReactDOM from 'react-dom';

export class Clock extends React.Component {

  styles = {
    color: 'red',
  };

  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      color: [20, 30, 54],
    };
    this.formatColor = this.formatColor.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.applyColor(),
      1000,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      color: this.chooseColor(),
    });
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.getElementById('clock').style.color = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }

    return random;
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  render() {
    return (
      <div>
        <h2
          id="clock"
          style={this.styles}>
          {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

export default Clock;
