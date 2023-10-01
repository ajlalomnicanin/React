

const SimpleForm = ({ defaultInput, ButtonTittle, onComplit }) => {
  const complete = (e: Event) => {
    e.preventDefault();
    console.log("clicked");
  };
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <input defaultInput={defaultInput} onChange={onChange} />
      <button onClick={onComplete}>{ButtonTittle}</button>
    </div>
  );
};
export default SimpleForm;
