// ==UserScript==
// @name         englishWatcher
// @namespace    https://github.com/SilantevDenis/englishWatcher
// @version      1.0.3
// @updateURL    https://github.com/SilantevDenis/englishWatcher/raw/master/englishWatcher.user.js
// @description  helps to watch English movies and learn the language
// @author       silantevdenis
// @match        https://zloekino.su/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.slim.js
// ==/UserScript==

(function () {
  "use strict";
  $(document).ready(() => {
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
    let subtitle = true;
    // каждые 5 минут фильма
    setInterval(() => {
      // если русские субтитры включены
      if (subtitle) {
        // получаем видео
        let video = document.getElementsByTagName("video")[0];
        // перематываем на 5 минут назад
        video.currentTime -= time / 1000;
        // отключаем субтитры
        $("label:contains('Нет')").click();
        //переключаем переменную
        subtitle = false;
      } else {
        // если субтитры выключены

        // ставим русские субтитры
        $("label:contains('Russian')").first().click();
        //переключаем переменную
        subtitle = true;
      }
    }, time);
  });
})();
