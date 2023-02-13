
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import React from 'react';
import './App.css';
import { db } from './firebase-config'

function App() {
  const [users, setUsers] = React.useState([])
  const usersCollectionRef = collection(db, "usuarios")


  const updateUser = async (id) =>{
    const newData = {nombre_empresa: "vicio csdsds"}
    const userDoc = doc(db, "usuarios", "rJWRaV12Yd3J6do01Hcz")
    await updateDoc(userDoc, newData)
  }
  const deleteUser = async () =>{
    const userDoc = doc(db, "usuarios", "rJWRaV12Yd3J6do01Hcz")
    await deleteDoc(userDoc, {nombre_empresa: "Plataforma 11", usuario: "dperez" })
  }
  const addUser = async () =>{
    await addDoc(usersCollectionRef, )
  }
  React.useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      data.docs.forEach(x => { console.log(x.data())})
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()

  }, [])

  return (<div className="App">{users.map((user) => {
    return (
      <div key={user.id}>
        {" "}
        <h1>Name: {user.nombre_empresa}</h1>
        <h1>Name: {user.usuario}</h1>
      </div>)
  })}</div>)

}

export default App;
