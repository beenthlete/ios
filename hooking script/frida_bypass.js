
/*
function modifyNSURLRet() {
    console.log("\t[+]\thooking start");
    var hook = ObjC.classes.NSURL['- checkResourceIsReachableAndReturnError:']
    Interceptor.attatch(hook.implementation,{
        onEnter(args){
            console.log("method :hooked");
        }
    });
}


function ModifyCheckJailBreak(){
    console.log("\t[+]\thooking start");
    var hook = ObjC.classes.JailBreakCheck_helper['+ checkJailBreak']
    Interceptor.attatch(hook.implementation,{
        onEnter: function(args){
            console.log("method :hooked");
        }
});
}
*/


function ModifyAppStatus1() { 
    console.log("\t[+]\thooking start");
    var hook = ObjC.classes.AppDelegate['- appStatusJailBreakAlert'];
    Interceptor.attatch(hook,{
        onEnter: function(args){
            console.log("method :hooked");
        }
});
};

function ModifyAppStatus2() {
    console.log("\t[+]\thooking start");
    var hook = ObjC.classes.MainViewController['- appStatusJailBreakAlert'];
    Interceptor.attatch(hook,{
        onEnter: function(args){
            console.log("method :hooked");
        }
});
};
//ModifyCheckJailBreak();
//modifyNSURLRet();
//ModifyAppStatus1()
ModifyAppStatus2();