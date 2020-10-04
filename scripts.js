function scripts() {
  // вставляем стили для скрытия блоков
  $("body *:first").before(
    "<style>" + "noindex { display: none !important; }" + "</style>",
  );
}
