/*var open = new NativeFunction(Module.getExportByName(null, "open"), "int", ["pointer","int"]);

var write = new NativeFunction(Module.getExportByName(null,"write"),"ssize_t",["int","pointer",
"size_t"]);

var close = new NativeFunction(Module.getExportByName(null,"close"),"int",["int"]);

var filePath =  "/tmp/test.txt";

var O_WRONLY = 1;
var O_CREAT = 0x40;

var fd = open(Memory.allocUtf8String(filePath), O_CREAT|O_WRONLY);
console.log("file descriptor: " + fd);
//console.log("O_CREAT|O_WRONLY: " + O_CREAT|O_WRONLY); // 로그에 1 찍힘

write(fd, Memory.allocUtf8String("Hello Wrold\n"),12);
close(fd);

console.log("done, check " + filePath);*/
var open = new NativeFunction(Module.getExportByName(null, "open"), "int", ["pointer", "int"]);
var write = new NativeFunction(Module.getExportByName(null, "write"), "ssize_t", ["int", "pointer", "size_t"]);
var close = new NativeFunction(Module.getExportByName(null, "close"), "int", ["int"]);
// Android
//var filePath = "/data/data/com.google.android.calendar/test.txt";
// iOS
 var filePath = "/tmp/test.txt" 
var O_WRONLY = 1;
var O_CREAT = 0x40;
var fd = open(Memory.allocUtf8String(filePath), O_CREAT|O_WRONLY);
console.log("file descriptor: " + fd);
write(fd, Memory.allocUtf8String("Hello World\n"), 12);
close(fd);
console.log("done, check " + filePath);