// import { useState } from "react";

// const Tabs = () => {
//   const [active, setActive] = useState(1);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           if (active === 1) {
//             setActive(0);
//           } else {
//             setActive(1);
//           }
//         }}
//       >
//         Tab 1
//       </button>
//       {active === 1 && (
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea
//           minus placeat modi. Voluptate excepturi ipsam provident error earum
//           quo. Sequi id totam odio officiis hic modi labore vitae magnam.
//         </p>
//       )}
//       <button
//         onClick={() => {
//           if (active === 1) {
//             setActive(0);
//           } else {
//             setActive(2);
//           }
//         }}
//       >
//         Tab 2
//       </button>
//       {active === 2 && (
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea
//           minus placeat modi. Voluptate excepturi ipsam provident error earum
//           quo. Sequi id totam odio
//           officiisssssssssssssssssssssssssssssssssssssssssssssssssssssssssss hic
//           modi labore vitae magnam.
//         </p>
//       )}
//       <button
//         onClick={() => {
//           if (active === 1) {
//             setActive(0);
//           } else {
//             setActive(3);
//           }
//         }}
//       >
//         Tab 3
//       </button>
//       {active === 3 && (
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ea
//           minus placeat modi. Voluptate excepturi ipsam provident error earum
//           quo. Sequi id totamaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa odio
//           officiis hic modi labore vitae magnam.
//         </p>
//       )}
//     </div>
//   );
// };
// export default Tabs;

import { useState } from "react";

const Tabs = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <div style={{ display: "flex", gap: "30px" }}>
        <p onClick={() => setActive(1)}>Tab 1</p>
        <p onClick={() => setActive(2)}>Tab 2</p>
        <p onClick={() => setActive(3)}>Tab 3</p>
      </div>
      {active === 1 && <p>This is first tab content</p>}
      {active === 2 && <p>This is second tab content</p>}
      {active === 3 && <p>This is third tab content</p>}
    </div>
  );
};

export default Tabs;
