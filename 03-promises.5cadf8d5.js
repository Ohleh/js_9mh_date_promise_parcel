!function(){var e=document.querySelector("form"),o=document.createElement("ul");function n(e,o){console.log(o);var n=Math.random()>.3;return new Promise((function(t,l){setTimeout((function(){n?(console.log("delay",o),t({position:e,delay:o,shouldResolve:n})):l({position:e,delay:o,shouldResolve:n})}),o)}))}e.addEventListener("submit",(function(t){o.textContent="",t.preventDefault();for(var l=t.target.elements,c=Number(l.delay.value),i=Number(l.step.value),a=Number(l.amount.value),s=1,u=c;s<=a;s++,u+=i)n(s,u).then((function(e){var n=e.position,t=e.delay,l=e.shouldResolve;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms. ").concat(l,".")),o.innerHTML+="<li>✅ Fulfilled promise ".concat(n," in ").concat(t,"ms. ").concat(l,".</li>")})).catch((function(e){var n=e.position,t=e.delay,l=e.shouldResolve;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms. ").concat(l,".")),o.innerHTML+="<li>❌ Fulfilled promise ".concat(n," in ").concat(t,"ms. ").concat(l,".</li>")}));e.after(o)}))}();
//# sourceMappingURL=03-promises.5cadf8d5.js.map