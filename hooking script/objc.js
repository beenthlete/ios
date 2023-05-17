var UIAlertView =ObjC.classes['UIAlertView'];

ObjC.schedule(ObjC.mainQueue, function() {
    var view =
UIAlertView.alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles_(
    "davincode",
    "welcome from ios frida",
    NULL,
    "OK",
    NULL);
    view.show();
    view.release();
});