export class User {
    customerID: number;
    email: string;
    firstName: string;
    surName: string;
    birthDate: number;
    street: string;
    streetNumber: number;
    postCode: number;
    city: string;
    entryDate: string;

    constructor(obj?: any) {
        this.customerID = obj ? obj.customerID : '';
        this.email = obj ? obj.email : '';
        this.firstName = obj ? obj.firstName : '';
        this.surName = obj ? obj.surName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.streetNumber = obj ? obj.streetNumber : '';
        this.postCode = obj ? obj.postCode : '';
        this.city = obj ? obj.city : '';
        this.entryDate = obj ? obj.entryDate : '';
    }

    public toJSON() {
        return {
            customerID: this.customerID,
            email: this.email,
            firstName: this.firstName,
            surName: this.surName,
            birthDate: this.birthDate,
            street: this.street,
            streetNumber: this.streetNumber,
            postCode: this.postCode,
            city: this.city,
            entryDate: this.entryDate
        }
    }
}