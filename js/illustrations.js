/* ==========================================================================
   Hand-drawn illustrations and icons (one SVG sprite, shared by every page).
   Use them in HTML with:  <svg class="doodle"><use href="#d-sun"/></svg>
   They draw in "currentColor", so their color comes from CSS (--ink).
   ========================================================================== */

(function () {
  // Papel picado: a string of cut-paper flags, built in a loop.
  var picado = "M2 7c48 5 98 6 148 3s100-5 148-1";
  for (var i = 0; i < 6; i++) {
    var x = 8 + i * 49;
    picado +=
      " M" + x + " 9v33l6 6 6-6 6 6 6-6 6 6 6-6V9" +   // flag with zig-zag edge
      " M" + (x + 18) + " 17l5 7-5 7-5-7z" +           // diamond cut-out
      " M" + (x + 6) + " 15h4M" + (x + 26) + " 15h4" + // small slits
      " M" + (x + 7) + " 34l3 2M" + (x + 29) + " 34l-3 2";
  }

  var sprite =
    '<svg xmlns="http://www.w3.org/2000/svg" style="display:none">' +

    /* ---------- Logo: sun rising over two waves ---------- */
    '<symbol id="i-logo" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M17 37c.6-8.4 7-15.2 15.3-15 8.1.3 14.4 6.9 14.7 15.2"/>' +
    '<path d="M32 9.5v6.2M15.8 15.9l4.3 4.6M48.6 15.4l-4.5 4.7M8.5 31.4l6.1.6M55.6 30.8l-6 .9"/>' +
    '<path d="M6 44.5c4.3-3.6 8.1-3.4 11.8.1 3.9 3.6 7.7 3.4 11.5-.2 3.7-3.5 7.6-3.6 11.4 0 3.9 3.6 7.6 3.4 11.6-.1 2.5-2.1 4.8-2.6 7.6-1.4"/>' +
    '<path d="M10.5 53.3c3.4-2.7 6.5-2.6 9.6.2 3.3 2.9 6.4 2.7 9.6-.1 3-2.6 6.3-2.7 9.4.1 3.2 2.8 6.4 2.7 9.7-.2 2.2-1.8 4.3-2.2 6.5-1.2"/>' +
    '</g></symbol>' +

    /* ---------- Wave divider (stretches to any width) ---------- */
    '<symbol id="d-waves" viewBox="0 0 600 40" preserveAspectRatio="none"><g fill="none" stroke="currentColor" stroke-linecap="round" vector-effect="non-scaling-stroke">' +
    '<path stroke-width="2.4" vector-effect="non-scaling-stroke" d="M2 21c18-13 38-14 58-1s40 13 61 0 39-14 59-1 41 12 60 1 39-13 60-2 40 14 59 1 39-12 61-1 39 13 58 0 40-14 61-1 40 12 60 1"/>' +
    '<path stroke-width="1.4" opacity=".55" vector-effect="non-scaling-stroke" d="M14 31c12-6 24-7 34-1M74 32c13-7 25-6 35 0M136 31c11-6 23-6 33 1M195 32c13-7 24-6 34 0M256 31c12-6 24-6 34 1M316 32c12-7 24-6 35 0M377 31c12-6 23-6 34 1M437 32c13-7 24-6 34 0M497 31c12-6 24-6 34 1M558 32c11-6 22-6 32 0"/>' +
    '</g></symbol>' +

    /* ---------- Oaxacan sun with spiral and rays ---------- */
    '<symbol id="d-sun" viewBox="0 0 100 100"><g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M50 27c12.6-.4 23.4 9.6 23.1 22.6-.3 12.4-10.4 22.9-23.4 22.6-12.5-.3-22.3-10.3-22.1-23 .2-12.2 9.8-21.9 22.4-22.2"/>' +
    '<path d="M50.5 49.6c-1.6-1.9.6-4.4 2.9-3.5 3.3 1.3 2.8 6.1-.3 7.4-4.4 1.8-9.1-1.7-8.8-6.3.4-6 7.3-9.2 12.4-6.4 6.3 3.4 6.6 12.3 1.4 16.7"/>' +
    '<path d="M80.5 50.8l11.6-.9M71.6 71.1l8.6 8.9M50.8 80.4l-.6 11.7M28.5 71.8l-8.1 8.3M19.6 49.3l-11.8.6M28.2 28.9l-8.4-8.2M49.4 19.6l.5-11.8M71.5 28.4l8.1-8.6"/>' +
    '</g><g fill="currentColor">' +
    '<circle cx="83.3" cy="63.8" r="1.7"/><circle cx="63.8" cy="83.3" r="1.7"/><circle cx="36.2" cy="83.3" r="1.7"/><circle cx="16.7" cy="63.8" r="1.7"/>' +
    '<circle cx="16.7" cy="36.2" r="1.7"/><circle cx="36.2" cy="16.7" r="1.7"/><circle cx="63.8" cy="16.7" r="1.7"/><circle cx="83.3" cy="36.2" r="1.7"/>' +
    '</g></symbol>' +

    /* ---------- Surfboard with a greca (zig-zag) band ---------- */
    '<symbol id="d-board" viewBox="0 0 40 120"><g fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M20 4c9.5 14 13.6 33 13.4 55.5-.2 22-4.6 41.2-13.6 56.5-8.7-15.6-13-34.6-13.1-56.8C6.6 37.4 10.6 18 20 4z"/>' +
    '<path d="M20.2 9.5c.4 34.6.2 68.8-.4 100.8"/>' +
    '<path d="M10.3 40.5l3.3 3.2 3.2-3.4 3.4 3.3 3.2-3.3 3.3 3.3 3.3-3.1M10 47l3.4 3.1 3.2-3.3 3.4 3.3 3.2-3.3 3.3 3.2 3.4-3"/>' +
    '<path d="M16.5 100.5c2.4-1.6 5.3-1.7 7.6.1"/>' +
    '</g></symbol>' +

    /* ---------- Agave ---------- */
    '<symbol id="d-agave" viewBox="0 0 100 92"><g fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M50 84C45 64 35 45 19 31c9 4 18 13 25 24"/>' +
    '<path d="M50 84c-3.6-22-3-46 1.3-70 3 17 3.4 36 .9 54"/>' +
    '<path d="M50 84c6.4-20 17-38 33-52-6 10-12 22-16 34"/>' +
    '<path d="M48 85C39 75 25 69 6 67c13 0 25 3 35 9"/>' +
    '<path d="M52 85c11-9.5 26-15 44-15.5-11 3-22 8-30 14"/>' +
    '<path d="M46 80c-6-13-10-28-11-45M55 80c7-13 12-28 14-46"/>' +
    '<path d="M16 87c21-2.4 46-2.6 68-.4"/>' +
    '</g></symbol>' +

    /* ---------- Palm tree ---------- */
    '<symbol id="d-palm" viewBox="0 0 100 120"><g fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M51 116c-3-26-2-50 4.5-72M57.5 116c-2.4-25-1.2-48 3-71"/>' +
    '<path d="M51.5 100.5l6 1M51.2 86l6.2.6M52 72l6 .2M53.6 58l5.6-.3"/>' +
    '<path d="M58 43c-10-10-24-13-40-8 9 0 17 3 23 8M58 43c-6-14-6-26 2-38-2 10-1 20 3 29M58 43c12-9 26-11 40-5-10-1-19 1-27 6M58 43c-14-2-26 4-34 18 8-6 17-9 26-9M58 43c13 0 24 7 30 20-8-6-16-9-25-9"/>' +
    '<circle cx="54.5" cy="48.5" r="3"/><circle cx="62" cy="49" r="3"/>' +
    '<path d="M28 117c15-2 32-2.4 48-.6"/>' +
    '</g></symbol>' +

    /* ---------- Fish (for the fish board) ---------- */
    '<symbol id="d-fish" viewBox="0 0 92 60"><g fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M8 30c12-14 34-17 52-6 6-6 12-9 21-10-3.4 7-3.4 14.5 0 21.5-9-1-15-4-21-10-18 11-40 8-52-5.5z"/>' +
    '<path d="M30 22c3 5 3 11 0 16M40 21c3 6 3 12 0 18"/>' +
    '</g><circle cx="19" cy="27.5" r="2" fill="currentColor"/></symbol>' +

    /* ---------- Papel picado banner ---------- */
    '<symbol id="d-picado" viewBox="0 0 300 52"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="' + picado + '"/>' +
    '</g></symbol>' +

    /* ---------- Small icons (24×24) ---------- */
    '<symbol id="i-whatsapp" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round" d="M12 3.2a8.8 8.8 0 0 0-7.6 13.2L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z"/><path fill="currentColor" d="M9 8.6c.3-.6.9-.6 1.2 0l.7 1.6c.1.3 0 .6-.2.8l-.5.5c.6 1.3 1.6 2.3 2.9 2.9l.5-.5c.2-.2.5-.3.8-.2l1.6.7c.6.3.6.9 0 1.2-.9.6-2 .8-3 .4-2.6-1-4.5-2.9-5.5-5.5-.4-1-.2-2.1.5-3z"/></symbol>' +
    '<symbol id="i-instagram" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></symbol>' +
    '<symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.3"/></g></symbol>' +
    '<symbol id="i-bed" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18.5V6.5M3 13.5h18v5M21 13.5V11a2.5 2.5 0 0 0-2.5-2.5H11v5"/><circle cx="7" cy="10.8" r="1.8"/></g></symbol>' +
    '<symbol id="i-snow" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M9.5 4.5 12 6.5l2.5-2M9.5 19.5 12 17.5l2.5 2"/></g></symbol>' +
    '<symbol id="i-fan" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 12c0-4 1-7.5 3.5-7.5S18 8 12 12zM12 12c3.5 2 5.8 4.8 4.6 7S10.8 18.6 12 12zM12 12c-3.5 2-7 2.6-8.1.4S6.4 8.6 12 12z"/></g><circle cx="12" cy="12" r="1.4" fill="currentColor"/></symbol>' +
    '<symbol id="i-shower" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M5 21V8a4 4 0 0 1 8 0M9.5 8h7M11 12v.6M14 12v.6M17 12v.6M12.5 15.5v.6M15.5 15.5v.6M14 19v.6"/></g></symbol>' +
    '<symbol id="i-pot" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16M5 11v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5M2 11h2M20 11h2M9 7.5c0-1.2 1.2-1.3 1.2-2.6M13.5 7.5c0-1.2 1.2-1.3 1.2-2.6"/></g></symbol>' +
    '<symbol id="i-van" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 16.5V7.5h11.5l4 4.5h3.5v4.5M14 7.5V12h4M9 16.5h6"/><circle cx="6.5" cy="17" r="2"/><circle cx="17.5" cy="17" r="2"/></g></symbol>' +
    '<symbol id="i-lesson" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="4.8" r="2"/><path d="M10 7.5v5l-3.2 3.5M10 12.5l3.5 3M6.5 10h7.5M3 20c6-1.8 12-1.8 18 0"/></g></symbol>' +
    '<symbol id="i-board" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 19.5C3.8 13 10 4.6 19.5 4.5c.6 7-6 15.2-15 15z"/><path d="M7 17 17 7"/></g></symbol>' +
    '<symbol id="i-arrow" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" d="M5 12.5l4.5 4.5L19 7"/></symbol>' +
    '<symbol id="i-wave" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" d="M2 10c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 4.2-2.3 5 0M2 16c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 4.2-2.3 5 0"/></symbol>' +
    '<symbol id="i-info" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.6v.4"/></g></symbol>' +

    '</svg>';

  var holder = document.createElement("div");
  holder.innerHTML = sprite;
  document.body.insertBefore(holder.firstChild, document.body.firstChild);
})();
