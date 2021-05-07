$(function () {
    $("button").click(function () {
        let test= $("input").val()
        if (test.length > 5) {  
            $("input").addClass("is-valid"); 
            $("input").removeClass("is-invalid"); 
          } else {  
            $("input").addClass("is-invalid");  
            $("input").removeClass("is-valid"); 
        };
    })  
    })