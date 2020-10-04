function scripts() {
  /// постоянно скрываем рекламу
  let timer = setInterval(() => {
    $("noindex").parent().hide();
  }, 100);
  // прекращаем скрывать рекламу
  setTimeout(() => {
    clearTimeout(timer);
  }, 5000);

  // время перемотки назад
  let time = 5 * 60 * 1000;
  // храним положение переключателя субтитров
  let subtitle = false;
  // каждые 5 минут фильма
  setInterval(() => {
    // если русские субтитры включены
    if (subtitle) {
      // отключаем субтитры
      $("label:contains('Нет')").click();
      //переключаем переменную
      subtitle = false;
    } else {
      // если субтитры выключены
      // получаем видео
      let video = document.getElementsByTagName("video")[0];
      // перематываем на 5 минут назад
      video.currentTime -= time / 1000;

      // ставим русские субтитры
      $("label:contains('Russian')").click();
      //переключаем переменную
      subtitle = true;
    }
  }, time);
}
