Array.from(document.querySelectorAll('button.offer-cta[title="Add to Card"]'))
.map((button) => () => {
button.click();
return new Promise((r) => setTimeout(r, 2000));
})
.reduce(
(promise, func) =>
promise.then((result) =>
func().then(Array.prototype.concat.bind(result)),
),
Promise.resolve([]),
); 
