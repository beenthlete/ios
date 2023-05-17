function add(num, num2){
    console.log("type: "+ typeof(num)+ ", "+ 
   typeof(num2));
   var num_obj = int64(num);
   var num_obj2 = int64(num2);

   var sum = num_obj.add(num_obj2);
   
   console.log("add sum : " + sum + "type: " + typeof(sum));
}
function compare(num, num2){
    var num_obj = int64(num);
    var num_obj2 = int64(num2);
    var result = num_obj.compare(num_obj2);

    if(!result){
        console.log("same.")
    }
    else{
        console.log("Different")
    }

}
function convert(num){
    var num_obj = int64(num);

    console.log("Decimal: " + 
    num_obj.toString(10));
    console.log("Hexadecimal: " + 
    num_obj.toString(16));
}

add("100","200");
compare("100","100");
compare("100","200");
convert("1234");