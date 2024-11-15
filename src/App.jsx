import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRouter } from "./config/routerConfig";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPaths: true,
      }}
    >
      <Routes>
        {publicRouter.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={
              <item.layout>
                <item.component></item.component>
              </item.layout>
            }
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
