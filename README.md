# React Component Lifecycle Example

This repository contains an example React component demonstrating the lifecycle methods and their functionality.

## Features

1. **Component Initialization**:
   - `constructor`: Initializes the component's state with default values.

2. **Mounting Phase**:
   - `componentDidMount`: Updates the state with a new value after a 3-second delay.

3. **Updating Phase**:
   - `getDerivedStateFromProps`: Alerts when this lifecycle method is triggered before the `render` method.
   - `shouldComponentUpdate`: Controls whether the component should update; currently always returns `true`.
   - `getSnapshotBeforeUpdate`: Captures the previous state before the update.
   - `componentDidUpdate`: Updates a specific DOM element with new information.

4. **State Update Buttons**:
   - Two buttons allow toggling the favorite color between "Blue" and "Red".

## How to Use
1. Clone the repository:
   ```bash
   git clone <your-repository-URL>
