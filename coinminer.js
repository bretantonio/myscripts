// ==UserScript==
// @name         Coin Miner autosave
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  auto save coins
// @author       Bret Joseph
// @homepageURL  https://github.com/bretantonio/myscripts/blob/master/coinminer.js
// @updateURL    https://raw.githubusercontent.com/bretantonio/myscripts/master/coinminer.js
// @match        https://bitcoin.cpucap.com/terminal
// @match        http://bitcoin.cpucap.com/terminal
// @match        https://litecoin.cpucap.com/terminal
// @match        http://litecoin.cpucap.com/terminal
// @match        https://ethereum.cpucap.com/terminal
// @match        http://ethereum.cpucap.com/terminal
// @grant        none
// ==/UserScript==

setInterval(function(){_TerminalSave();}, 60000);
_TerminalSound();
