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

  renderDeliveries();
});

const deliveryTable = document.getElementById("delivery-tbl");

function renderDeliveries() {
  deliveryTable.innerHTML = "";

  deliveries.map((delivery) => {
    let tr = "<tr>";
    tr += "<td>" + delivery.recipientName + "</td>";
    tr += "<td>" + delivery.number + "</td>";
    tr += "<td>" + delivery.address + "</td></tr>";
    deliveryTable.innerHTML += tr;
  });
}

getDeliveries();
renderDeliveries();

const search = document.getElementById("search");

search.addEventListener("keyup", () => {
  let filter = search.value.toUpperCase();
  let trs = deliveryTable.getElementsByTagName("tr");

  for (let i = 0; i < trs.length; i++) {
    if (trs[i].textContent.toUpperCase().includes(filter)) {
      trs[i].classList.remove("hidden");
    } else {
      trs[i].classList.add("hidden");
    }
  }
});
