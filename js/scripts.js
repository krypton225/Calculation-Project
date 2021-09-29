jQuery(document).ready(function() {

    /*
        Fullscreen background
    */
    $.backstretch("../images/bg.jpg");

    /*
	    Modals
	*/
    $('.launch-modal').on('click', function(e) {
        e.preventDefault();
        $('#' + $(this).data('modal-id')).modal();
    });

    /*
        Form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() {
        $(this).removeClass('input-error');
    });

    $('.login-form').on('submit', function(e) {

        $(this).find('input[type="text"], input[type="password"], textarea').each(function() {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });
    });
});



// ===============================================
var password = document.getElementById("form-password"),
    confirm_password = document.getElementById("form-confirm-password");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("لقد أدخلت كلمات مُرور غير مُتوافقة!");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;