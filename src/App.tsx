import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Hello ${username}`)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={username}
          onChange={onChange}
          type="text"
          placeholder="Username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
