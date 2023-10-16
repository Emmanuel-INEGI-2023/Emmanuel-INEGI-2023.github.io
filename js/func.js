let $ima 
$(document).ready(e=>{

alert(e)
$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=bfa177731ce9400d8320e530440591cb", data=>{
                  let _arr = [data.timezone,data.ip_address,data.longitude,data.latitude]
                  $("#datos").html($("<ul>").attr("id","lst"))
                  $.each(_arr,()=>{$("#lst").append($("<li>").html(this))})
                  console.log(_arr)
        })

  $.getJSON("https://screenshot.abstractapi.com/v1/?api_key=2a9f856ee13d44829f49f98bf41377f6&url=https://frp.gsmneo.com", data=> {
        $ima =  new Image(data)
  $("#datos").append($("<div>").html($ima))

  })

})



$("#hoy").click(x=>{ 
  console.log($ima)
  let $msg = (t,m)=>{ let $ms = $("<div>").attr({"id":"mensaje"}).css({"text-align":"center","font-family":"Century Gothic","position":"absolute","width":"200px","left":"45%","top":"48%","background":"crimson","padding":"18px","border":"2px solid gray","border-radius":"6px"});
                          $ms.append($("<div>").css({"color":"black","width":"100%"}).html(m)).append($("<div>").css({"color":"red","width":"100%"}).html(t));
                         return $ms;
                    }
  $("body").append($msg("Hoy es",new Date()))
})
