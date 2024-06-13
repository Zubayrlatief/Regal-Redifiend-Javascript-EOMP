//footer
document.querySelector('#currYear').textContent = new Date().getFullYear()


function addSubmit(){
    localStorage.setItem('dedSec',JSON.stringify(prodClothes));
    let wrench = JSON.parse(localStorage.getItem('dedSec'));
};
let dedSec = [];
function AddProd(id,name,price,description,url){
    this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url
}
let prod1 = new AddProd(1,'Wrench Mask','Digital display of emotions in a mask form',666,'https://i.postimg.cc/sDFFpdKY/712v95-Jh-WPL-AC-UY780.jpg')
// let prod2 = new AddProd(2,'','',,'')
// let prod3 = new AddProd(3,'','',,'')
// let prod4 = new AddProd(4,'','',,'')
// let prod5 = new AddProd(5,'','',,'')
prodClothes.push(prod1,prod2,prod3,prod4,prod5);
function deLaMap(){
    let clothing = dedSec.map(function(object,index){
        return `
        <tr>
            <td>${object.id}</td>
            <td>${object.name}</td>
            <td>${object.price}</td>
            <td>${object.description}</td>
            <td><ing src="${object.url}"></img></td>
        </tr>
        `  
    })
}
table.innerHTML = clothing.join('')
table.innerHTML = clothing.join('')