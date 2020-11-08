//import './stylesheets/style.scss';

const cartDetails = [];
const response = {
    items: [
        {
            name: "Samsung Series 4",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 13999,
                display: 22500
            },
            discount: 37
        },
        {
            name: "Samsung Super 6",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 35999,
                display: 66900
            },
            discount: 46
        },
        {
            name: "Samsung The Frame",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 84999,
                display: 133900
            },
            discount: 36
        },
        {
            name: "Thomson B9 Pro",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 9999,
                display: 16999
            },
            discount: 41
        },
        {
            name: "LG Ultra HD",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 39990,
                display: 79990
            },
            discount: 50
        },
        {
            name: "Vu Ready LED TV",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 7999,
                display: 17e3
            },
            discount: 52
        },
        {
            name: "Koryo Android TV",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 55999,
                display: 199990
            },
            discount: 71
        },
        {
            name: "Micromax LED Smart",
            image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
            price: {
                actual: 9999,
                display: 27990
            },
            discount: 64
        }
    ]
}

var i = 0;
response.items.forEach(function (obj) {
    let divAppend = document.getElementById('innerDiv');
    let addDiv = document.createElement('div');
    addDiv.className = "column";
    addDiv.id = "imgDiv" + i;
    let offDiv = document.createElement('div');
    offDiv.className = "offerDiv";
    offDiv.innerHTML = obj.discount+"% off";
    divAppend.appendChild(addDiv);
    let imgAppend = document.getElementById('imgDiv' + i);
    var img = document.createElement('img');
    img.src = obj.image;
    img.className = "imgStyle";
    let innerDiv = document.createElement('div');
    innerDiv.className = "bottom";
    innerDiv.id = "bottom" + i;
    let createInLine = document.createElement('p');
    createInLine.innerHTML = obj.name;
    let createPLine = document.createElement('p');
    createPLine.className = "displayP";
    createPLine.innerHTML = "$" + obj.price['display'];
    let createALine = document.createElement('p');
    createALine.className = "displayA";
    createALine.innerHTML = "$" + obj.price['actual'];
    imgAppend.append(offDiv, img, innerDiv);
    let bottomAppend = document.getElementById('bottom' + i);
    let createAddtoCart = document.createElement('BUTTON');
    createAddtoCart.setAttribute("onclick", "addToCart(" + i + ")");
    createAddtoCart.setAttribute("id", "cart" + i);
    createAddtoCart.innerHTML = "Add to Cart";
    createAddtoCart.className = "cartButton";
    bottomAppend.append(createInLine, createPLine, createALine, createAddtoCart);
    i++;
});

const addToCart = (index) => {
    var tbody = document.getElementById("cartTable");
    tbody.innerHTML = "";
    let checkCart = response.items[index];
    if (cartDetails.indexOf(checkCart) === -1) {
        response.items[index]['qty'] = 1;
        var disMsg = document.getElementById('cartDis');
        disMsg.style.display = 'inline-block';
        disMsg.innerHTML = response.items[index]['name'] +" is add to cart";
        setTimeout(function(){
            disMsg.style.display = 'none';
        }, 2000);
        cartDetails.push(checkCart);
    } else {
        let arrIndex = cartDetails.findIndex(item => item.name === response.items[index].name);
        cartDetails[arrIndex]['qty'] = cartDetails[arrIndex]['qty'] + 1;
        var disMsg = document.getElementById('cartDis');
        disMsg.style.display = 'inline-block';
        disMsg.innerHTML = response.items[index]['name'] +" is add to cart";
        setTimeout(function(){
            disMsg.style.display = 'none';
       }, 2000);
    }
    cartDeatilsAdding();
}

const decrementHandler = (index) => {
    if (cartDetails[index]['qty'] > 1) {
        cartDetails[index]['qty'] = cartDetails[index]['qty'] - 1
        var tbody = document.getElementById("cartTable");
        tbody.innerHTML = "";
        cartDeatilsAdding();
    }
}

const incrementHandler = (index) => {
    cartDetails[index]['qty'] = cartDetails[index]['qty'] + 1;
    var tbody = document.getElementById("cartTable");
    tbody.innerHTML = "";
    cartDeatilsAdding();
}

const cartDeleteHandler = (index) => {
    console.log('index : ', index);
    var disMsg = document.getElementById('cartDis');
    disMsg.style.display = 'inline-block';
    disMsg.innerHTML = cartDetails[index]['name'] +" is removed from cart";
    cartDetails.splice(index, 1);
    console.log('cartDetails : ', cartDetails);
    var tbody = document.getElementById("cartTable");
    tbody.innerHTML = "";
        setTimeout(function(){
            disMsg.style.display = 'none';
       }, 2000);
    cartDeatilsAdding();
}

const cartDeatilsAdding = () => {
    var table = document.getElementById("cartTable");
    let totalQty = 0;
    let displayTotal = 0;
    let discTotal = 0;
    let orderTotal = 0;
    cartDetails.forEach(function (cart) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(0);
        let arrIndex = cartDetails.findIndex(item => item.name === cart.name);
        cell3.innerHTML ='<div class="box-border"> <img class="cartImage" src='+cart.image+' />'+ cart.name + '<span class="delClass" onclick="cartDeleteHandler(' + arrIndex + ')">&nbsp;&nbsp;&nbsp; &#10006; &nbsp;</span></div>';
        cell2.innerHTML = '<div class="qty-group"><input type="button" onclick="decrementHandler(' + arrIndex + ')" value="-" class="button-minus" data-field="quantity"><input type="number" step="1" max="" value="' + cart.qty + '" name="quantity" class="quantity-field"><input type="button" value="+" onclick="incrementHandler(' + arrIndex + ')" class="button-plus" data-field="quantity"></div>';
        cell1.innerHTML = "$" + cart.price['display'] * cart.qty;
        totalQty = totalQty + cart.qty;
        displayTotal = displayTotal + (cart.price['display'] * cart.qty);
        orderTotal = orderTotal + (cart.price['actual'] * cart.qty);
        let calDisTotal =
            discTotal = discTotal + (displayTotal - orderTotal);
    });
    var appendItems = document.getElementById('items');
    appendItems.innerHTML = "items(" + totalQty + ")";
    var appendDistotals = document.getElementById('cartTotals');
    appendDistotals.innerHTML = "$" + displayTotal;
    var appendDisctotals = document.getElementById('discTotals');
    appendDisctotals.innerHTML = "$" + discTotal;
    var appendOrdertotals = document.getElementById('orderTotals');
    appendOrdertotals.innerHTML = "<b>$" + orderTotal+"</b>";
}