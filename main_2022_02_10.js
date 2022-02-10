/*const now = Date.now();
console.log('now-', now);

const bd = new Date(1982,08,18);
console.log ('bd - ', bd);
console.log('bd -', bd.getTime());
const delta = (now -bd) * 1000;
console.log('delta-', delta);*/

const now = new Date();
const newDate = now.getTime() + 1000000000000;
console.log(newDate);
const d = new Date(newDate);
console.log(d);



 