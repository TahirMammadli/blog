import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import classes from "./App.module.css";
import MyprofileBar from "./components/Myprofile Bar/MyprofileBar";
function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/"); // Replace with your Golang server URL
      const data = await response.text();
      console.log(data); // This will log "Hello, World!" to the console
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <MyprofileBar />
    </>
  );
}

export default App;
