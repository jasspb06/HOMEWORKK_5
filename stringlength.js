const array = ['apple', 'bananas', 'mango', 'peach', 'watermelon', 'berries', 'pear', 'strawberry', 'pineapple','dragonfruit'];


 
const res = array.reduce((acc,curr)=> (acc[curr]=curr.length,acc),{});
console.log(res)
