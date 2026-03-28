import "./App.css";
import Navbar from "./components/Navbar";
import Models from "./components/Models";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { Suspense, useState } from "react";
import Cart from "./components/Cart";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();
function App() {
  const [activeTab, setActiveTab] = useState("Models");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mt-20">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "Models" ? "bg-red-500 font-semibold" : ""}`}
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("Models")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${activeTab === "Cart" ? "bg-red-500 font-semibold" : ""}`}
          aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[50vh]">
            <span className="loading loading-spinner text-error"></span>
          </div>
        }
      >
        {activeTab === "Models" && (
          <Models
            modelPromise={modelPromise}
            carts={carts}
            setCarts={setCarts}
          ></Models>
        )}
        {activeTab === "Cart" && (
          <Cart carts={carts} setCarts={setCarts}></Cart>
        )}
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
