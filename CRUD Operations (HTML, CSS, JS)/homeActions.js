function Reset()
{
    var inputs = document.getElementsByClassName("form-control");
    for (var i = 0 ; i < inputs.length; i++)
        inputs.item(i).value = "";
}
var products = []

function AddProduct()
{
    var inputs = document.getElementsByClassName("form-control");
    var product = {
        name: inputs.item(0).value,
        price: inputs.item(1).value,
        category: inputs.item(2).value,
        description: inputs.item(3).value
    };

    products.push(product);

    // Put it at the end of the list
    var tableBody = document.getElementById("TableBody");
    tableBody.innerHTML += `
                <tr id="`+ products.length +`">
                    <td> `+ products.length +` </td>
                    <td> `+ product.name +` </td>
                    <td> `+ product.price +` </td>
                    <td> `+ product.category +` </td>
                    <td> `+ product.description +` </td>
                    <td> <button class="btn btn-outline-warning btn-sm" onclick="Update(`+ products.length +`)"> Update</button> </td>
                    <td> <button class="btn btn-outline-danger btn-sm" onclick = "Delete(`+ products.length +`)"> Delete </button> </td>
                </tr>
                `;

    Reset();
}

function Update (id)
{
    console.log("In Update " + id);
    // Put the Save button
    var buttonsDiv = document.getElementById("ButtonDiv");
    buttonsDiv.innerHTML += `
    <button class="btn btn-success my-2" id="SaveButtonId" onclick="Save(`+id+`)"> Save </button>`

    // Fill the data fields with data.
    var inputs = document.getElementsByClassName("form-control");
    inputs.item(0).value = products[id - 1].name;
    inputs.item(1).value = products[id - 1].price;
    inputs.item(2).value = products[id - 1].category;
    inputs.item(3).value = products[id - 1].description;
}

function Save(id)
{
    console.log("In save " + id);
    var inputs = document.getElementsByClassName("form-control");
    var product = {
        name: inputs.item(0).value,
        price: inputs.item(1).value,
        category: inputs.item(2).value,
        description: inputs.item(3).value
    };

    products[id - 1] = product;

    var row = document.getElementById(id);
    row.innerHTML = `
                <tr id="`+ id +`">
                    <td> `+ id +` </td>
                    <td> `+ product.name +` </td>
                    <td> `+ product.price +` </td>
                    <td> `+ product.category +` </td>
                    <td> `+ product.description +` </td>
                    <td> <button class="btn btn-outline-warning btn-sm" onclick = "Update(`+ id +`)"> Update</button> </td>
                    <td> <button class="btn btn-outline-danger btn-sm" onclick = "Delete(`+ id +`)"> Delete </button> </td>
                </tr>
    `;
    
    var elementToDelete = document.getElementById("SaveButtonId");
    elementToDelete.remove();
    Reset();
}

function Delete(id)
{
    var elementToDelete = document.getElementById(id);
    elementToDelete.remove();
}


/*
    Notes:
    Local Storage
    localStorage.setItem("Key", "Value");

*/