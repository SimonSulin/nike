var submit_button = document.getElementById("btn-submit");

fullForm.addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Mail sent',
        showConfirmButton: false,
        timer: 3000,
        position: 'top',
        timerProgressBar: true,
    }).then((result) => {
        document.getElementById('fullForm').submit();
    });
});