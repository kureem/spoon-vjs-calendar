({
    doInit: function(cmp) {
        var defaultFields = cmp.get('v.defaultFields');
        var fields = defaultFields.split(',');
        
       
        cmp.set('v.fields', defaultFields.split(','));
    },
    edit : function(component, event, helper) {
        component.set('v.mode', 'edit');	
    },
    cancel: function(component,event,helper){
        component.set('v.mode', 'view');	
    },
    save: function (component,event,helper){
        
    },
    handleLoad: function(component,event,helper){
        component.set('v.showSpinner',false);
    },
    handleSubmit : function(component, event, helper) {
        component.set('v.showSpinner',true);
       // alert('submitting');
    },
    handleSuccess : function(component, event, helper) {
        component.set('v.showSpinner',false);
        var successTitle = $A.get("$Label.c.LC00_Success");
        var successMsg = $A.get("$Label.c.LC00_SuccessMsg");
       	component.set('v.mode', 'view');	
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": successTitle,
            "message": successMsg,
            "type":"success"
        });
        toastEvent.fire();  
    }
})