const user = {id: 1, name: "gorib amir", job: "Actor" }
// JavaScript Object Notation (JSON)
const stringyfied = JSON.stringify(user)
// console.log(user);
// console.log(stringyfied);
/*
{ id: 1, name: 'gorib amir', job: 'Actor' }; JS
{"id":1,"name":"gorib amir","job":"Actor"}; JSON
*/

const shop = {
    owner: "Alia",
    address: {
        street: 'Kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['Laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObject = JSON.parse(shopJSON);
console.log(shopObject);