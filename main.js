// console.log(dbl)
let accountsTableBody = document.querySelector("#accounts-table-body");


+createAccountsTable();
function createAccountsTable() {
  let htmlAccount = "";
  for (let i = 0; i < dbl.length; i++) {
    const account = dbl[i];
    htmlAccount += `<tr>
    <th>${account.id}</th>
    <th>${account.name}</th>
    <th>${account.lastname}</th>
    <th>${account.email}</th>
    <th>${account.phone}</th>
  </tr>`;
  }
  console.log(htmlAccount);
  accountsTableBody.innerHTML = htmlAccount;
}
