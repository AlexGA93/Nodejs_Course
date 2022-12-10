// console
/**
 * built-in module that emules a web browser's console
 */
 console.log(`Hello World \n${2+5}`);
 console.warn('Ths is a warning');
 console.assert('This is an assert');
 console.error(new Error('This is an error'));
 
 const people = [
     ["Tyrone", "Jones"],
     ["Janet", "Smith"],
     ["Maria", "Cruz"],
 ];
 console.table(people);