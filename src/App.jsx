import { useEffect, useState } from "react";
import RouterLocation, { RouterLoc } from "./Route/Router.jsx"

function App() {
  const [auth,SetAuth] = useState();
  useEffect( ()=>{
      SetAuth( localStorage.getItem("isAuth"));
  },[])
  console.log(auth);

  if(auth == 1){
  return (
    
    <RouterLocation />
  )
  } else{
    return(
      <RouterLoc />
    )
  } 
}

export default App
