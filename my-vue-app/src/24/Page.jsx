import Avatar from "./Avatar";
import Baner from "./Baner";
import Button from "./Button";
import Devider from "./Devider";
import Text from "./Text";

const Page = () => {
  return (
    <div>
      <div>
        <Baner image="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg" />
      </div>
      <div>
        <Avatar img="" />
        <Text type="title" text1="Naslov" />
        <Devider hr />
        <Text type="p"  text2="lorem" />
      </div>
      <div>
        <Text  type="p"  text2="lorem" />
        <Button title="Learn more" />
      </div>
    </div>
  );
};

// const Page = () => {
//   return (
//     <div>
//       <img src="" alt="" />
//       <div
//         style={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",

//         }}
//       >
//         <div style={{ width: 200 }}>
//           <img src="" alt="" />
//           <h3>Phoebe Caulfield</h3>
//           <hr
//             style={{
//               width: 50,
//               border: "2px solid blue",
//               borderRadius: "2px",
//               marginRight: "0px 60px",
//             }}
//           />
//           <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
//             voluptatem?
//           </p>
//         </div>
//         <div style={{ width: 500 }}>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
//             libero minus similique ipsum aliquam, praesentium nostrum ullam
//             cumque facere laboriosam nemo assumenda odio saepe mollitia,
//             corporis iusto dolores animi, iste inventore totam! Deleniti tenetur
//             a officia. Modi, excepturi id dignissimos consequatur autem
//             similique, accusantium eaque non blanditiis explicabo rerum
//             praesentium!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Page;
