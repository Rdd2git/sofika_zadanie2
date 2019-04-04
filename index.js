
function numberSorter(){
  var str = document.getElementById("enteredNumber").value;
if (str == "") {
  document.getElementById("startButton").innerHTML = "Please Enter some numbers ";
} else {
    document.getElementById("startButton").innerHTML ="Positive numbers:";
    var nums = str.split(",");
    var num ="";
    for (var i = 0; i < nums.length; i++) {
      (Number(nums[i])> 0)?num += (nums[i] + ","):num;
    }
    document.getElementById("startButton").innerHTML += num.toString();
};
}; 
function zeroNumberCointer(){
  var str = document.getElementById("enteredNumber").value;
if (str == "") {
  document.getElementById("startButton").innerHTML = "Please Enter some numbers ";
}else{
    document.getElementById("zeroNumber").innerHTML = "Zero Numbers:";
    var nums = str.split(",");
    var num ="";
    for (var i = 0; i < nums.length; i++) {
      (Number(nums[i]) === 0)?num++:num;
    }
    document.getElementById("zeroNumber").innerHTML += num.toString();
};
}; 
function underZeroSorter(){
  var str = document.getElementById("enteredNumber").value;
if (str == "") {
  document.getElementById("startButton").innerHTML = "Please Enter some numbers ";
}else{
    document.getElementById("underZeroNumber").innerHTML = "Under Zero Number:";
    var nums = str.split(",");
    var num ="";
    for (var i = 0; i < nums.length; i++) {
      (Number(nums[i])< 0)?num += (nums[i] + ","):num;
    }
    document.getElementById("underZeroNumber").innerHTML += num.toString();
};
};