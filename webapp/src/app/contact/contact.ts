export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  email: string;
  phoneNumber: string;

  constructor(id?: number, firstName?: string, lastName?: string, address?: string, email?: string,
              phoneNumber?: string, postalCode?: string, city?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.postalCode = postalCode;
    this.city = city;
  }
}
