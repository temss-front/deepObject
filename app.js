function deepObjectCopy(obj) {
  const copyObj = {};
  for (let i in obj) {
    if (obj[i] instanceof Object && !(obj[i] instanceof Function)) {
      copyObj[i] = deepObjectCopy(obj[i]);
      continue;
    }
    copyObj[i] = obj[i];
  }
  return copyObj;
}
function deepObjectEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  } else if (
    typeof obj1 == "object" &&
    obj1 != null &&
    typeof obj2 == "object" &&
    obj2 != null
  ) {
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

    for (let prop in obj1) {
      if (y.hasOwnProperty(prop)) {
        if (!deepObjectEqual(obj1[prop], obj2[prop])) return false;
      } else return false;
    }

    return true;
  } else return false;
}
