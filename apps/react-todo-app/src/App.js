import todoCore from "todo-core";

function App() {
  return <pre>{JSON.stringify(todoCore, null, 2)}</pre>;
}

export default App;
