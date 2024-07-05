function camelize(str) {
    let splitStr = str.split("-");
    let camelStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        if (i === 0) {
            camelStr += (splitStr[i]);
        }
        else {
            //capitalize first letter
            let firstLetter = splitStr[i].substring(0, 1).toUpperCase();
            let rest = splitStr[i].substring(1);

            camelStr += (firstLetter + rest);
        }
    }

    return camelStr;
}

function testCamelize() {
    if ((camelize("background-color") == 'backgroundColor') &&
        (camelize("list-style-image") == 'listStyleImage') &&
        (camelize("-webkit-transition") == 'WebkitTransition')) {
        console.log("Camelize Function Test: PASSED.");
    }

}

function filterRange(arr, a, b) {
    const filteredArr = arr.filter((num) => {
        return (num >= a && num <= b);
    });

    return filteredArr;
}

function testFilterRange() {
    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    // console.log('Unmodified array: ' + arr);
    // console.log('Filtered array: ' + filtered);

    if (arr == '5,3,8,1' && filtered == '3,1') {
        console.log('Filter Range Test: PASSED.');
    }
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }

    return arr;
}

function testFilterRangeInPlace() {
    let arr = [5, 3, 8, 1];
    let filtered = filterRangeInPlace(arr, 1, 4);

    if (arr == '3,1' && filtered == '3,1') {
        console.log('Filter Range (In Place) Test: PASSED.');
    }
}

function sortDecreasing(arr) {
    arr.sort((a, b) => b - a);
}

function copyAndSort(arr) {
    return arr.slice().sort();
}

function testCopyAndSort() {
    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copyAndSort(arr);
    if (sorted == 'CSS,HTML,JavaScript' && arr == 'HTML,JavaScript,CSS') {
        console.log('Copy and Sort Test: PASSED.');
    }
}

function testSortDecreasing() {
    const testArr = [5, 2, 1, -10, 8];
    sortDecreasing(testArr);
    if (testArr == '8,5,2,1,-10') {
        console.log("Sort Decreasing Test: PASSED.");
    }
}

function mapToNames(objArr) {
    nameArr = objArr.map(user => user.name);
    return nameArr;
}

function testMapToNames() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let users = [john, pete, mary];

    let names = mapToNames(users);

    if(names == 'John,Pete,Mary') {
        console.log("Map to Names Test: PASSED.");
    }
}

function mapToObjects(objArr) {
    let fullNameArr = objArr.map(item => {
        return {
            fullName: `${item.name} ${item.surname}`,
            id: item.id
        };
    });

    return fullNameArr;
}

function testMapToObjects() {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];

    let usersMapped = mapToObjects(users);

    if(usersMapped[0].id === 1 && usersMapped[0].fullName == 'John Smith') {
        console.log('Map to Objects Test: PASSED.');
    }
}

function sortUsersByAge(userArr) {
    userArr.sort( (a, b) => (a.age - b.age));
}

function testSortUsersByAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let arr = [pete, john, mary];

    sortUsersByAge(arr);

    if(arr[0].name == 'John' && arr[1].name == 'Mary' && arr[2].name == 'Pete') {
        console.log("Sort Users by Name Test: PASSED");
    }
}

function shuffleArray(arr) {
    let shuffledArr = [ (arr[0]) ]; // add first element from og array
    for(let i = 1; i < arr.length; i++) {
        let newIndex = Math.floor(Math.random() * (shuffledArr.length + 1));
        shuffledArr.splice(newIndex, 0, arr[i]);
    }

    arr = shuffledArr.slice();
}

function getAverageAge(userArr) {
    let ageTotal = userArr.reduce( (total, user) => {
        return total + user.age;
    }, 0);

    let avgAge = ageTotal/userArr.length;
    return avgAge;
}

function testGetAverageAge() {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];

    if(getAverageAge(arr) === 28) {
        console.log('Get Average Age Test: PASSED.');
    } 
}

function unique(arr) {
    
    let uniqueArr = [arr[0]];


    for(let i = 1; i < arr.length; i++) {
        if(uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

function testUnique() {
    let strings = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-0"
    ];

    let uniqueArr = unique(strings);

    if (uniqueArr == `Hare,Krishna,:-0`) {
        console.log("Unique Test: PASSED.");
    }
}

function groupById(users) {
    return users.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}

function testGroupById() {
    let users = [
        {id: 'john', name: "John Smith", age: 20},
        {id: 'ann', name: "Ann Smith", age: 24},
        {id: 'pete', name: "Pete Peterson", age: 31},
      ];
      
      let usersById = groupById(users);
      console.log(usersById);
}



testCamelize();
testFilterRange();
testFilterRangeInPlace();
testSortDecreasing();
testCopyAndSort();
testMapToNames();
testMapToObjects();
testSortUsersByAge();
shuffleArray([1,2,3]);
testGetAverageAge();
testUnique();
testGroupById();

console.log('\n EW..');