"use strict";
let Guest_List = ['Afia', 'Hadia', 'Aisha'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
let absent_Guest = 'Afia';
let new_Guest = 'Farwa Unni';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Miss. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
console.log(`Miss. ${absent_Guest} is not coming to the party.`);