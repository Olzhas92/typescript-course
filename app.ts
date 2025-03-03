const a = 1;

interface Office {
    officeId: number,
    isOpened: boolean,
    contacts: Contacts
}

interface Contacts {
    phone: string,
    email: string,
    address: Address
}

interface Address {
    city: string
}

const office: Office = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}

const res = JSON.stringify(office, null, 2);

console.log(`Office data ${res}`);