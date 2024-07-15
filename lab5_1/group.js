function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
    }
    console.log(array);
}

function GroupRandom(students) {
    const numGroups = 5;
    const groupSize = 4;
    const groups = Array.from({ length: numGroups }, () => []);
    
    // Shuffle the students array
    shuffle(students);

    // Distribute students into groups
    
    let numS = students.length;
    let count = 0;
    for(let i = 0; i<numGroups; i++){
        for(let j = 0; j < groupSize; j++){
            groups[i].push(students[count]);
            count++;
            if(numS == count){
                break;
            }
        }
         if(numS == count){
                break;
            }
    }
    if (count < numS){
            for(let i = 0; i < numGroups; i++){
                groups[0].push(students[count]);
                count++;
                if(count == numS){
                    break;
                }
            }
    }
    // Handle extra students
    let extras = [];
    for (let i = 0; i < numGroups; i++) {
        while ((groups[i].length < groupSize) && (groups[i].length > 0)) {
            extras.push(groups[i].pop());
        }
    }
    console.log(extras);
    for (let i = 0; i < numGroups; i++) {
        while (groups[i].length > groupSize) {
            extras.push(groups[i].pop());
        }
    }

    // Distribute extras to groups with less than groupSize
    // for (let i = 0; i < numGroups; i++) {
    //     while (groups[i].length < groupSize && extras.length > 0) {
    //         groups[i].push(extras.pop());
    //     }
    // }
console.log(extras);
    // Ensure no group has more than groupSize + 1 students
    while (extras.length > 0) {
        for (let i = 0; i < numGroups && extras.length > 0; i++) {
            if (groups[i].length < groupSize + 1) {
                groups[i].push(extras.pop());
            }
        }
    }
    return groups;
}

const students = [
    662110182, 662110183, 662110184, 662110185, 662110186, 662110187, 662110188, 662110189,
    662110190, 662110191, 662110192, 662110193, 662110194, 662110195, 662110196, 662110197,
    662110198, 662110199, 662110200, 662110201, 662110202, 662110203, 662110204
    
];

console.log(GroupRandom(students));