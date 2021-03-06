export function boundDecimal(number, range) {
    number = parseFloat(number);
    range = parseInt(range);
    return Math.floor(number * Math.pow(10, range)) / Math.pow(10, range);
}

export function getObjectFromProperty(array, prop, value) {
    let foundObject;
    array.map(function(obj) {
        if(obj[prop] === value){
            foundObject = obj;
        }
    })
    if (foundObject){
        return foundObject;
    }
    else {
        return false;
    }
}
export function getArrayOfProps(arr, prop) {
    let temp=[];
    arr.map((item) => {
        if(item[prop]) {
            temp.push(item[prop]);
        }
    })
    return temp;
}

export function filterer (filter, coin, wrt, filterValue) {
    if(filter) {
        return coin[wrt] === filterValue;
    }
    return true;
}

export function sorter(a, b, order, wrt) {
    let first, second;
    if(typeof a[wrt] === "string") {
        first = a[wrt].toUpperCase(); // ignore upper and lowercase
        second = b[wrt].toUpperCase(); // ignore upper and lowercase
    }
    else {
        first = a[wrt];
        second= b[wrt];
    }
    if(order === "asc") {
        if (first < second) {
            return -1;
        }
        if (first > second) {
            return 1;
        }
    }
    else {
        if (first > second) {
            return -1;
        }
        if (first < second) {
            return 1;
        }
    }
    return 0;
}