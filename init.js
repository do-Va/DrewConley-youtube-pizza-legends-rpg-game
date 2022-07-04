// sayfa açıldığında aşağıdaki anonim metot'u çalıştır.
(function () {
  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
  });

  overworld.init();
})();
