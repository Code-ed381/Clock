
 /*Digital Clock Code */
//Grab elements 
var clockDisplay24 = document.querySelector('.clock-display-24')
var clockDisplay12 = document.querySelector('.clock-display-12')
var hour12 = document.getElementById('12-hour')
var hour24 = document.getElementById('24-hour')
var text = document.getElementById('text')


hour24.addEventListener('click', ()=> {
    //Call the twentyFour function
    twentyFour()

    //On click remove show class which hides the time and display 24-hour format time
    clockDisplay24.classList.remove('show')

    //On click add show class to 12-hour format which hides the time
    clockDisplay12.classList.add('show')

    //Hide question text on click
    text.classList.add('show')
})

hour12.addEventListener('click', ()=> {
    //Call the twelve function
    twelve()  
    
    //On click remove show class which hides the time and display 24-hour format time
    clockDisplay12.classList.remove('show')

    //On click add show class to 24-hour format which hides the time
    clockDisplay24.classList.add('show')

    //Hide question text on click
    text.classList.add('show')
})

//Function that gets the date elements for 24-hour format
function twentyFour() {
    //Using set interval so at every second the date values will be grabbed
    return setInterval(()=> 
    {
        //Get date values and assign time values to separate variables
        var date = new Date();
        var [hour, minute, sec] =  [date.getHours(), date.getMinutes(), date.getSeconds()]

        //Changes seconds single digits to double digits when seconds is less than zero
        switch(sec) {
            case 0 :
                var sec = '00'
            break;
            case 1 :
                var sec = '01'
            break;
            case 2 :
                var sec = '02'
            break;
            case 3 :
                var sec = '03'
            break;
            case 4 :
                var sec = '04'
            break;
            case 5 :
                var sec = '05'
            break;
            case 6 :
                var sec = '06'
            break;
            case 7 :
                var sec = '07'
            break;
            case 8 :
                var sec = '08'
            break;
            case 9 :
                var sec = '09'
            break;
        } 
        
        //Changes minutes single digits to double digits when seconds is less than zero
        switch(minute) {
            case 0 :
                var minute = '00'
            break;
            case 1 :
                var minute = '01'
            break;
            case 2 :
                var minute = '02'
            break;
            case 3 :
                var minute = '03'
            break;
            case 4 :
                var minute = '04'
            break;
            case 5 :
                var minute = '05'
            break;
            case 6 :
                var minute = '06'
            break;
            case 7 :
                var minute = '07'
            break;
            case 8 :
                var minute = '08'
            break;
            case 9 :
                var minute = '09'
            break;
        }

        //Changes hours single digits to double digits when seconds is less than zero
        switch(hour) {
            case 0 :
                var hour = '00'
            break;
            case 1 :
                var hour = '01'
            break;
            case 2 :
                var hour = '02'
            break;
            case 3 :
                var hour = '03'
            break;
            case 4 :
                var hour = '04'
            break;
            case 5 :
                var hour = '05'
            break;
            case 6 :
                var hour = '06'
            break;
            case 7 :
                var hour = '07'
            break;
            case 8 :
                var hour = '08'
            break;
            case 9 :
                var hour = '09'
            break;
        }

        //display the time
        clockDisplay24.textContent = hour + " : " + minute + " : " + sec 
    }, 
    1000
)
}

//Function that gets the date elements for 12-hour format
function twelve() {
    //Using set interval so at every second the date values will be grabbed
    return setInterval(()=> 
    {
        //Get date values and assign time values to separate variables
        var date = new Date();
        var [hour, minute, sec] =  [date.getHours(), date.getMinutes(), date.getSeconds()]

        //Changes seconds single digits to double digits when seconds is less than zero
        switch(sec) {
            case 0 :
                var sec = '00'
            break;
            case 1 :
                var sec = '01'
            break;
            case 2 :
                var sec = '02'
            break;
            case 3 :
                var sec = '03'
            break;
            case 4 :
                var sec = '04'
            break;
            case 5 :
                var sec = '05'
            break;
            case 6 :
                var sec = '06'
            break;
            case 7 :
                var sec = '07'
            break;
            case 8 :
                var sec = '08'
            break;
            case 9 :
                var sec = '09'
            break;
        }

        //Changes minutes single digits to double digits when seconds is less than zero
        switch(minute) {
            case 0 :
                var minute = '00'
            break;
            case 1 :
                var minute = '01'
            break;
            case 2 :
                var minute = '02'
            break;
            case 3 :
                var minute = '03'
            break;
            case 4 :
                var minute = '04'
            break;
            case 5 :
                var minute = '05'
            break;
            case 6 :
                var minute = '06'
            break;
            case 7 :
                var minute = '07'
            break;
            case 8 :
                var minute = '08'
            break;
            case 9 :
                var minute = '09'
            break;
        }

        //Changes 24-hour format values to 12-hour format values
        switch(hour) {
            case 0 :
                var hour = '00'
            break
            case 13 : 
                var hour = '01'
            break
            case 14 : 
                var hour = '02'
            break
            case 15 : 
                var hour = '03'
            break
            case 16 : 
                var hour = '04'
            break
            case 17 : 
                var hour = '05'
            break
            case 18 : 
                var hour = '06'
            break
            case 19 : 
                var hour = '07'
            break
            case 20 : 
                var hour = '08'
            break
            case 21 : 
                var hour = '09'
            break
            case 22 : 
                var hour = '10'
            break
            case 23 : 
                var hour = '11'
            break
        }

        //Changes hours single digits to double digits when seconds is less than zero
        switch(hour) {
            case 0 :
                var hour = '00'
            break;
            case 1 :
                var hour = '01'
            break;
            case 2 :
                var hour = '02'
            break;
            case 3 :
                var hour = '03'
            break;
            case 4 :
                var hour = '04'
            break;
            case 5 :
                var hour = '05'
            break;
            case 6 :
                var hour = '06'
            break;
            case 7 :
                var hour = '07'
            break;
            case 8 :
                var hour = '08'
            break;
            case 9 :
                var hour = '09'
            break;
        }

        //Checks and changes am to pm and vice versa and display time
        if(hour >= '01' && hour <= '11') {
            clockDisplay12.textContent = hour + " : " + minute + " : " + sec + ' pm'
        }
        else{
            clockDisplay12.textContent = hour + " : " + minute + " : " + sec + ' am'
        }
    }, 
    1000
)
}

/* Alarm Code */
var setAlarmBtn = document.querySelector('.set-alarm')
var alarmMinute = document.getElementById('alarm-minute').value
var alarmHour = document.getElementById('alarm-hour').value







