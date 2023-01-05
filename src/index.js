import React from "react";

const [test, settest] = useState("test var");

const App = () => <div>{`Today's date is ${Date()} ${test}`}</div>;

export default App;
