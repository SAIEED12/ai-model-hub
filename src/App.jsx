import "./App.css";
import Navbar from "./components/Navbar";
import Models from "./components/Models";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { Suspense, useState } from "react";
import Cart from "./components/Cart";

const getModels = async () => {
  const res = await fetch("/public/models.json");
  return res.json();
};

function App() {
  const modelPromise = getModels();
  const [activeTab, setActiveTab] = useState("Models")
  const [carts, setCarts] = useState([])

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
          onClick={()=> setActiveTab("Models")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Cart"
          onClick={()=> setActiveTab("Cart")}
          
        />
      </div>

      <Suspense>
        {activeTab === "Models" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Models>}
        {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
