const form = document.getElementById("form");
const textInput = document.getElementById("name");
const numberInput = document.getElementById("amount");
const selectInput = document.getElementById("select");
const dateInput = document.getElementById("date");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (numberInput.value < 0) {
    document.getElementById("status").classList.remove("success");
    document.getElementById("status").classList.add("error");
    document.getElementById("status").innerText =
      "⚠️ Invalid amount, please check before submitting again ⚠️";
  } else {
    document.getElementById("status").classList.remove("error");
    document.getElementById("status").classList.add("success");
    document.getElementById("status").innerText =
      "Successfully submitted the new transaction";
    setTimeout(() => {
      document.getElementById("status").innerText = "";
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
    console.log("Transaction List: ", transactionList);
  }
});
