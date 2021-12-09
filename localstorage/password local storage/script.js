$(document).ready(function () {
    var LOCAL_STORAGE_KEY = 'PasswordManager';

    $("#loginPasswordForm").submit(function (event) {
        event.preventDefault();
        var login = $("#login").val();
        var password = $("#password").val();
        var isError = false;
        if (login == "" && !login.trim()) {
            isError = true;
            alert("Enter login");

        }
        if (password == "" && !password.trim()) {
            isError = true;
            alert("Enter password");
        }
        if (!isError) {
            createKeyIfNotExists();
            var arr = getKeyValue();
            arr.push({ "login": login, "password": password });
            setKeyValue(arr);
            clearField();
        }
    });

    function clearField() {
        $("#login").val("");
        $("#password").val("");
    }
    function createKeyIfNotExists() {
        if (localStorage.getItem(LOCAL_STORAGE_KEY) == null) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        }
    }

    function getKeyValue() {
        var valJson = localStorage.getItem(LOCAL_STORAGE_KEY);
        var val = JSON.parse(valJson);
        return val;
    }
    function setKeyValue(obj) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(obj));
    }

});