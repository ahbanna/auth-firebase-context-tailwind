import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>This is Home page</h2>
      <p>{user && user.displayName}</p>
    </div>
  );
};

export default Home;
