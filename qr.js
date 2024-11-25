// var qrcode = new QRCode("qr-code",
//     "static-code");

$(document).ready(function () {
    $(document).on('click', '#generate', function () {
        showSpinner();
        $('#enterString').addClass('d-none');
        $('#qr-code').removeClass('d-none');
        $('#qr-code').html("");

        const qrValue = $('#qr-value').val();
        if (qrValue == '' || qrValue === null || qrValue === undefined) {
            $('#qr-code').addClass('d-none');
            hideSpinner();
            showAlert("String empty..", "error");


        } else {

            let qr = new QRCode("qr-code", qrValue);
            $('#qr-value').val("");
            hideSpinner();
            showAlert("QR-Generated!!!!!!!!", "success");
        }
    })
})

function showSpinner() {
    $('#spinner').removeClass('d-none');
}
function hideSpinner() {
    $('#spinner').addClass('d-none');
}

function showAlert(message, type) {

    if (type == "error") {
        $('.alert').removeClass('alert-success');
        $('.alert').addClass('alert-danger');


    } else if (type == "success") {
        $('.alert').removeClass('alert-danger');
        $('.alert').addClass('alert-success');

    }

    $('.alert').removeClass('d-none');
    $('.message').text(message);

    setTimeout(() => {
        $('.alert').addClass('d-none');


    }, 5000)

}