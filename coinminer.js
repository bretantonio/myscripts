// ==UserScript==
// @name         Coin Miner autosave
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  auto save coins
// @author       Bret Joseph
// @homepageURL  https://raw.githubusercontent.com/bretantonio/myscripts/master/coinminer.js
// @updateURL    https://raw.githubusercontent.com/bretantonio/myscripts/master/coinminer.js
// @match        https://coinminer.mobi/terminal
// @match        http://coinminer.mobi/terminal
// @match        https://ltcminer.pw/terminal
// @match        http://ltcminer.pw/terminal
// @match        https://ethminer.cash/terminal
// @match        http://ethminer.cash/terminal
// @grant        none
// ==/UserScript==

setInterval(function(){_TerminalSave();}, 60000);
_TerminalSound();
