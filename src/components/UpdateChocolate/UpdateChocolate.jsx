import React from "react";
import Header from "../Header";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateChocolate = () => {
  const chocolates = useLoaderData();
  const { _id, name, country, category, photo } = chocolates;
  const handleUpdateChocolate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const country = form.country.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const updatedChocolate = { name, country, category, photo };
    fetch(`http://localhost:5000/chocolates/${_id}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedChocolate)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Chocolate Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <>
      <Header></Header>
      <div>
        <h2 className="heading py-3 rounded-lg font-bold text-white mx-auto">
          Chocolate Management System
        </h2>
        <form onSubmit={handleUpdateChocolate}>
          <div className="grid grid-cols-1 justify-center  bg-slate-100 my-4 rounded-xl py-5 ">
            <h2 className="text-xl font-bold">Update Chocolates</h2>
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
                  defaultValue={name}
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
                  defaultValue={country}
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
                  defaultValue={category}
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
                  defaultValue={photo}
                  className="input input-bordered rounded-lg bg-white w-full"
                />
              </label>
            </div>
            <button className="addChocolate py-3 rounded-lg font-bold text-white mx-auto w-1/2 my-4">
              Update Chocolate
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateChocolate;
