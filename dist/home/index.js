"use strict";(self.webpackChunkceramic_pro=self.webpackChunkceramic_pro||[]).push([[177],{172:()=>{new(function(){function t(t){this.container=document.querySelector(t),this.display=document.querySelector(t+"-display"),this.menu=document.querySelector(t+"-menu"),this.options=document.querySelectorAll(t+"-option")}return t.prototype.init=function(){var t=this;this.display.addEventListener("click",(function(){return t.toggle()})),this.options.forEach((function(e,s){0===s&&t.setValue(e.dataset.value,e.textContent),e.addEventListener("click",(function(){t.setValue(e.dataset.value,e.textContent)}))})),document.body.addEventListener("click",(function(e){t.container.contains(e.target)||t.close()}))},t.prototype.open=function(){this.display.classList.add("isOpen"),this.menu.classList.add("isOpen")},t.prototype.close=function(){this.display.classList.remove("isOpen"),this.menu.classList.remove("isOpen")},t.prototype.toggle=function(){this.display.classList.toggle("isOpen"),this.menu.classList.toggle("isOpen")},t.prototype.setValue=function(t,e){this.display.setAttribute("data-value",t),this.display.textContent=e,this.value={value:t,label:e},this.close()},t.prototype.getValue=function(){return this.value},t}())("select-lang").init()}},t=>{t(t.s=172)}]);