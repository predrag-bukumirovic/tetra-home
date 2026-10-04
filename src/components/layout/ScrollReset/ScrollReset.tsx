// Inline skripta se izvršava pre prikaza sadržaja, pa nema vidljivog skoka:
// - pregledač ne vraća prethodnu poziciju skrola,
// - pri osvežavanju se uklanja sidro iz adrese (npr. #kontakt), a ako pregledač
//   ipak skoči na sekciju, strana se vraća na vrh (osim ako je posetilac već počeo da skroluje).
const script = `(function () {
  try {
    history.scrollRestoration = "manual";
    var nav = performance.getEntriesByType("navigation")[0];
    if (!nav || nav.type !== "reload" || !location.hash) return;
    history.replaceState(history.state, "", location.pathname + location.search);
    var touched = false;
    ["wheel", "touchstart", "keydown"].forEach(function (type) {
      addEventListener(type, function () { touched = true; }, { once: true, passive: true });
    });
    addEventListener("load", function () {
      if (!touched) scrollTo({ top: 0, behavior: "instant" });
    });
  } catch (error) {}
})();`;

/** Posle osvežavanja (refresh) strana uvek kreće od vrha. */
export function ScrollReset() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
