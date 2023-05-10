import React from "react";
import Header from "./Header";
import "./AddChocolate.css";
import Swal from "sweetalert2";

const AddChocolate = () => {
  const handleAddChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const newChocolate = { name, country, category, photo };
    console.log(newChocolate);
    fetch("http://localhost:5000/chocolates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newChocolate),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Chocolate Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset()
      });
  };
  return (
    <>
      <Header></Header>
      <div>
        <h2 className="heading py-3 rounded-lg font-bold text-white mx-auto">
          Chocolate Management System
        </h2>
        <form onSubmit={handleAddChocolate}>
          <div className="grid grid-cols-1 justify-center  bg-slate-100 my-4 rounded-xl py-5 ">
          <h2 className="text-xl font-bold">New Chocolates</h2>
          <p className="text-slate-500">Use the below form to create a new product</p>
            {/* chocolate name */}
            <div className="form-control w-1/2 mx-auto my-2">
              <label className="label">
                <span className="label-text font-medium text-xl">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Chocolate Name"
                  name="name"
                  required
                  className="input input-bordered rounded-lg bg-white w-full"
                />
              </label>
            </div>
            {/* chocolate country */}
            <div className="form-control w-1/2 mx-auto my-1">
              <label className="label">
                <span className="label-text font-medium text-xl">Country</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  required
                  className="input input-bordered rounded-lg bg-white w-full"
                />
              </label>
            </div>
            {/* chocolate category */}
            <div className="form-control w-1/2 mx-auto my-1">
              <label className="label">
                <span className="label-text font-medium text-xl">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  required
                  className="input input-bordered rounded-lg bg-white w-full"
                />
              </label>
            </div>
            {/* chocolate image */}
            <div className="form-control w-1/2 mx-auto my-1">
              <label className="label">
                <span className="label-text font-medium text-xl">
                  Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Photo"
                  name="photo"
                  required
                  className="input input-bordered rounded-lg bg-white w-full"
                />
              </label>
            </div>
            <button className="addChocolate py-3 rounded-lg font-bold text-white mx-auto w-1/2 my-4">
              Add Chocolate
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddChocolate;
