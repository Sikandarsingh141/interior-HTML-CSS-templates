function abc()
{
   var date = new Date();

   var hour = date.getHours() % 12;
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();

   

   if((seconds < 10))
   {
       seconds = "0"+seconds;
   }

   if((minutes < 10))
   {
    minutes = "0"+minutes;
   }

   if((hour < 10))
   {
    hour = "0"+hour;
   }



   document.getElementById('div').textContent = hour +":"+minutes+":"+seconds;

}

setInterval(abc,10);


