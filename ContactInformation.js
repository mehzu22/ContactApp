class ContactInfo{
    static ContactInfoID=0
    constructor(typeOfContact,valueOfContact)
    {
        this.typeOfContact=typeOfContact
        this.valueOfContact=valueOfContact
        this.ContactInfoID=ContactInfo.ContactInfoID++
    }
    static newContactInfo(typeOfContact,valueOfContact)
    {
        try {
            if(typeof typeOfContact != 'string')
            {
                throw new Error("Invalid input of contact type")
            }
            if(typeof valueOfContact != 'string')
            {
                throw new Error("Invalid value of contact type")
            }
            return new ContactInfo(typeOfContact,valueOfContact)
        } catch (error) {
            console.log(error.message)
        }
    }
    #updateContactType(newValue)
    {
        if(typeof newValue != 'string')
        {
            throw new Error("Invalid Value of Contact Info")
        }
        return this.typeOfContact = newValue
    }
    #updateValueOfContactInfo(newValue)
    {
        if(typeof newValue != 'string')
        {
            throw new Error("Invalid Value of Contact Info")
        }
        return this.valueOfContact=newValue
    }
    updateContactInfo(parameter,newValue)
    {
        if(typeof parameter != 'string')
        {
            throw new Error("Invalid Parameter")
        }
        switch (parameter) {

            case 'type':
                this.#updateContactType(newValue)
                break;
            case 'value' :
                this.#updateValueOfContactInfo(newValue)
                break;
            default:
                throw new Error("Invalid parameter")
        }
    }
}
module.exports=ContactInfo