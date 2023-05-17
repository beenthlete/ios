function getFuncModule(funcName){
    var addr = Module.findExportByName(null,funcName);
    var obj = Process.findModuleByAddress(ptr(addr));
    return obj.path;
}
var libPath;
libPath = getFuncModule("open");
console.log("Path : " + libPath);
libPath = getFuncModule("fopen");
console.log("Path : " + libPath);