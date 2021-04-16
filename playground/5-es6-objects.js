// Object property shorthand

const name = 'James'

const userAge = 32

const user = {
    name,
    age: userAge,
    location: 'Whitby On'
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {} = product