import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ChocolateCard from "./components/ChocolateCard/ChocolateCard";
import { useState } from "react";

function App() {
  const loadedChocolates = useLoaderData();
  const [allChocolates, setAllChocolates] = useState(loadedChocolates);
  return (
    <>
      <Header></Header>
      <h2 className="heading py-3 rounded-lg font-bold text-white mx-auto">
        Chocolate Management System
      </h2>
      <div className="flex">
        <Link to={'/addChocolate'}>
        <button className="text-left border-2 border-slate-200 btn btn-ghost">
          + New Chocolate
        </button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full my-3">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
      {allChocolates.map((chocolate) => (
        <ChocolateCard
          key={chocolate._id}
          chocolate={chocolate}
          allChocolates = {allChocolates}
          setAllChocolates={setAllChocolates}
        ></ChocolateCard>
      ))}
    </>
  );
}

export default App;
