function scripts() {
  /// скрываем рекламу, когда она появится
  setTimeout(() => {
    $("noindex").parent().hide();
  }, 5000);
}
