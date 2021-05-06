$(function () {
    $("button").click(function () {
        let test= $("input").val()
        if (test.length > 5) {  
            $("input").addClass("is-valid"); 
          } else {  
            $("input").addClass("is-invalid");  
        };
    })  
    })