const filterOutOdds = (...nums) => nums.filter(element => element % 2 === 0);

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({
    ...obj1,
    ...obj2
});

const doubleAndReturnArgs = (arr, ...varnums) => [...arr, ...varnums.map(v => v * 2)];

const removeRandom = (items) => {
    let randNum = Math.floor(Math.random() * items.length)
    return [...items.slice(0, randNum), ...items.slice(randNum + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {
    return {
        ...obj,
        [key]: val
    };
}

const objOne = {
    name: 'me',
    human: 'yes'

}
const objTwo = {
    day: 'Wednesday',
    weather: 'Cold'
}

const removeKey = (obj, key) => {
    let newObj = {
        ...obj
    };
    delete newObj[key];
    return newObj;
};

const combine = (obj1, obj2) => {
    return {
        ...obj1,
        obj2
    };
}

function update(obj, key, value) {

    return {
        ...obj,
        [key]: value
    }
}

const update2 = (obj, key, value) => {
    return {
        ...obj,
        [key]: value
    }
}