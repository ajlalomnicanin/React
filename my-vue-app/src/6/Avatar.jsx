import "./avatar.css";

const Avatar = (props) => {
  const { name, id } = props;
  return (
    <div className="main">
      <img
        src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"
        alt=""
      />
      <div className="main1">
        <p className="p1">{name}</p>
        <p className="p">{id}</p>
      </div>
    </div>
  );
};
export default Avatar;
