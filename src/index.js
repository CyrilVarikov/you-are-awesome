// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
  return property;
};

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    get: function () { return propertyName;},
    set: function (value) { propertyName = value;}
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  magic = function(){};
  magic.prototype = magic.__proto__;
  return magic;

};

var count = 0;

const incrementor = () => {
  count++;
  return incrementor;
};

incrementor.toString = () => {
  return count;
};


const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise( (resolve) => {
    setTimeout(() => {
      resolve("param");
    }, 1000);
});
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
  return new Object((JSON.stringify({})));
};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
