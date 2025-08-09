import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import { createContext } from "react";
import { UserContext } from "./UserContext";
export const cartcontext = createContext();
export function Cartcontextprovider(props) {
  const { user } = useContext(UserContext);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    if (user && user.email) {
      const storedCart = localStorage.getItem(`cart_${user.email}`);
      if (storedCart) {
        setcart(JSON.parse(storedCart));
      } else {
        setcart([]);
      }
    } else {
      setcart([]);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.email) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);

  function addcart(pro) {
    let select = cart.find((val) => val.title === pro.title);

    if (!select) {
      Swal.fire({
        title: `you product ( <span className='text-info '> ${pro.title?.split(' ').slice(0, 3).join(' ')} </span> ) added sucessfully `,
        text: "",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      setcart([...cart, { ...pro, amount: 1 }]);
    } else {
      Swal.fire({
        title: `you product ( <span className='text-primary'> ${pro.title?.split(' ').slice(0, 3).join(' ')} </span> ) is alreadyadded  `,
        text: "",
        icon: "info",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  function deletepro(pro) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won\'t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        let newarr = cart.filter((val) => val.title !== pro.title);

        setcart(newarr);
      }
    });
  }

  function plus(pro) {
    ++pro.amount;
    setcart([...cart]);
  }

  function minus(pro) {
    if (pro.amount > 0) {
      --pro.amount;
      setcart([...cart]);
    } else {
      deletepro(pro);
    }
  }

  return (
    <cartcontext.Provider value={{ cart, addcart, deletepro, plus, minus }}>
      {props.children}
    </cartcontext.Provider>
  );
}