import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <div>Children here....</div>
      </Layout>
    </Router>
  );
};

export default App;
