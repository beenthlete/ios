var open = Module.findExportByName(null, "open");

Interceptor.attach(open, {
    onEnter(args){
        console.log('called from:\n' + Thread.backtrace(this.context,Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\n') + '\n');
    },
    onLeave(retval) {
        console.log("ret: " + retval);
    }
});
