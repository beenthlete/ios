var m = Process.enumerateModules()[0];

var pattern = "2f 6c 69 62";//lib
var perm = 0;

Memory.scan(m.base, m.size, pattern,{
    onMatch: function(address, size){
        console.log('Found match at' + address);

        //get protection
        perm = Process.findRangeByAddress(address);
        console.log("Protection:" + perm.protection);

        Memory.protect(address ,4096 , 'rw-');
    },
    onComplete: function() {
        console.log('Done');
    }
});

var string = Memory.allocUtf8String("dreamhack");
console.log('Allocated string address: '+ string);
var pattern2 = "68 61 63 6b"; //hack
var result = Memory.scanSync(string, 0x100, pattern2);
console.log("Memory.scanSync() result: "+ JSON.stringify(result));