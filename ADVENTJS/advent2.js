const year=2022
const holidays = ['01/06', '04/01', '12/25']


function countHours(year, holidays) {
    let hours = 0
    for (let fecha of holidays)
        {
            const dia = new Date(fecha+'/'+year+' GMT+0').getDay()
            console.log(dia)
            if((dia>0) && (dia<6)){
                hours+=2}
        }

    return hours
  }

 
