function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    // We get seconds since start of this day
    var time = getSecondsSinceStartOfDay();
    // How many degrees should our clock be devided to
    const clockSubivision = 360;
    // Calculate clock hour , clock minute and clock seconds
    var hour = Math.floor(time / 3600);
    var minute = Math.floor((time - hour * 3600)/60);
    var second = time - hour * 3600 - minute * 60;

    // Convert clock numbers to degrees
    var second_degrees = (second * 6) - 180;
    var minute_degrees = (minute * 6) - 180 + second_degrees / clockSubivision;
    var hour_degrees = (hour * 6) - 180 + minute_degrees / clockSubivision;

    // Modify our elements' transform values using DOM 
    document.querySelector('#seconds').style.transform = `rotate(${second_degrees}deg)`;
    document.querySelector('#minutes').style.transform = `rotate(${minute_degrees}deg)`;
    document.querySelector('#hour').style.transform = `rotate(${hour_degrees}deg)`;
    
    /* DEBUGGING */
    //console.log(time);
    //console.log(`${hour}:${minute}:${second}`);
    //console.log(`Second Degrees : ${second_degrees} | Minute Degrees : ${minute_degrees} | Hour Degrees : ${hour_degrees}`);
}, 1000);
