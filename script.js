$(document).ready(function(){

  // $('.typed').Typed({
  //   String:['Hello',"find some weather info"]
  // })

  var typed = new Typed('.typed', {
    strings: ['Hello', 'You can find some weather info Here!'],
    smartBackspace: true,
    loop:true,
    typeSpeed:100,
    // Default value
  });
  // alert('the page has been loaded');
  $('#searchInput').on('keyup',function(e){
    var cityname=e.target.value;
    const APIKey= "f3b63d09dfeb813c8c8ff2ee5025a86d"

    $.ajax({
      url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`,

      // success:function(weatherdata){
      //   console.log(weatherdata);

      // }
    }).done(function(weatherdata){
      $('#profile').html(`
      <article>
        <div class="img">
          <img src="https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="">
        </div>
        <div class="info">
          <h2>Weather:${weatherdata.weather[0].description}</h2>
          <p>
            The temperature at ${cityname} is=${weatherdata.main.temp} &#8451; and feels like =${weatherdata.main.feels_like} &#8451
          </p>
          <button><a href="https://www.google.com/search?q=${cityname}">Learn more about ${cityname}</a></button>
        </div>
      </article>
        `)
    })
  })




})