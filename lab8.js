function showDate() {
    let out_ru = document.getElementById('current-date');
    let out_ar = document.getElementById('current-date_ar');
    let out_be = document.getElementById('current-date_be');
    let out_de = document.getElementById('current-date_de');
    let out_en = document.getElementById('current-date_en');

    let today = new Date();

    out_ru.innerHTML = 'Российский локаль: ' + today.toLocaleString('ru-RU');
    out_ar.innerHTML = 'Арабский локаль: ' + today.toLocaleString('ar-AE');
    out_be.innerHTML = 'Белорусский локаль: ' + today.toLocaleString('be-BY');
    out_de.innerHTML = 'Немецкий локаль: ' + today.toLocaleString('de-AT');
    out_en.innerHTML = 'Английский локаль: ' + today.toLocaleString('en-AU');
}

function ShowDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('raznica').innerHTML = 'Количество дней с даты рождения: ' + daysCount;
}