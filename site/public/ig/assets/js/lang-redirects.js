// Local override of fhir2.base.template 0.1.0's language redirect (CC0-1.0).
// The upstream loop returns before its fallback for non-English browsers.
(function () {
  "use strict";
  var available = typeof langs === "undefined" ? [] : langs.filter(function (language) {
    return /^[a-z]{2,3}(?:-[A-Za-z0-9]+)*$/.test(language);
  });
  if (!available.length) return;
  var preferred = (navigator.language || navigator.userLanguage || "").toLowerCase();
  var selected = available.find(function (language) {
    var normalized = language.toLowerCase();
    return preferred === normalized || preferred.indexOf(normalized + "-") === 0;
  }) || available[0];
  var page = window.location.pathname.split("/").pop() || "index.html";
  window.location.replace(selected + "/" + page + window.location.search + window.location.hash);
})();
