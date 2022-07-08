
//    حساب الوقت المقضي على الموقع  //


// document.querySelector('h1').style.display='none'



// function timeCounter(secondsId,startSeconds, minutesId ,startMinutes,hoursId,startHours,daysId,startdays,yearsId,startYears){
//     let seconds =document.getElementById(secondsId)
//     let minutes =document.getElementById(minutesId)
//     let hours =document.getElementById(hoursId)
//     let days =document.getElementById(daysId)
//     let years =document.getElementById(yearsId)
    
//     let timeWithSeconds = startSeconds;
//     let timeWithMinutes = startMinutes;
//     let timeWithHours = startHours;
//     let timeWithDays = startdays;
//     let timeWithYears = startYears;

//     if(localStorage.seconds != null && localStorage.seconds != '' && localStorage.seconds != NaN){
//         timeWithSeconds = localStorage.seconds
//     }else{
//         timeWithSeconds = startSeconds;
//     }

//     if(localStorage.minutes != null && localStorage.minutes != '' && localStorage.minutes != NaN){
//         timeWithMinutes = localStorage.minutes
//     }else{
//         timeWithMinutes = startMinutes;
//     }

//     if(localStorage.hours != null && localStorage.hours != '' && localStorage.hours != NaN){
//         timeWithHours = localStorage.hours
//     }else{
//         timeWithHours = startHours;
//     }

//     if(localStorage.days != null && localStorage.days != '' && localStorage.days != NaN){
//         timeWithDays = localStorage.days
//     }else{
//         timeWithDays = startdays;
//     }

//     if(localStorage.years != null && localStorage.years != '' && localStorage.years != NaN){
//         timeWithYears = localStorage.years
//     }else{
//         timeWithYears = startYears;
//     }
//     setInterval(() => {
//         timeWithSeconds++
//         if(timeWithSeconds == 60){
//             timeWithSeconds = 0
//             timeWithMinutes++
//         }
//         if(timeWithMinutes == 60){
//             timeWithMinutes = 0
//             timeWithHours++
//         }
//         if(timeWithHours == 24){
//             timeWithHours = 0
//             timeWithDays++
//         }
//         if(timeWithDays == 365){
//             timeWithDays = 0
//             timeWithYears++
//             timeWithHours +=6
//         }
//         seconds.textContent = timeWithSeconds;
//         localStorage.seconds = timeWithSeconds;
//         minutes.textContent = timeWithMinutes;
//         localStorage.minutes = timeWithMinutes;
//         hours.textContent = timeWithHours;
//         localStorage.hours = timeWithHours;
//         days.textContent = timeWithDays;
//         localStorage.days = timeWithDays;
//         years.textContent = timeWithYears;
//         localStorage.years = timeWithYears;


//         // it haven't a rel with this function
//         precent(timeWithSeconds,timeWithMinutes,timeWithHours,timeWithDays,timeWithYears)


//     }, 1000);
// }

// function precent(seconds , minutes ,hours,days,years){
//     let sp =document.getElementById('second-percent')
//     sp.style.height=`${seconds * 8}px`
//     let mp =document.getElementById('minutes-percent')
//     mp.style.height=`${minutes * 8}px`
//     let hp =document.getElementById('hours-percent')
//     hp.style.height=`${hours * 8}px`
//     let dp =document.getElementById('days-percent')
//     dp.style.height=`${days * 8}px`
//     let yp =document.getElementById('years-percent')
//     yp.style.height=`${years * 8}px`
// }

// timeCounter('seconds',55,'minutes',59,'hours',23,'days',364,'years',4)


//    نهاية حساب الوقت المقضي على الموقع  //


///////////////////////////////////////////////////////////////////////////////////////////



//   حساب الوقت المتبقي الى نهاية السنة   //


// CLEAR YEARS
let years = document.querySelectorAll('nav h2')[4]
let yearsPercent=document.querySelectorAll('.percent div')[4]
years.style.display='none'
yearsPercent.style.display='none'
//


document.querySelector('h1').style.display='block'

function newYearCounter(secondsId, minutesId ,hoursId,daysId,newYear){
    let endDate = new Date(`Dec 31, ${newYear - 1} 23:59:59`).getTime()
    
    let seconds =document.getElementById(secondsId)
    let minutes =document.getElementById(minutesId)
    let hours =document.getElementById(hoursId)
    let days =document.getElementById(daysId)
    
    let counter = setInterval(() => {
        let dateNow = new Date().getTime()
        let deltaDate = endDate - dateNow
    
        let daysTime = Math.floor(deltaDate / (1000 * 60 * 60 * 24))
        let hoursTime = Math.floor((deltaDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutesTime =Math.floor((deltaDate % (1000 * 60 * 60)) / (1000 * 60))
        let secondsTime =Math.floor(deltaDate % (1000 * 60) / 1000)
    
        days.textContent =daysTime
        hours.textContent =hoursTime
        minutes.textContent =minutesTime
        seconds.textContent =secondsTime
        
            // it haven't a rel with this function
        precent(secondsTime,minutesTime,hoursTime,daysTime)
        
    }, 1000);
}

function precent(seconds , minutes ,hours,days,years){
    let sp =document.getElementById('second-percent')
    sp.style.height=`${seconds * 8}px`
    let mp =document.getElementById('minutes-percent')
    mp.style.height=`${minutes * 8}px`
    let hp =document.getElementById('hours-percent')
    hp.style.height=`${hours * 8}px`
    let dp =document.getElementById('days-percent')
    dp.style.height=`${days * 8}px`
    let yp =document.getElementById('years-percent')
    yp.style.height=`${years * 8}px`
}


newYearCounter('seconds','minutes','hours','days',2023)