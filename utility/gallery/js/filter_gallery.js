$(function () {
    var select = "all";

    function filterSelection() {
        console.log(select);
        $(".set").css("display", "none");

        if (select == "all") {
            $(".set").css("display", "block");
        } else {
            $("." + select).css("display", "block");
        }
        buttonSet();
    }

    function buttonSet(){
        $(".btn").css("background", "#f1f1f1");
        $(".btn").css("color", "black");
        $("#"+select).css("background", "#666");
        $("#"+select).css("color", "white");
    }
    $(".btn").on("click", function () {
        //console.log(this.id);
        select = this.id;
        filterSelection();
    });

    $(".set").on("click", function (e) {
        //console.log($("#set1").prop("class"));
        //console.log($(".set").prop("class"));
        //console.log(this.id);
        //console.log($("#"+this.id).prop("class").slice(4,20));
        //select = $("#" + this.id).prop("class").slice(4, 40);
        //filterSelection();
    });

    filterSelection();
});