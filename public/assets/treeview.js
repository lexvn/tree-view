// Validation
function validateInput(text){
    var $val = $(text).val();
    if($val.match(/[^a-zA-Z0-9]/)){
        var length = $val.length - 1;
        $val = $val.substring(length,0)
        $(text).val($val);
    }
}