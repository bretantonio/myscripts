// ==UserScript==
// @name         Auto CPUCAP
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  auto save coins
// @author       Bret Joseph
// @homepageURL  https://github.com/bretantonio/myscripts/blob/master/coinminer.js
// @updateURL    https://raw.githubusercontent.com/bretantonio/myscripts/master/coinminer.js
// @match        http*://*cpucap.org/terminal
// @grant        none
// ==/UserScript==

setInterval(function(){_TerminalUpdate();}, 60000);
_TerminalSound();
