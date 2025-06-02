import "./App.css";
import Counter from "./labs/03-state-events/Counter";
import TodoLIst from "./labs/03-state-events/TodoList";
import ToggleMessage from "./labs/03-state-events/ToggleMessage";
import UserList from "./labs/03-state-events/UserList";
// import Button from "./code-live/02-props/Button";
// import Card from "./code-live/02-props/Card";
// import ColorHello from "./code-live/02-props/ColorHello";
// import Greeting from "./code-live/02-props/Greeting";
// import UserList from "./code-live/02-props/UserList";
// import Counter from "./code-live/03-state-events/Counter";
// import LiveShowInput from "./code-live/03-state-events/LiveShowInput";
// import AddFunction from "./labs/01-jsx/AddFunction";
// import Hello from "./labs/01-jsx/Hello";

function App() {
  return (
    <>
      {/* <Hello />
      <AddFunction /> */}
      {/* <Greeting name="name" age={12} />
      <ColorHello name="NAME" color="red" /> */}
      {/* <Card title="card" children={<h1>???</h1>} /> */}
      {/* <Card title="card">
        <h2>children</h2>
      </Card> */}
      {/* <Button
        label="label"
        onClick={() => {
          alert("hi");
        }}
      /> */}
      {/* <UserList /> */}
      {/* <Counter />
      <LiveShowInput /> */}
      <Counter />
      <ToggleMessage />
      <TodoLIst />
      <UserList />
    </>
  );
}

export default App;
