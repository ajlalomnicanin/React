import { useState } from "react";

const Check = () => {
  const [checked, setChecked] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div>
      <label htmlFor="">
        First
        <input
          type="checkbox"
          checked={checked.first}
          onChange={() => {
            if (checked.first) {
              return;
            }
            setChecked({ ...checked, first: !checked.first });
          }}
        />
      </label>
      <label htmlFor="">
        Second
        <input
          type="checkbox"
          checked={checked.second}
          onChange={() => {
            setChecked({ ...checked, second: !checked.second });
          }}
        />
      </label>
      <label htmlFor="">
        Third
        <input
          type="checkbox"
          checked={checked.third}
          onChange={() => {
            setChecked({ ...checked, third: !checked.third });
          }}
        />
      </label>
    </div>
  );
};
export default Check;
