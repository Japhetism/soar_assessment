import React from "react";
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Settings from "./pages/settings";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />
          <Route
            index
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            index
            path="/setting"
            element={<Settings />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
