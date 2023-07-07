import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/userSlice";
import { Header } from "./components/header";
import { Email } from "./components/Email";
import "./App.css";
import { UserInterface } from "./interfaces/userInterface";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data as UserInterface)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Email />
    </div>
  );
}

export default App;
