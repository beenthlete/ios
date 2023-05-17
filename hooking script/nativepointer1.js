var str = Memory.allocUtf8String("Dreamhack");
console.log("str address: " + str);
console.log("str.isNull: " + str.isNull());
console.log("str.add(4): " + str.add(4));
console.log("str.toString: " + str.toString());
console.log("str.readPointer: " + str.readPointer());
console.log("str.readU16: "+ str.readU16());
console.log("str.readU8: "+ str.readU8());
console.log("str.writeU16(0x4141): " + str.writeU16(0x4141));
console.log("str.readU16: "+ str.readU16())
//console.log("test: " + int64(0x4141));
console.log("str.readUtf8String(): "+ str.readUtf8String());
 