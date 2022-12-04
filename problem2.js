//Cheak Palindrome
var str="naman";
var bag="";
for(var i=str.length-1;i>=0;i--){
    bag+=str[i]
}
var rev=str;
if(str==rev){
console.log("Palindrom")
}
else
{
console.log("NA");
}