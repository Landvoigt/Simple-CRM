export class User {
    subscribe(arg0: (changes: any) => void) {
      throw new Error('Method not implemented.');
    }
    firstName: string;
    surName: string;
    birthDate: number;
    street: string;
    postalCode: number;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.surName = obj ? obj.surName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.postalCode = obj ? obj.postalCode : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            surName: this.surName,
            birthDate: this.birthDate,
            street: this.street,
            postalCode: this.postalCode,
            city: this.city,
            email: this.email
        }
    }
}