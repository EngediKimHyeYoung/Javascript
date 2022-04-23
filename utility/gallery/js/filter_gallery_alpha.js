$(function () {
    var select = "all";

    function filterSelection() {
        console.log(select);
        if (select == "all") {
            $(".set").css("animation-name", "aniIn");
        } else {
            $("." + select).css("animation-name", "aniIn");
        }

        if (select == "nature") {
            $(".cars").css("animation-name", "aniOut");
            $(".people").css("animation-name", "aniOut");
        }
        if (select == "cars") {
            $(".nature").css("animation-name", "aniOut");
            $(".people").css("animation-name", "aniOut");
        }
        if (select == "people") {
            $(".nature").css("animation-name", "aniOut");
            $(".cars").css("animation-name", "aniOut");
        }
        buttonSet();
    }

    function buttonSet() {
        $(".btn").css("background", "#f1f1f1");
        $(".btn").css("color", "black");
        $("#" + select).css("background", "#666");
        $("#" + select).css("color", "white");
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
    });

    filterSelection();
});