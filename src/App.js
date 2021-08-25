import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/home'
import Sidebar from './components/sidebar'
import Header from './components/header'
import { useState } from "react";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return <div className="flex h-screen overflow-hidden">
    <Router>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Switch>
                {/* <Route path="/connectors">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route> */}
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
          </div>
        </main>
      </div>
    </Router>
  </div>
}

export default App;
