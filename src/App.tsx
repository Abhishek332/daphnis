import { Navbar, CardContainer } from "./components";
import "./App.scss";
import { data } from "./data/itemsData";

const App = () => {


  return (
    <div>
      <Navbar />
      <section className="main">
        <CardContainer data={data} />
      </section>
    </div>
  )
}

export default App