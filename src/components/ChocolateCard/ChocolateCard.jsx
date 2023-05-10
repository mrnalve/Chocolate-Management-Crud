import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ChocolateCard = ({ chocolate, allChocolates, setAllChocolates }) => {
  const { _id, name, country, category, photo } = chocolate;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = allChocolates.filter(
                (chocolate) => chocolate._id !== _id
              );
              setAllChocolates(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <table className="table w-full">
        <tbody>
          <tr>
            <td className="border-b-2 w-1/5">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={photo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td className="border-b-2 w-1/5">{name}</td>
            <td className="border-b-2 w-1/5">{country}</td>
            <td className="border-b-2 w-1/5">{category}</td>
            <td className="border-b-2 w-1/5">
              <Link to={`/updateChocolate/${_id}`}>
                <button className="btn btn-xs mx-1">Edit</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-xs mx-1"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ChocolateCard;
