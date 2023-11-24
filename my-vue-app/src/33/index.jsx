// import { useContext } from "react";
// import { MyContext } from "./samplecontext";
// import MyComponent from "./mycomponent";

// const Class29 = () => {
//   return <div></div>;
// };
// // const Class29 = () => {
// //   const { test, count, setCount, nesto, setNesto } = useContext(MyContext);
// //   console.log(test);
// //   return (
// //     <div>
// //       {test}
// //       <MyComponent />
// //       <button
// //         style={{ margin: "5px" }}
// //         onClick={() => {
// //           setCount(count + 1);
// //         }}
// //       >
// //         counter
// //       </button>
// //       {count}
// //       {nesto}
// //     </div>
// //   );
// // };
import Tabs from "./Tabs";
import TabsItem from "./TabsItem";

const Class29 = () => {
  return (
    <div>
      <Tabs>
        <TabsItem title="tab 1" tabKey={0} />
        <TabsItem title="tab 2" tabKey={1} />
        <TabsItem title="tab 3" tabKey={2} />
      </Tabs>
    </div>
  );
};
export default Class29;
