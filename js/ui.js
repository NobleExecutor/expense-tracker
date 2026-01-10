const table = document.getElementById("list");
const form = document.getElementById("form");
const textInput = document.getElementById("name");
const numberInput = document.getElementById("amount");
const selectInput = document.getElementById("select");
const dateInput = document.getElementById("date");
const statusP = document.getElementById("status");

let transactionList = [];

function renderTransactions(transactionList) {
  let content =
    "<tr><th>Description</th><th>Amount</th><th>Category</th><th>Date</th></tr>";
  transactionList.forEach((transaction) => {
    content += `
    <tr>
        <td>${transaction.description}</td>
        <td>${transaction.amount}€</td>
        <td>${transaction.category}</td>
        <td>${transaction.date}</td>
    </tr>
    `;
  });
  table.innerHTML = content;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (numberInput.value < 0) {
    statusP.classList.remove("success");
    statusP.classList.add("error");
    statusP.innerText =
      "⚠️ Invalid amount, please check before submitting again ⚠️";
  } else {
    statusP.classList.remove("error");
    statusP.classList.add("success");
    statusP.innerText = "Successfully submitted the new transaction";
    setTimeout(() => {
      statusP.innerText = "";
    }, 3000);

    const transactionInfo = {
      description: textInput.value,
      amount: numberInput.value,
      category: selectInput.value,
      date: dateInput.value,
    };

    form.reset();
    console.log("Transaction Info: ", transactionInfo);
    transactionList.push(transactionInfo);
    renderTransactions(transactionList);
    console.log("Transaction List: ", transactionList);
  }
});