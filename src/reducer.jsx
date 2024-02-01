import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.value };
    case "changeAge":
      return { ...state, age: action.value };
    default:
      throw new Error("Invalid Action Type");
  }
}

export default function Reducer() {
  const [{ name, age }, dispatch] = React.useReducer(reducer, {
    name: "",
    age: "",
  });

  return (
    <div className="mt-10 flex-1 text-black items-center justify-center align-middle flex flex-col">
      <label htmlFor="age">Age:</label>
      <input
        id="age"
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) =>
          dispatch({
            type: "changeAge",
            value: e.target.value,
          })
        }
      />
      <br />
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) =>
          dispatch({
            type: "changeName",
            value: e.target.value,
          })
        }
      />

      <div className="mt-4">
        <p>Current Age: {age}</p>
        <p>Current Name: {name}</p>
      </div>
    </div>
  );
}
