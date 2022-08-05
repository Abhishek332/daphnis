import { Navbar, Sidebar, CardContainer } from "./components";
import "./App.scss";
import { data } from "./data/itemsData";

const App = () => {


  return (
    <div>
      <Navbar />
      <section className="main">
        <Sidebar />
        <CardContainer data={data} />
      </section>
    </div>
  )
}

export default App