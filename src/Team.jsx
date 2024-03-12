import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);

  const addTeam = () => {
    // const newTeam = team+1; or-->
    setTeam(team + 1);
  };

  const removeTeam = () => {
    if (team === 11) {
      return;
    } else {
      const removeNew = team - 1;
      setTeam(removeNew);
    }
  };

  const TeamStyle = {
    margin: "10px",
    padding: "10px",
    backgroundColor: "tomato",
    borderRadius: "15px",
  };
  return (
    <div style={TeamStyle}>
      <h2>Players: {team}</h2>
      <button onClick={addTeam}>Add</button>
      <button onClick={removeTeam}>Remove</button>
    </div>
  );
};

export default Team;
