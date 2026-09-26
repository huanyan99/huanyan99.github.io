/* Language switch: EN default, ZH secondary. */
(function () {
    var STORAGE_KEY = "jhy-lang";
    var html = document.documentElement;

    function apply(lang) {
        html.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
        document.querySelectorAll("[data-en]").forEach(function (el) {
            var text = lang === "zh" ? el.getAttribute("data-zh") : el.getAttribute("data-en");
            if (text != null) el.innerHTML = text;
        });
        document.querySelectorAll(".lang-switch button").forEach(function (btn) {
            btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
        });
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    var saved = "en";
    try {
        saved = localStorage.getItem(STORAGE_KEY) || "en";
    } catch (e) {}
    apply(saved === "zh" ? "zh" : "en");

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
        btn.addEventListener("click", function () {
            apply(btn.getAttribute("data-lang"));
        });
    });
})();
