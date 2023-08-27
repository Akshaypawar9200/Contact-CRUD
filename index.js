class Contact {
    static Contacts = [];
    static id = 0;

    constructor(contactName, contactNo, contactType) {
        this.id = Contact.id++;
        this.contactName = contactName;
        this.contactNo = contactNo;
        this.contactType = contactType;
    }

    static newContact(contactName, contactNo, contactType) {
        if (typeof contactName !== "string" || typeof contactNo !== "number" || typeof contactType !== "string") {
            return ["invalid contact", 0];
        } else {
            let saveContact = new Contact(contactName, contactNo, contactType);
            Contact.Contacts.push(saveContact);
            return saveContact;
        }
    }

    static findContact(id) {
        for (let i = 0; i < Contact.Contacts.length; i++) {
            if (Contact.Contacts[i].id === id) {
                return [Contact.Contacts[i], i];
            }
            else{
                return["null",0]
            }
        }
        
    }

    updateContactName(newValue) {
        this.contactName = newValue;
    }

    updateContactNo(newValue) {
        this.contactNo = newValue;
    }

    updateContactType(newValue) {
        this.contactType = newValue;
    }

    static updateContact(parameter, newValue, id) {
        let [contactToBeUpdated, index] = Contact.findContact(id);
        if (typeof parameter !== "string" || typeof id !== "number") {
            return "invalid details";
        } else {
            switch (parameter) {
                case "contactName":
                    contactToBeUpdated.updateContactName(newValue);
                    break;
                case "contactNo":
                    contactToBeUpdated.updateContactNo(newValue);
                    break;
                case "contactType":
                    contactToBeUpdated.updateContactType(newValue);
                    break;
                default:
                    return "invalid";
            }
            return "update successful";
        }
    }
    static deleteContact(id){
        let [contactToBeUpdated, index] = Contact.findContact(id);
        if(typeof id!="number"){
            return "invalid id"
        }
        else{
            Contact.Contacts.splice(id,1)
        }

    }

 
}

let a = Contact.newContact("akshay", 8237212119, "self");
console.log(Contact.Contacts);
