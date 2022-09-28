var now = new Date();
var hour = now.getHours();
if ( hour < 12 )
  document.getElementById("greetings").innerHTML = "<h1>Good Morning </h1>";
else
{
  hour = hour - 12;

  if ( hour < 6 )
  document.getElementById("greetings").innerHTML = "<h1>Good Afternoon </h1>";
else
  document.getElementById("greetings").innerHTML = "<h1>Good Evening</h1>";
}

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";