export class UserDto {
    email: string;
    name: string;
    phone: string;
    address: string;

    constructor(
        email: string,
        name: string, 
        phone: string,
        address:string
        ) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.address = address;
    }
}