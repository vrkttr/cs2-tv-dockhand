const players=[['David',18,11,92],['Kevin',15,13,84],['Max',12,14,77],['Alex',11,12,74],['Micha',10,15,69],['Tom',9,13,66],['Chris',7,14,61],['Ben',6,15,58]];
document.getElementById('players').innerHTML=players.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td>${(p[1]/p[2]).toFixed(2)}</td></tr>`).join('');
const kills=[['David','Kevin','AK-47'],['Max','Chris','M4A1-S'],['Kevin','Ben','AWP'],['Alex','Tom','Glock-18']];
document.getElementById('feed').innerHTML=kills.map(k=>`<div class="kill"><b>${k[0]}</b><span class="muted"> killed </span><b>${k[1]}</b><span class="weapon">${k[2]}</span>☠</div>`).join('');
let seconds=102;setInterval(()=>{seconds=(seconds+1439)%1440;const m=Math.floor(seconds/60),s=seconds%60;document.getElementById('timer').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`},1000);
function clock(){document.getElementById('clock').textContent=new Date().toLocaleTimeString('de-DE',{hour:'2-digit',minute:'2-digit',second:'2-digit'})}clock();setInterval(clock,250);
