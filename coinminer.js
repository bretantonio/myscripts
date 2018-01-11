// ==UserScript==
// @name         Coin Miner autosave
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto mine coins from coin miner
// @author       Bret Joseph
// @match        http://coinminer.mobi/terminal
// @grant        none
// ==/UserScript==

setInterval(function(){
    _TerminalSave();}, 60000);
