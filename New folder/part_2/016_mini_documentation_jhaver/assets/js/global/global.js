$(document).ready(function(){
    $("body").on("click", "aside button", function(){
        let data_content = $(this).attr("data-content");
        console.log(data_content);
    });
})