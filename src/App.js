import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Technologies from "./components/Technologies";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <main className="wrapper">
        <Provider store={store}>
          <Header />
        </Provider>
        <div className="container">
          <Routes>
            <Route
              path=""
              element={
                <Provider store={store}>
                  <Main />
                </Provider>
              }
            />
            <Route
              path="/projects"
              element={
                <Provider store={store}>
                  <Projects />
                </Provider>
              }
            />
            <Route
              path="/experience"
              element={
                <Provider store={store}>
                  <WorkExperience />
                </Provider>
              }
            />
            <Route
              path="/technologies"
              element={
                <Provider store={store}>
                  <Technologies />
                </Provider>
              }
            />
            <Route
              path="/contacts"
              element={
                <Provider store={store}>
                  <Contacts />
                </Provider>
              }
            />
            <Route path="/projects/:projectTitle" element={<Provider store={store}><Project/></Provider>} />
          </Routes>
        </div>
        <Provider store={store}>
          <Footer />
        </Provider>
      </main>
    </BrowserRouter>
  );
}

export default App;
