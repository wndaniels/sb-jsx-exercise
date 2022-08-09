const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Nathan" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
