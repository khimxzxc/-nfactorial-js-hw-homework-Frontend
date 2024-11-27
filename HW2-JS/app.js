//Object Restaurant  Shop  Football 

let restaurant = {
    name: "Diplomat",
    rating: 5.5,
    isOutDoor: true,
    discounts: null,
    contact: undefined
};

restaurant.cuisin = "China";

restaurant["location"] = "Pavlodar";

delete restaurant.discounts; delete  restaurant.contact;
console.log(restaurant);


let myStore = {

    name: "Khim Tech",
    inventory: 100, 
    isOnline: true,
    Shipment: null,      
    owner: undefined,
};

myStore.owner = "Rakhim";

myStore["category"] = "Electronics";

delete myStore.isOnline;
console.log(myStore);



let ErtisFC = {

    name: "Ertis FC",
    palyers: 22,
    inLeague: true,
    lastMatch: null,
    captain: undefined,
}

ErtisFC.stadium = "central stadium pavlodar";

ErtisFC["coach"] = "Rakhim";

delete ErtisFC.captain;
console.log(ErtisFC);


//Working with objects

const vehicle = {};

vehicle.brandName = "BMW";

vehicle.model = "X7";

vehicle.model = "XM Red Lable";

delete vehicle.model;

console.log(vehicle);

//Working with property enumeration in objects

let salaries = {

    Aroo: 100,
    Dalida: 160,
    Samat: 130

};

let totalSalary = 0;

for (let name in salaries) {
    totalSalary += salaries[name];
}

console.log("salaries:",  salaries, "total salaries:", totalSalary);