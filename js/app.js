
const products = [];

// **  function for all the buttons

function buyNow(button){
    
    let totalPrice = 0;
    const productName = button.parentNode.parentNode.children[0].innerText;
    const productPrice = parseFloat(button.parentNode.parentNode.children[1].children[0].innerText);
    const tableContent = document.getElementById('table-content');


    const product = {
        productName: productName,
        productPrice: productPrice
    }

    products.push(product);
    document.getElementById("total-products").innerText = products.length;
    tableContent.innerText = ``;

    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        const productName = element.productName;
        const price = element.productPrice;
        

        totalPrice += price;

        const tr = document.createElement('tr');

        tr.innerHTML = `
        
                  <th>${i+1}</th>
                  <td>${productName}</td>
                  <td>${price}</td>
        `
        tableContent.appendChild(tr);
        
    }

    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    
    `

    tableContent.appendChild(tr);

  

}

