const friendsAge = [17, 23, 24, 21, 19, 20];
// check typeof array 
console.log(Array.isArray(friendsAge));

console.log(friendsAge.includes(32));
console.log(friendsAge.includes(21));
console.log('----------------');

// array concat 
const newFriendsAge = [12, 22, 28, 26, 14];
const allFriendAge = newFriendsAge.concat(friendsAge);
console.log(allFriendAge);