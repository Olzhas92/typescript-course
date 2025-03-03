"use strict";
function getFullName(firstname, lastname) {
    return `${firstname} ${lastname}`;
}
getFullName('Olzhas', 'Khamzin');
const getFullNameArrow = (firstname, lastname) => {
    return `${firstname} ${lastname}`;
};
const res = getFullNameArrow('Olzhas', 'Khamzin');
console.log('Fullname is', res);
