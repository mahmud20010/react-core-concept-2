const Friend = ({ friend }) => {
  console.log(friend);
  const { name, id, username, email } = friend;
  return (
    <div style={{margin:'10px', backgroundColor:'SkyBlue', padding:'15px', borderRadius:'20px', color:'black'}}>
      <h2>id: {id}</h2>
      <h4>Name:{name}</h4>
      <h3>User Name:{username}</h3>
      <p>Email: {email}</p>
    </div>
  );
};

export default Friend;
