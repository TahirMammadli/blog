import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import ActivityBar from "./components/ActivityBar/ActivityBar";
import classes from "./App.module.css";
import MyprofileBar from "./components/Myprofile Bar/MyprofileBar";
import PostSectionBar from "./components/PostSectionBar/PostSectionBar";
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
      <div className={classes.flexContainer}>
        <MyprofileBar />
        <PostSectionBar />
        <ActivityBar />
      </div>
    </>
  );
}

export default App;
