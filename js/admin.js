const tbody = document.getElementById("tbody");

function createRov(phone, index) {
  return `
<tr>
<td>${index}</td>
<td>${phone.name}</td>
<td>${phone.price}</td>
<td>${phone.description}</td>
<td>${phone.category_id}</td>
<td>${phone.status}</td>
<td>
  <i id="updatebtn" class="bi bi-pen text-danger"></i>
  <i class="bi bi-trash3 text-success" id="deletebtn"></i>
</td>
</tr>
`;
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://auth-rg69.onrender.com/api/products/all", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.length) {
        data.forEach((phone, index) => {
          let tr = createRov(phone, index + 1);
          tbody.innerHTML += tr;
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
