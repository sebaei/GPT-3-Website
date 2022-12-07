import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Header,
  What,
  Features,
} from "./containers";
import { CTA, Navbar, Brand } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
