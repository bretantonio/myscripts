// ==UserScript==
// @name         Coin Miner autosave
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto save coins
// @author       Bret Joseph
// @match        http*://coinminer.mobi/terminal
// @match        http*://ltcminer.pw/terminal
// @match        http*://ethminer.cash/terminal
// @grant        none
// ==/UserScript==

setInterval(function(){_TerminalSave();}, 60000);
_TerminalSound();
