
const url = 'https://raw.githubusercontent.com/picksonamp/wd/main/json.json'


let i = 0;

let end = new Date('2024-07-05T15:45:00.417')
end = end.getTime()



setInterval(() => {

    let start = Date.now()
   
    // let start = new Date('2024-07-05T15:45:01.417')
    if (start >= end) start = end

    let days = Math.trunc((end - start) / 1000 / 60 / 60 / 24)
    let hours = Math.trunc((end - start) / 1000 / 60 / 60)
    let minutes = Math.trunc((end - start) / 1000 / 60)
    let seconds = Math.trunc((end - start) / 1000)

    switch (days % 10) { 
        case 1: document.getElementById('daysIndex').innerHTML = 'ДЕНЬ'; break;
        case 2:
        case 3:
        case 4: document.getElementById('daysIndex').innerHTML = 'ДНЯ'; break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: document.getElementById('daysIndex').innerHTML = 'ДНЕЙ'; break;
    }

    switch (hours % 10) { 
        case 1: document.getElementById('hoursIndex').innerHTML = 'ЧАС'; break;
        case 2:
        case 3:
        case 4: document.getElementById('hoursIndex').innerHTML = 'ЧАСА'; break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: document.getElementById('hoursIndex').innerHTML = 'ЧАСОВ'; break;        
    }

    switch (minutes % 10) { 
        case 1: document.getElementById('minutesIndex').innerHTML = 'МИНУТА'; break;
        case 2:
        case 3:
        case 4: document.getElementById('minutesIndex').innerHTML = 'МИНУТЫ'; break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: document.getElementById('minutesIndex').innerHTML = 'МИНУТ'; break;        
    }

    switch (seconds % 10) { 
        case 1: document.getElementById('secondsIndex').innerHTML = 'СЕКУНДА'; break;
        case 2:
        case 3:
        case 4: document.getElementById('secondsIndex').innerHTML = 'СЕКУНДЫ'; break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: document.getElementById('secondsIndex').innerHTML = 'СЕКУНД'; break;        
    }

    

   

    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours - (days * 24)
    document.getElementById('minutes').innerHTML = minutes - (hours * 60)
    document.getElementById('seconds').innerHTML = seconds - (minutes * 60)
    
}
, 1000)

sendButton.onclick = () => {     

    let name = document.getElementById('name').value

    if (name === '') return alert('Введите имя!')

    let presence = (document.getElementById('presense').checked) ? 'придет' : 'не придет'

    
    let reultVines =`${name} Будет пить: `

    let redDry = document.getElementById('RedDry').checked
    let redSemi = document.getElementById('RedSemi').checked
    let whiteDry = document.getElementById('WhiteDry').checked
    let whiteSemi = document.getElementById('WhiteSemi').checked
    let shamp = document.getElementById('Shamp').checked
    let alcFree = document.getElementById('AlcFree').checked

    let custom = document.getElementById('textarea').value

    reultVines += (redDry) ? "красное сухое вино | " : '' 
    reultVines += (redSemi) ? "красное полусладкое вино | " : ''
    reultVines += (whiteDry) ? "белое сухое вино | " : ''
    reultVines += (whiteSemi) ? "белое полусладкое вино | " : ''
    reultVines += (shamp) ? "шампанское | " : ''
    reultVines += (alcFree) ? "безалкогольные напитки | " : ''
    reultVines += (custom === null) ? '' : `${custom} |`

    localStorage.setItem(++localStorage.length, reultVines)
    
    let parms = {
        name: name,
        presence: presence,
        message: reultVines,
    }

    emailjs.send('service_ohydsyk',"template_3p29qxi", parms).then(
        ((document.getElementById('presense').checked)) ? alert(`Спасибо за ответ! Будем Вас ждать!`) : alert('Спасибо за ответ! Очень жаль, что у Вас не получиться!'))

      
    console.log(localStorage)

   

}

