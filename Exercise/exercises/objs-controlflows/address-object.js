// street
// city
// zip code
// showAdress(address)

let address = {
    street = '88th St',
    city = 'New York',
    zipcode = '12345'
};

function showAdress(address) {
    for(let key in address)
    console.log(key, address[key])
}

showAdress(address)




// Factory 
let address = createAddress('a', 'b', 'c')
console.log(address);
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor
let address = new Address('a', 'b', 'c');
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


// Oblject equiality 
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    return address1.street === address2. street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}