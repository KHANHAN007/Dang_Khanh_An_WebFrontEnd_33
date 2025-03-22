let dish = [
    { id: 1, name: 'Rau sạch', category: 'Đồ ăn' },
    { id: 2, name: 'Thịt lợn', category: 'Đồ ăn' },
    { id: 3, name: 'Pepsi không calo', category: 'Nước' },
    { id: 4, name: 'Cocacola', category: 'Nước' },
    { id: 5, name: 'Cờ lê', category: 'Dụng cụ' },
    { id: 6, name: 'Tuy vít', category: 'Dụng cụ' }
];
function category() {
    let categoryList = document.getElementById("categorySelect");
    categoryList.innerHTML = '<option value="">-- Lựa chọn danh mục --</option>';
    let categories = [...new Set(dish.map(item => item.category))];
    categories.forEach(category => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryList.appendChild(option);
    });
}
category();
function filterProducts() {
    let selectedCategory = document.getElementById("categorySelect").value;
    let productList = document.getElementById("productList");
    productList.innerHTML = "";
    let filteredProducts = dish.filter(item => item.category ===selectedCategory);
    filteredProducts.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>Tên đồ ằn:</strong> ${item.name} - <strong>Danh mục:</strong> ${item.category}`;
        productList.appendChild(li);
    }
    );
}