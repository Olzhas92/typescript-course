function getFullName(firstname: string, lastname:string): string {
return `${firstname} ${lastname}`
}

getFullName('Olzhas', 'Khamzin');

const getFullNameArrow = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`
}

const res = getFullNameArrow('Olzhas', 'Khamzin');

console.log('Fullname is', res);
