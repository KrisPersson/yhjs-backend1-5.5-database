
const nedb = require('nedb-promise')
const database = new nedb({ filename: 'database.db', autoload: true })



// database.insert({ firstname: 'Sven', lastname: 'Svensson', age: 63 })
// database.insert({ firstname: 'Berit', lastname: 'Nilsson', age: 71 })
// database.insert({ firstname: 'Birgit', lastname: 'Svensson', age: 68 })
// database.insert({ firstname: 'Jonas', lastname: 'Olsson', age: 29 })
// database.insert({ firstname: 'Sigrid', lastname: 'Andersson', age: 19 })

async function getPeople(search) {
    const result = await database.find(search)
    // console.log(result)
}

// async function getId() {
//     const nameId = await database.find({ names: []})
//     console.log(nameId)
    
// }

// getPeople({lastname: 'Svensson'})
// getPeople({firstname: 'Sigrid'})
// getPeople({age: { $gt: 30}})
// database.update({ firstname: 'Berit' }, { $set: { firstname: 'Erika', age: 43 } })
// database.remove({ firstname: 'Jonas' })

// database.insert({ names: [] })


// console.log(nameId)

async function addNames(newName) {
    const result = await database.find({ _id: 'SRmp1SSmtVzBYQxk' })
    const newArr = result[0].names
    newArr.push(newName)
    database.update({ _id: 'SRmp1SSmtVzBYQxk' }, { $set: { names: [...newArr] } })
}

// addNames('Svenne')