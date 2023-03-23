    const horas =  document.getElementById("horas");
    const minutos =  document.getElementById("minutos");
    const segundos =  document.getElementById("segundos");
  
    const relogio = setInterval(function time(){
        let dateToday = new Date();
        let hour = dateToday.getHours();
        let minute = dateToday.getMinutes();
        let segund = dateToday.getSeconds();
  
        if(hour < 10) hour = '0' + hour;
        if(minute < 10) minute = '0' + minute;
        if(segund < 10) segund = '0' + segund;
  
        horas.textContent = hour;
        minutos.textContent = minute;
        segundos.textContent = segund;
    })
  


