function scripts() {
  // вставляем стили для скрытия блоков
  $("script:last + *").css("display", "none !important");
}
