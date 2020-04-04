var city = "New York";
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=2898e2ead9e3f086535a6579dcc0da2a",
  function (data) {
    console.log(data);
    var icon="https://openweathermap.org/img/w/"+ data.weather[0].icon+".png";
    var temp=Math.floor(data.main.temp);
    var weather=data.weather[0].main;
    $(".icon").attr('src',icon);
    $('.weather').append(weather);
    $('.temp').append(temp);
});
