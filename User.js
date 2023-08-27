const Contact = require("./Contact")
class User{
    static allUsers=[]
    static id=0
    
    constructor(name,age,gender,isAdmin)
    {
        this.name=name
        this.age= age
        this.gender=gender
        this.id=User.id++
        this.isAdmin = isAdmin
        this.contacts=[]
    }
//create new admin
    static newAdmin(name,age,gender)
    {
        
        try {
            if(typeof name != 'string')
            {
                throw new Error("Invalid value of Name parameter")
            }
            if(typeof age != 'number')
            {
                throw new Error("Invalid value of Age parameter")
            }
            if(gender != 'M' && gender != 'F' && gender != 'O')
            {
                throw new Error("Invalid value of Gender parameter")
            }
            return new User(name,age,gender,true)
        } catch (error) {
            console.log(error.message)
        }
    }
//admin can create new users    
    newUser(name,age,gender)
    {
        
        try {
            if(typeof name != 'string')
            {
                throw new Error("Invalid value of Name parameter")
            }
            if(typeof age != 'number')
            {
                throw new Error("Invalid value of Age parameter")
            }
            if(gender != 'M' && gender != 'F' && gender != 'O')
            {
                throw new Error("Invalid value of Gender parameter")
            }
            if(!this.isAdmin)
            {
                throw new Error("Not an Admin")
            }
            let newUser = new User(name,age,gender,false)
            User.allUsers.push(newUser)
            return newUser

        } catch (error) {
            console.log(error.message)
        }
    }
//admin can get all its user
    getAllUsers()
    {
        try {
            if(!this.isAdmin)
            {
                throw new Error("Not an Admin")
            }
            return User.allUsers
        } catch (error) {
            console.log(error.message)
        }
    }
//admin find user by using user id 
    static #findUser(userId)
    {
        for (let index = 0; index < User.allUsers.length; index++) {
            if(userId == User.allUsers[index].id)
            {
                return [User.allUsers[index],index]
            }
            
        }
        return [null,-1]
    }
//admin update user name parameter
    #updateName(newValue)
    {
        try{
            if(typeof newValue != 'string')
            {
                throw new Error("Invalid value of Name parameter")
            }
            return this.name=newValue
        }
        catch(error)
        {
            console.log(error.message)
        }
    }
//admin update user age parameter
    #updateAge(newValue)
    {
        try{
            if(typeof newValue != 'number')
            {
                throw new Error("Invalid value of Age parameter")
            }
            return this.age=newValue
        }
        catch(error)
        {
            console.log(error.message)
        }
    }
//admin update user gender parameter 
    #updateGender(newValue)
    {
        try{
            if(typeof newValue != 'string')
            {
                throw new Error("Invalid value of Gender parameter")
            }
            return this.gender=newValue
        }
        catch(error)
        {
            console.log(error.message)
        }
    }
//admin can update user name age gender
    updateUser(userId,parameter,newValue)
    {
        try {
            if(!this.isAdmin)
            {
                throw new Error("Not an Admin")
            }
            let [userToBeUpdated , indexOfUserToBeUpdated] = User.#findUser(userId)
            if (userToBeUpdated == null) 
            {
                throw new Error("User not found")    
            }
            switch (parameter) {
                case 'name':
                    userToBeUpdated.#updateName(newValue)
                    break;
                
                case 'age':
                    userToBeUpdated.#updateAge(newValue)
                    break;
                
                case 'gender':
                    userToBeUpdated.#updateGender(newValue)
                default:
                    break;
            }
            return User.allUsers
        } catch (error) {
            console.log(error.message)
        }

    }
//admin can delete user
    deleteUser(userId)
    {
        try {
            if(!this.isAdmin)
            {
                throw new Error("Not an Admin")
            }
            let [userToBeDeleted , indexOfUserToBeDeleted] = User.#findUser(userId)
            if (userToBeDeleted == null) 
            {
                throw new Error("User not found")    
            }
            //user.alluser splice
            User.allUsers.splice(indexOfUserToBeDeleted,1)
        } catch (error) {
            console.log(error.message)
        }
    }
// user create contact 
    createContact(name)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't create contacts")
            }
            let newContact = Contact.newContact(name)
            this.contacts.push(newContact)
            return newContact
        } 
        catch (error) {
            console.log(error.message)
        }
    }
//user can get access to its contact
    getAllUserContacts()
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts")
            }
            return this.contacts
        } catch (error) {
            console.log(error.message)
        }
    }
//find contcat by contact id
    #findContact(contactID)
    {
        for (let index = 0; index < this.contacts.length; index++) {
            if(contactID == this.contacts[index].contactID)
            {
                return [this.contacts[index],index]
            }
        }
        return [null,-1]
    }
//user can update its contact
    updateContact(contactID,parameter,newValue)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts")
            }
            if(contactID < 0 || typeof contactID != 'number')
            {
                throw new Error("Invalid Contact ID")
            }
            let [foundContact,indexOfContact] = this.#findContact(contactID)

            if(foundContact == null)
            {
                throw new Error("Contact not found")
            }
            foundContact.updateContact(parameter,newValue)
        } catch (error) {
            console.log(error.message)
        }
    }
//user can delete its contact
    deleteContact(contactID)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts")
            }
            if(contactID < 0 || typeof contactID != 'number')
            {
                throw new Error("Invalid Contact ID")
            }
            let [contactToBeDeleted , indexOfContactToBeDeleted] = this.#findContact(contactID)
            
            if (contactToBeDeleted == null) 
            {
                throw new Error("User not found")    
            }
            // foundContact.deleteContact(indexOfContactToBeDeleted)
            this.contacts.splice(indexOfContactToBeDeleted,1)

        } catch (error) {
            console.log(error.message)
        }
    }

//user can create contact info 
    createContactInfo(typeOfContact, valueOfContact,contactID)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts ")
            }
            let [foundContact,indexOfContact]=this.#findContact(contactID)
            if(foundContact == null)
            {
                throw new Error("Contact not found")
            }
            foundContact.createContactInfo(typeOfContact,valueOfContact)
        } catch (error) {
            console.log(error.message)
        }
    }
//user can get access to its contacts info for that particular contcat by contactID
    getAllContactInfos(contactID)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts")
            }
            let [foundContact,indexOfContact]=this.#findContact(contactID)
            if(foundContact == null)
            {
                throw new Error("Contact not found")
            }
            return foundContact.getAllContactInfos()
        } catch (error) {
            console.log(error.message)
        }
    }
//user can update contact info 
    updateContactInfo(contactID,parameter,newValue,ContactInfoID)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts")
            }
            if(contactID < 0 || typeof contactID != 'number')
            {
                throw new Error("Invalid Contact ID")
            }
            let [foundContact,indexOfContact] = this.#findContact(contactID)

            if(foundContact == null)
            {
                throw new Error("Contact not found")
            }
            return foundContact.updateContactInfo(parameter,newValue,ContactInfoID)
        } catch (error) {
            console.log(error.message)
        }
    }
    deleteContactInfo(contactID,contactInfoID)
    {
        try {
            if(this.isAdmin)
            {
                throw new Error("Admin can't have access to user contacts")
            }
            if(contactID < 0 || typeof contactID != 'number')
            {
                throw new Error("Invalid Contact ID")
            }
            let [foundContact,indexOfContact] = this.#findContact(contactID)

            if(foundContact == null)
            {
                throw new Error("Contact not found")
            }
            foundContact.deleteContactInfo(contactInfoID)
        } catch (error) {
            console.log(error.message)
        }
    }
}
module.exports=User