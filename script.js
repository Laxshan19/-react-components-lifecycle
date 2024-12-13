

class Lifecycle extends React.Component {
  constructor() {
    super();
    // Initializing state
    this.state = { 
      value: "Welcome Guys...",
      color: "Red" 
    };
  }

  // Invoked right before calling the render method
  static getDerivedStateFromProps(props, state) {
    console.log(
      "getDerivedStateFromProps: This is invoked before rendering. Current state:",
      state
    );
    return null; // No changes to state
  }

  // Called after the component is mounted (added to the DOM)
  componentDidMount() {
    console.log("componentDidMount: Component has mounted.");
    // Simulate an API call or delay
    setTimeout(() => {
      this.setState({ value: "Good Morning..." });
    }, 3000);
  }

  // Determines if the component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate: Should component update?",
      nextState
    );
    return true; // Always allow updates
  }

  // Captures information before DOM updates
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "getSnapshotBeforeUpdate: Snapshot before update. Previous state:",
      prevState
    );
    return prevState.color; // Return snapshot (optional)
  }

  // Called after the component updates
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component updated.");
    if (snapshot) {
      document.getElementById("snapshotInfo").textContent =
        "Before update, the favorite color was " + snapshot;
    }
  }

  // Event handlers to change state
  changeToBlue = () => {
    this.setState({ color: "Blue" });
  };

  changeToRed = () => {
    this.setState({ color: "Red" });
  };

  render() {
    console.log("render: Rendering the component.");
    return (
      <div>
        <h1>{this.state.value}</h1>
        <p>My favorite color is <strong>{this.state.color}</strong>.</p>
        <button onClick={this.changeToBlue}>Change to Blue</button>
        <button onClick={this.changeToRed}>Change to Red</button>
        <p id="snapshotInfo"></p>
        <p id="updateInfo">Component lifecycle demonstration.</p>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Lifecycle />);
