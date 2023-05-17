var modules = Process.enumerateModules()[0];
console.log("modules Base: ", modules.base);
console.log("modules Path: ", modules.path);
var modules_info = Process.findRangeByAddress(ptr(modules.base));
console.log("Protection: ", modules_info.protection);

