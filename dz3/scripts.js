const productsList = document.getElementById("products-list");
const reviewsContainer = document.getElementById("reviews-container");

for (let productName of Object.keys(localStorage)) {
  const li = document.createElement("li");
  li.textContent = productName;
  productsList.appendChild(li);

  li.addEventListener("click", function() {
    if (localStorage[this.textContent]) { 
      const reviews = localStorage[this.textContent].split("\n");
      reviewsContainer.innerHTML = ""; 

      for (let i = 0; i < reviews.length; i++) {
        let div = document.createElement('div'); // Создаем div
        div.textContent = reviews[i];
        reviewsContainer.appendChild(div);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Удалить';
        li.appendChild(deleteButton); 
      }
    } else {
      alert("Нет отзывов для этого продукта.");
    }
  });
}

function deleteReview(event) {
  if (event.target.classList.contains("delete-button")) {
    localStorage.removeItem(this.parentNode.textContent);
    this.parentNode.remove();
    countReviews();
  }
};