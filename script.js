let deliveries;
// retrieving of deliveries
function getDeliveries() {
  deliveries = JSON.parse(localStorage.getItem("deliveries"));
  if (deliveries == null) deliveries = [];

  console.log(deliveries);
}

const recipientName = document.getElementById("name");
const number = document.getElementById("number");
const address = document.getElementById("address");

const addButton = document.querySelector("#add-btn");

// adding a delivery
addButton.addEventListener("click", () => {
  getDeliveries();

  const delivery = {
    recipientName: recipientName.value,
    number: number.value,
    address: address.value,
  };

  console.log(delivery);

  deliveries.push(delivery);

  localStorage.setItem("deliveries", JSON.stringify(deliveries));

  recipientName.value = "";
  number.value = "";
  address.value = "";
});
