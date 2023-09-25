



$("#hoy").click(x=>{ 
  let $msg = (t,m)=>{ let $ms = $("div").attr({"id":"mensaje"}).css({"text-align":"center","font-family":"Century Gothic","position":"absolute","width":"200px","left":"45%","top":"48%","background":"crimson","padding":"18px","border":"2px solid gray","border-radius":"6px"});
                        $ms.append($("div").css({"color":"black","width":"100%"}).html(m)).append($("div").css({"color":"red","width":"100%"}).html(t))  
                      return $ms
                    }
  $("body").append($msg("Hoy es",new Date()))
})
