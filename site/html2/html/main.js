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

function setCookie(cname,cvalue,exdays) 
{
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) 
  {
    let c = ca[i];
    while (c.charAt(0) == ' ') 
    {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) 
    {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() 
{
  let user = getCookie("username");
  if (user != "") 
  {
    //document.writeln("Hello " + user + " Welcome Back")
    document.getElementById("name").innerHTML = "Hello " + user + " Welcome Back";
  } 
  else 
  {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) 
     {
     	//document.writeln("Welcome " + user)
      document.getElementById("name").innerHTML = "Welcome " + user;
      setCookie("username", user, 30);
     }
  }
  //document.writeln( "<a href = 'javascript:wrongPerson()'>"+ "Click here if you are not " + user + "</a>");
}



/*function wrongPerson(){
	location.reload();
}*/