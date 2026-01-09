form.addEventListener("submit", () => {
    let content = "";
    transactionList.forEach(transaction => {
        content += `
        <li>${transaction.description}, ${transaction.amount}, ${transaction.category}, ${transaction.date}</li>
        `;
    });
    document.getElementById("list").innerHTML = content;
});