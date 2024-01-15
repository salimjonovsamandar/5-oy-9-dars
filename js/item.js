const wrapper = document.getElementById("wrappercard");

function createHtml(data) {
  return `
  <img src="../image/866-536x354.jpg" alt="">  
    <h3>Nomi: ${data.name}</h3>
    <h3>Price: ${data.price}</h3>
    <h3>Description: ${data.description}</h3>
    <h3>CategoriyId: ${data.category_id}</h3>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
  // console.log(window.location.href.substring(40));
  let elId = window.location.href.substring(42);
  if (elId && elId.length == 36) {
    fetch(`https://auth-rg69.onrender.com/api/products/${elId}`)
      .then((res) => res.json())
      .then((data) => {
        let blok = createHtml(data);
        wrappercard.innerHTML = blok;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    window.location.assign("http://127.0.0.1:5500/index.html");
  }
});
