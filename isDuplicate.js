const friendsNames = ['sabbir', 'ashik', 'kamal', 'abir', 'ashik', 'sabbir', 'abir', 'ashik', 'jahid'];

// remove duplicate 
function removeDuplicate(names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        console.log(name);
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName = removeDuplicate(friendsNames);
console.log(uniqueName);
