const App = () => {
  return (
    <div>
      <Person
        name="Nathan"
        age={32}
        hobbies={["Spend time with family", "Play guitar", "Coding"]}
      />
      <Person
        name="Amanda"
        age={28}
        hobbies={[
          "Spend time with family",
          "Eat Chocolate Covered Strawberries",
          "Watch Big Brother",
        ]}
      />
      <Person
        name="Elijah"
        age={2}
        hobbies={["Spend time with Mommy", "Spend time with Daddy", "Eat"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
