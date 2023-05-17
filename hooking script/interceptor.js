var open = Module.findExportByName(null, "open");

Interceptor.attach(open, {
    onEnter(args) {
       // console.log("Filename: " + args[0].readCString() + ", " + this.context.x0.readCString());
        console.log("Filename: " + args[0].readCString() + ", " + this.context.rdi.readCString()); //andriod x0 > rdi
        //console.log("flags: " + args[1].toInt32() + ", " + this.context.x1);
        console.log("flags: " + args[1].toInt32() + ", " + this.context.rsi); //android x1 > rsi
    },
    onLeave(retval) {
        console.log("ret: " + retval);
    }
});
