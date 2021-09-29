//======================================================================================================================================
//Check the name and the username ..
function validateTheLength() {
    if (document.getElementById("theName").value.length < 3) {
        document.getElementById("theName").setCustomValidity("عددُ حُروف قليلةٌ جدًا !");
    } else {
        document.getElementById("theName").setCustomValidity("");
    }

    if (document.getElementById("username").value.length < 3) {
        document.getElementById("username").setCustomValidity("عددُ حُروف اسم المُستخدم قليلةٌ جدًا !");
    } else {
        document.getElementById("username").setCustomValidity("");
    }
}

//======================================================================================================================================
//Check the password and confirm password..

function validatePassword() {
    var password = document.getElementById("password"),
        confirm_password = document.getElementById("confirm_password");

    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("كلمةُ السر غيرُ مُتوافقةٍ ، فالرجاء اعادةُ كتابتِها بطريقةٍ صحيحةٍ !");
    } else {
        confirm_password.setCustomValidity('');
    }

    if (password.value.length < 10 && confirm_password.value.length < 10) {
        password.setCustomValidity("عددُ حُروف كلمة المُرور قليلةٌ جدًا !");
    } else {
        password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;