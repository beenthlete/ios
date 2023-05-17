var exit = Module.findExportByName('libSystem.B.dylib','exit');

Interceptor.attach(exit, {

	onEnter: function (args) {
		console.log("[*] exit Call");
		console.log("[*] exit Call");

		console.log('\tBacktrace:\t' + Thread.backtrace(this.context,
			Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\t"));
			//console.log('called from:\n' + Thread.backtrace(this.context,Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\n') + '\n');
	}
});