// mouting, updating, unmouting

import { useState } from "react";
import { Text } from "./Text";

const App = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  );
};
export default App;
