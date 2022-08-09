const Tweet = (props) => {
  return (
    <div>
      <h3>{props.username}</h3>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.message}</p>
    </div>
  );
};
