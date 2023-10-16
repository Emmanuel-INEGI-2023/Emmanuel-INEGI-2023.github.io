$(document).ready(e=>{

alert("mensaje de prueba")
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=bfa177731ce9400d8320e530440591cb", function(data) {
                  console.log(data);
              })

    $.get("https://api.bigdatacloud.net/data/client-ip",pos=>{
          console.log(pos);
            let url = "https://api-bdc.net/data/ip-geolocation-full?ip=200.92.172.86&localityLanguage=en&key=[YOUR API KEY]"

})






})



$("#hoy").click(x=>{ 
  let $msg = (t,m)=>{ let $ms = $("<div>").attr({"id":"mensaje"}).css({"text-align":"center","font-family":"Century Gothic","position":"absolute","width":"200px","left":"45%","top":"48%","background":"crimson","padding":"18px","border":"2px solid gray","border-radius":"6px"});
                          $ms.append($("<div>").css({"color":"black","width":"100%"}).html(m)).append($("<div>").css({"color":"red","width":"100%"}).html(t));
                         return $ms;
                    }
  $("body").append($msg("Hoy es",new Date()))
})
