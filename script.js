
// to update the range as per scrolling 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//to compute an interest only if amount is positive , if not then provides an alert
function compute()
{
   
   var principal = document.getElementById("principal").value;

var rate = document.getElementById("rate").value;

var years = document.getElementById("years").value;

var amount = principal * years * rate /100;

var year = new Date().getFullYear()+parseInt(years);
 
    

 p = document.getElementById("principal").value;

    if(p < 1){
                alert("Enter a positive number");
                p.focus();
                return false;
          }
    else{
 document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }      

}
      
//checks whether the amount is a positive number,  if not provides an alert
