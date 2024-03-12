import { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h2>friends:{friends.length}</h2>

      {
        friends.map((friend)=><Friend friend={friend}></Friend> )
      }
      
    </div>
  );
};

export default Friends;
