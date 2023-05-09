import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/style/main.css"
import {Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription} from "./pages";


function App  ()  {
  return (
    
    <Router>
        <Routes>
        <Route e path="/overview" element={<Overview/>} />
        <Route e path="/" element={<Tickets/>} />
        <Route e path="/ideas" element={<Ideas/>} />
        <Route e path="/contacts" component={<Contacts/>} />
        <Route e path="/agents" element={<Agents/>} />
        <Route e path="/articles" element={<Articles/>} />
        <Route e path="/settings" element={<Settings/>} />
        <Route e path="/subscription" element={<Subscription/>} />
        </Routes>
      </Router>

  )
  
}


export default App;