const Class10 = () => {
  //   const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const list = [
    { name: "Ajla", userName: "Lomnicanin", id: "123" },
    { name: "B", userName: "Lomnicanin", id: "1" },
    { name: "A", userName: "Lomnicanin", id: "2" },
    { name: "C", userName: "Lomnicanin", id: "3" },
  ];
  //   "false", "null" , "" - se ne prikazuje
  return (
    <div>
      {list.map((item) => {
        return <Avatar key={item.id} name={item.name} />;
        //  <p key={index}>{item}</p>;
      })}
    </div>
  );
};
export default Class10;
// kljucevi omogucavaju da svaki element ima ju nick adentifi - svaki od kljuceva mora da bude poseban
// i na osnovu tik kljucava zna da li se nesto promenilo i gde se on nalazi na DOMException
// reconcionejsn
