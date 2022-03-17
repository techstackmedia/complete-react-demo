// const Pet = () => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, "Luna"),
//       React.createElement("h2", {}, "Dog"),
//       React.createElement("h2", {}, "Havanese"),
//     ]);
//   };
  
//   const App = () => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet),
//       React.createElement(Pet),
//       React.createElement(Pet),
//     ]);
//   };
  
//   ReactDOM.render(React.createElement(App), document.getElementById("root"));


// The one way data flow
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

/*
<body>
    <div id="root">
    <div>
        <h1>Adopt Me!</h1>
        <div>
            <h1>Luna</h1>
            <h2>Dog</h2>
            <h2>Havanese</h2>
        </div>
        <div>
            <h1>Pepper</h1>
            <h2>Bird</h2>
            <h2>Cockatiel</h2>
        </div>
        <div>
            <h1>Doink</h1>
            <h2>Cat</h2>
            <h2>Mix</h2>
        </div>
    </div>
</div>
</body>
*/