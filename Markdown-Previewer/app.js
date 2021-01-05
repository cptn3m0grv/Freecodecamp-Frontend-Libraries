marked.setOptions({
    gfm: true,
    breaks: true,
});

$(document).ready(function(){
    data = $("#editor").text();
    $("#preview").html(marked(data));
    $("#editor").keyup(function() {
        $("#preview").html(marked(this.value));
    });
});