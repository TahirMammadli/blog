import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import ActivityBar from "./components/ActivityBar/ActivityBar";
import classes from "./App.module.css";
import MyprofileBar from "./components/Myprofile Bar/MyprofileBar";
import PostSectionBar from "./components/PostSectionBar/PostSectionBar";
import SortByDropdown from "./components/SortByDropdown/SortByDropdown";
import FeedBar from "./components/FeedBar/FeedBar";
import SuggestedForYouBar from "./components/SuggestedForYouBar/SuggestedForYouBar";
import YourShortcutsBar from "./components/YourShortcutsBar/YourShortcutsBar";
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
        <div>
          <MyprofileBar />
          <YourShortcutsBar />
        </div>
        <div>
          <PostSectionBar />
          <SortByDropdown />
          <FeedBar />
        </div>
        <div>
          <ActivityBar />
          <SuggestedForYouBar />
        </div>
      </div>
    </>
  );
}

export default App;
