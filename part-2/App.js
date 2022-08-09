const App = () => {
  return (
    <div>
      <Tweet
        username="clrblnd"
        name="Nathan"
        date="04-13-2022"
        message="This is a test message."
      />
      <Tweet
        username="afraidtoforget"
        name="George"
        date="06-13-2022"
        message="This is a test message."
      />
      <Tweet
        username="nothingbutsomething"
        name="Peter"
        date="07-13-2022"
        message="This is a test message."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
