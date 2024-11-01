import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [showPassword, setShowPassword] = useState(false);
  const [item, setItem] = useState ('');

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User telah mendaftar"); 
    } catch (error){
      alert (error.message);
    }
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert ("User telah masuk");
    } catch (error) {
      alert (error.message);
    }
  }

  const handleAddItem = async () => {
    if (item) {
      await addDoc(collection(db, "items"), {name:item});
      setItem('');
    }
  }

  return (
    <section className="flex justify-center items-center h-screen bg-white ">
      <div className=" bg-blue-400 p-6 flex-col rounded-lg shadow-xl">
        <h1 className="text-center text-white font-bold mb-4 text-2xl">Firebase add data</h1>
          <div className="flex flex-col">
            <h1 className=" ml-1 mb-2">Email</h1>
              <input className="mb-4 p-2 border rounded-lg" type="email" placeholder="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <h1 className="ml-1 mb-2">Password</h1>
            <div className="flex flex-col">
              <input className="mb-1 p-2 border rounded-lg" type={showPassword ? "text" : "password"} placeholder="" value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <div className="relative">
                <button type="button" className="absolute top-0 right-0 text-sm font-medium text-gray-600" onClick={() => setShowPassword(!showPassword)}> {showPassword ? "Hide password" : "Show password"} </button>
              </div>
            </div>
                <button className=" mt-10 mb-2 p-2 border rounded-2xl hover:bg-green-200" onClick={handleSignup}>Daftar</button> 
                <button className="mb-2 border text-black p-2 rounded-2xl hover:bg-red-200" onClick={handleLogin}>Masuk</button>
          </div>

        <h2 className="text-left text-white font-bold text-xl mb-2 mt-5">Tambah Item</h2>
          <input className="mb-2 p-2 w-full border rounded-lg" type="item" placeholder="item" value={item} onChange={(e)=>setItem(e.target.value)}/>
          <button className="w-32 mt-2 bg-sky-light text-black border p-2 rounded-xl hover:bg-sky-cornflower" onClick={handleAddItem}>Tambah</button>  
    </div>
    </section>
  );
};

export default App;