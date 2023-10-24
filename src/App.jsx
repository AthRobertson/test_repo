import Counter from "./pages/Counter"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TodoList from "./pages/TodoList"
import Layout from "./components/Layout"
import Contact from "./pages/Contact"
import ContactDetails from "./pages/ContactDetails"


function App() {

  // adasdasd

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counter />}></Route>
          <Route path="/todo-list" element={<TodoList />}></Route>
          <Route path="/contact" element={<Contact />}>
            
          </Route>
          <Route path="/contact/:name" element={<ContactDetails />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
