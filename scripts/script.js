(function ($) {
    "use strict";

    $(".btn-add").on("click", function () {
        var $table = $(".original");
        var $requirements = $('.requirements');
        var $clone = $table.clone();
        $clone.show();
        $clone.removeClass("original");
        $clone.find("input,select").val("");
        $requirements.append($clone);
    });

    $(document).delegate(".btn-remove", "click", function (e) {
        e.preventDefault();
        swal({
            title: "Você esta certo?",
            text: "Deseja remover esse item mesmo?",
            icon: "warning",
            buttons: true,
        }).then((willDelete) => {
            if (willDelete) {
                if ($(this).closest("tr").hasClass("remove")) {
                    $(this).closest("tr").hide();
                    $(this).siblings("input").val(1);
                } else {
                    $(this).closest(".row").remove();
                }
            }
        });
    });
})(jQuery);