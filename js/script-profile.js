var modalConfirm = function(callback) {

    $("#btn-confirm").on("click", function() {
        $("#mi-modal").modal('show');
    });

    $("#modal-btn-si").on("click", function() {
        callback(true);
        $("#mi-modal").modal('hide');
    });

    $("#modal-btn-no").on("click", function() {
        callback(false);
        $("#mi-modal").modal('hide');
    });
};

modalConfirm(function(confirm) {
    if (confirm) {
        //Acciones si el usuario confirma
        $("#result").html("");
    } else {
        //Acciones si el usuario no confirma
        $("#result").html("");
    }
});

// =====================================================
// For showing the toast of adding new customer.
$(document).ready(function() {
    $("#addingCustomer").click(function() {
        // a delay value of 0 will keep this open
        alertify.message('تم إضافة المُستخدم الجديد بنجاح', 5);

        $("#customerModal").modal('hide');
    });
});

// =====================================================
// For showing the toast of deleting a customer.
$(document).ready(function() {
    $("#deletingCustomer").click(function() {
        // a delay value of 0 will keep this open
        alertify.message('تم حذفُ المُستخدم بنجاح', 5);

        $("#removeCustomerModal").modal('hide');
    });
});