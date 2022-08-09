const Person = (props) => {
  let msg;
  if (props.age < 18) {
    msg = <p>You must be 18 to vote.</p>;
  } else {
    msg = <p>Please go vote!</p>;
  }
  return (
    <div>
      <p>Learn some information about this person</p>
      <li>Name: {props.name}</li>
      <li>
        <span>
          Age: {props.age} {msg}
        </span>
      </li>
      <ul>
        Hobbies:
        {props.hobbies.map((t) => (
          <li>{t}</li>
        ))}
      </ul>
    </div>
  );
};
