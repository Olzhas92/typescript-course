"use strict";
// type User = {
//     firstname: string,
//     lastname: string,
//     city: string,
//     age: number,
//     isMarried: boolean,
// }
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.lastname}`;
}
const user = {
    firstname: 'Olzhas',
    lastname: 'Hamza',
    city: 'Kokshetau',
    age: 32,
    isMarried: true,
};
const res = getFullName(user);
console.log('Fullname is', res);
