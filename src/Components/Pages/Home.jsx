import { useState } from "react";
import Login from "../Modal/Login";
import Navbar from "../Navbar/Navbar";


const Home = () => {

  const [openModal, setModal] = useState(false)
  const toggleModal = () => {
      console.log("Modal toggled, new state:", !openModal);

     setModal(!openModal) 
  }
  

  return (
    <div>
      <Navbar  toggleModal ={toggleModal} />
      <Login toggleModal ={toggleModal} status = {openModal} />


    </div>
  )
}
export default Home;