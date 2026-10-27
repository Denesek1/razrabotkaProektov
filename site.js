const form = document.forms['orderForm'];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const promo = formData.get('promo');
    if (promo && promo.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Ошибка',
            text: 'Промокод слишком короткий'
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: 'Заказ оформлен',
        text: 'Данные записаны'
    });
});