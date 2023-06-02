import { PureComponent } from "react";

class PureCompo extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="pure">
        
        <button onClick={this.incrementCount}>Increment : <h2>{count}</h2></button>
      </div>
    );
  }
}
export default PureCompo;