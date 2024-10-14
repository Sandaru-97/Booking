$(function () {
    'use strict';

    // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
    const forms = $('.needs-validation');

    // Loop melalui formulir dan mencegah pengiriman
    forms.on('submit', function (event) {
        const form = $(this);

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $('.submit_form').html('Sending...');
            const toast = new bootstrap.Toast($('.success_msg')[0]);
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);
            var formData = forms.serialize();
            $.ajax({
                type: "POST",
                url: "php/form_process.php",
                data: formData,
                success: function (response) {
                    if (response == 'success') {
                        toast.show()
                        $('.submit_form').html('Submit');
                    } else {
                        errtoast.show()
                        $('.submit_form').html('Submit');
                    }
                }
            });
        }

        form.addClass('was-validated');
    });
});