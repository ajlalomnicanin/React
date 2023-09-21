// console.log(dbl)
let accountsTableBody = document.querySelector("#accounts-table-body");
let addAccountsViewBtn = document.querySelector('[href="account-view"]');
// console.log(accountsViewBtn)
let accountsViewBtn = document.querySelector('[href="add-account-view"]');
let accountsView = querySelector("#account-view");
let addAccountsView = querySelector("#add-account-view");

addAccountsViewBtn.addEventListener("click", function (e) {
  e.preventDefault;
  addAccountsView.style.display = "block";
  accountsView.style.display = "none";
});

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
createAccountsTable();
