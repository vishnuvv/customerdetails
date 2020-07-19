export interface ICustomer {
    id: number;
    name: string;
    age: number;
}

export interface IAddress {
    address: string;
    city: string;
    pincode: string;
    country: string;
    customerId: number;
}

