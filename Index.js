const User = require("./User");

let a1= User.newAdmin("xde",20,'F')//1
console.log(a1)
let user1 = a1.newUser("xah",23,'M') 
console.log(a1.getAllUsers())

//USERS CAN CREATE CONTACT
user1.createContact("Mehzu")
user1.createContact("Izzy")
console.log(user1.getAllUserContacts())

//USER CAN CREATE CONTACT INFO OF PARTICULAR CONTACT by contactID
user1.createContactInfo("work","90909",1)
user1.createContactInfo("Email","ebc@gmail.com",1)

//USER CAN GET ALL CONTCAT INFO BY CONTCAT ID
console.log(user1.getAllContactInfos(1))

//USER CAN UPDATE CONTACT INFO BY CONTACTINFO ID
user1.updateContactInfo(1,'type',"home",0)
user1.updateContactInfo(1,"value","756432",0)
console.log(user1.getAllContactInfos(1))

//USER CAN DELETE CONTACT INFO BY CONTACT ID
user1.deleteContactInfo(1,0)
console.log(user1.getAllContactInfos(1))

//USER CAN UPDATE CONTACT 
// user1.updateContact(1,'name',"uzma")
// console.log(user1.getAllUserContacts())

//USER CAN DELETE CONTACT
// user1.deleteContact(0)
// console.log(user1.getAllUserContacts())

// console.log(user1.getAllUserContacts())
// console.log(a1.newUser("xah",23,'M'))//2
// console.log(a1.newUser("huy",23,'M'))//3
// console.log(a1.newUser("sqw",24,'M'))//4

//USER CANNOT CREATE USER
// let user1 = new User("hjsg",8,'M')
// console.log(user1.newUser('xdd',7,'M'))//not an admin

// ADMIN UPDATE USER NAME/AGE/GENDER
// a1.updateUser(3,'name','MEHZU')
// a1.updateUser(3,'age',22)
// a1.updateUser(3,'gender','F')
// console.log(a1.getAllUsers())


//Admin Delete user
// a1.deleteUser(4)
// console.log(a1.getAllUsers())