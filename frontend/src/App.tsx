import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery(
    "fetchPlayers",
    () => axios("http://localhost:3000/players"),
    {
      onSuccess: (data: any) => console.log(data),
    }
  );

  return (
    <div className="App">
      <img src={`data:image/png;base64,${data?.data[0].profilePicture}`} />
    </div>
  );
}

export default App;
