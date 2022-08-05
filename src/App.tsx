import { Navbar, Search, Sidebar, CardContainer } from "./components";
import "./App.scss";
import { data } from "./data/itemsData";

const App = () => {


  return (
    <div className="main-container">
      <Navbar />
      <Search />
      <section className="main">
        <Sidebar />
        <CardContainer data={data} />
      </section>
    </div>
  )
}

export default App