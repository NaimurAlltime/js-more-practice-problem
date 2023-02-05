const friendsAge = [12, 22, 28, 26, 14, 29, 27, 15];
console.log(friendsAge);

// array er majhkhaner kono element delete korar jonno splice use korte hoy 
// splice(2, 5) = 2 number index theke 5 ta element delete kora hobe
// splice(2, 5, 34, 32) = 2 number index theke 5 ta element delete kora hobe and 34, 32 element oi jaygay add kora hobe
// const friendsAgeSplice = friendsAge.splice(2, 4);
// console.log(friendsAgeSplice);
const friendsAgeSpliceAdd = friendsAge.splice(2, 4, 34, 32);
console.log(friendsAgeSpliceAdd);
console.log(friendsAge);