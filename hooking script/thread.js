console.log('called from:\n' + Thread.backtrace(this.context,
    Backtracer.FUZZY).map(DebugSymbol.fromAddress).join('\n') + '\n');