const newFunction = (firstname, lastname) => ({
    firstname,
    lastname,
    fullName(){
        console.log(`${firstname} ${lastname}`)
    }
})

newFunction("William", "Imoh").fullName()