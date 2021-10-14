function findMatching(array, name) {
    return array.filter(function (names) {
        return names.toLowerCase().indexOf(name.toLowerCase()) !== -1
    })
}

function fuzzyMatch(array, str) {
    return array.filter(function(name) {
       return name.startsWith(str);
    })
}

function matchName(array, str) {
    return array.filter(function(driver, name) {
        return driver.name === str;
    })
}