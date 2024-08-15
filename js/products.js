// 이미지 지연 로딩을 위한 IntersectionObserver 설정
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.srcset = img.dataset.srcset;
      img.classList.remove("lazy");
      observer.unobserve(img);
    }
  });
});

async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  displayProducts(products);
}

function displayProducts(products) {
  const container = document.querySelector("#all-products .container");
  const fragment = document.createDocumentFragment();

  products.forEach((product) => {
    const productElement = createProductElement(product);
    fragment.appendChild(productElement);
  });

  container.appendChild(fragment);

  // 이미지 지연 로딩 시작
  document
    .querySelectorAll("img.lazy")
    .forEach((img) => imageObserver.observe(img));
}

function createProductElement(product) {
  const productElement = document.createElement("div");
  productElement.className = "product";
  productElement.innerHTML = `
      <div class="product-picture">
        <img class="lazy" 
             src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
             data-src="${product.image}"
             data-srcset="${product.image} 1x, ${product.image.replace(
    ".jpg",
    "@2x.jpg"
  )} 2x"
             alt="product: ${product.title}" 
             width="250" 
            >
      </div>
      <div class="product-info">
        <h5 class="categories">${escapeHTML(product.category)}</h5>
        <h4 class="title">${escapeHTML(product.title)}</h4>
        <h3 class="price"><span>US$ ${product.price.toFixed(2)}</span></h3>
        <button>Add to bag</button>
      </div>
    `;
  return productElement;
}

// HTML 이스케이프 함수
function escapeHTML(str) {
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
}

// 무거운 연산을 비동기적으로 처리
function heavyOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      for (let i = 0; i < 10000000; i++) {
        const temp = Math.sqrt(i) * Math.sqrt(i);
      }
      resolve();
    }, 0);
  });
}

// 메인 실행 함수
async function main() {
  await loadProducts();
  await heavyOperation();
  console.log("All operations completed");
}

main();
