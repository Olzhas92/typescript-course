const skill:readonly[number, string] = [1, 'Dev'];

console.log(skill);

const array:readonly number[] = [1,2,3,4,5];

console.log(array);

console.log('new array', array);

const genericArray: ReadonlyArray<string> = ['Dev', 'DevOps'];
