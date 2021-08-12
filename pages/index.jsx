import { useStateContext } from "../components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Login from '../components/UI/Login/Login';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  
  useEffect(() => {
    const loggedIn = false;

    if(loggedIn === flase){
      router.push('/create')
    }
  }, []);
  
  return (
    <div>
      <Login />
    </div>
  )
}


