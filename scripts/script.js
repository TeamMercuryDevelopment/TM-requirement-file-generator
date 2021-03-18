(function ($) {
    "use strict";

    $(".btn-add").on("click", function () {
        const $totalRequirements = $('th[id^="test"]').length;
        const $table = $(".original");
        const $requirements = $('.requirements');
        const $clone = $table.clone();
        $clone.show();
        $clone.find('th[id^="test"]').text(`RF.${($totalRequirements + 1)}`)
        $clone.removeClass("original");
        $clone.find('.button-delete-table').prop('disabled',false);
        $clone.find("input,select").val("");
        $clone.find(".editable").text("Dê duplo clique para inserir");
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
                    $('th[id^="test"]').each(function(index) {
                        $(this).text(`RF.${(index + 1)}`);    
                    });
                }
            }
        });
    });
    $(".btn-print").on("click", printPage);

})(jQuery);
function printPage() {
    var divPrint = document.querySelector(".print");

    var myWindow = window.open("", "PRINT", "height=800,width=1200");

    myWindow.document.write(
        "<html><head><title>" + document.title + "</title>"
    );
    myWindow.document.write(
        '<link rel="stylesheet" href="https://cdn.metroui.org.ua/v4.3.2/css/metro-all.min.css">'
    );
    myWindow.document.write(
        "<style>@media print{.print{background-color:#fff;height:100%;width:100%;position:fixed;top:0;left:0;margin:0;padding:40px;font-size:14px;line-height:18px}.no-print{visibility:hidden;height:0}}@page{size:25cm 35.7cm;margin:5mm 8mm 5mm 8mm;} footer{position: fixed;bottom:0;left:0;right:0} footer img{max-width:3.5rem} button {visibility:hidden} thead {display: table-row-group;} #project-title {text-align:center} .content-index, .table-initial-content{ width: 233px;} .footer {position: fixed;} .footer-table {float:right;}</style>"
    );
    myWindow.document.write("</head><body >");
    myWindow.document.write(divPrint.innerHTML);
    myWindow.document.write("</body></html>");

    myWindow.document.close(); // necessary for IE >= 10
    myWindow.focus(); // necessary for IE >= 10*/

    myWindow.print();

    myWindow.onafterprint = function () {
        myWindow.close();
    };
}
function doubleClickEdit(Element) {
    Element.contentEditable=true;
    Element.className='inEdit';
}
function blurEdit(Element) {
    Element.contentEditable=false;
    Element.className='editable';
    Element.innerHTML.length === 0 ? Element.innerHTML = 'empty' : console.log(Element.innerHTML.length);
}