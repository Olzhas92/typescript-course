"use strict";
const a = 1;
const office = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
};
const res = JSON.stringify(office, null, 2);
console.log(`Office data ${res}`);
