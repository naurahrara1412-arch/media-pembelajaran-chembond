const sectionIds=['beranda','peta','biodata','konsep','konsep-lanjutan','audio-visual','simulasi','latihan','ringkasan'];
const stages=[
 ['Konfigurasi elektron nitrogen','Nitrogen memiliki 2 elektron pada kulit K dan 5 elektron pada kulit L. Tiga elektron valensi dapat membentuk ikatan dengan tiga atom hidrogen, sedangkan dua elektron lainnya menjadi pasangan elektron bebas.'],
 ['Tahap 1 — Atom N dan tiga atom H','Kita mulai membentuk amonia, NH₃. Satu atom nitrogen akan berikatan dengan tiga atom hidrogen.'],
 ['Tahap 2 — Berbagi elektron','Setiap atom hidrogen berbagi satu elektron dengan nitrogen. Terbentuk tiga pasangan elektron ikatan N–H.'],
 ['Tahap 3 — Molekul NH₃ terbentuk','Amonia, NH₃, terbentuk dengan tiga ikatan kovalen tunggal N–H. Satu pasangan elektron bebas tetap berada pada nitrogen. Sekarang kita lanjutkan ke pembentukan ion amonium.'],
 ['Tahap 4 — NH₃ bertemu H⁺','Ion hidrogen H⁺ mendekati molekul NH₃. Nitrogen pada NH₃ memiliki pasangan elektron bebas yang dapat didonasikan.'],
 ['Tahap 5 — Pasangan elektron didonasikan','Pasangan elektron bebas dari nitrogen bergerak menuju H⁺. Kedua elektron yang membentuk ikatan baru ini berasal dari atom nitrogen.'],
 ['Tahap 6 — Ikatan koordinasi terbentuk','Pasangan elektron dari nitrogen digunakan bersama dengan H⁺. Ikatan N–H keempat terbentuk; nitrogen bertindak sebagai donor dan H⁺ sebagai akseptor.'],
 ['Tahap 7 — Ion NH₄⁺ terbentuk','Hasil akhirnya adalah ion amonium, NH₄⁺, dengan empat ikatan N–H. Proses keseluruhan dapat ditulis NH₃ + H⁺ → NH₄⁺.']
];
let stage=0;
function sceneMarkup(i){
 const chip=`<div class="sim-chip">Tahap ${i+1}/${stages.length}</div>`;
 if(i===0)return chip+`<div class="shell-model"><div class="nucleus">N</div><div class="orbit orbit-k"><span class="electron e1"></span><span class="electron e2"></span></div><div class="orbit orbit-l"><span class="electron e3"></span><span class="electron e4"></span><span class="electron e5"></span><span class="electron e6"></span><span class="electron e7"></span></div><div class="shell-caption">Kulit K = 2 • Kulit L = 5</div></div>`;
 if(i===1)return chip+`<div class="electron-motion scene-pair"><span class="n-center">N</span><span class="moving-h" style="left:8%;top:28%">H</span><span class="moving-h" style="right:8%;top:28%">H</span><span class="moving-h" style="left:46%;bottom:2%">H</span><span class="scene-note">1 atom N + 3 atom H</span></div>`;
 if(i===2)return chip+`<div class="atom-diagram"><span class="h h-left">H</span><span class="bond b-left"></span><span class="n-center">N</span><span class="bond b-right"></span><span class="h h-right">H</span><span class="h h-bottom">H</span><span class="bond b-bottom"></span><span class="free-pair">••</span><small>Elektron digunakan bersama pada tiga ikatan N–H</small></div>`;
 if(i===3)return chip+`<div class="product-scene"><div class="product-ion">NH₃</div><div class="product-bonds"><span>N—H</span><span>N—H</span><span>N—H</span></div><p>3 ikatan kovalen • 1 pasangan elektron bebas pada N</p></div>`;
 if(i===4)return chip+`<div class="electron-motion approaching"><span class="n-center">N</span><span class="free-pair above-n">••</span><span class="moving-h">H⁺</span><span class="motion-label">NH₃ bertemu ion H⁺</span></div>`;
 if(i===5)return chip+`<div class="electron-motion donating"><span class="n-center">N</span><span class="free-pair moving-pair">••</span><span class="moving-h target-h">H⁺</span><span class="motion-arrow">⟶</span><span class="motion-label">Pasangan elektron berasal dari N</span></div>`;
 if(i===6)return chip+`<div class="product-scene"><div class="product-ion">N → H⁺</div><p>Pasangan elektron bebas N membentuk ikatan N–H keempat.</p></div>`;
 return chip+`<div class="product-scene"><div class="product-ion">NH₄⁺</div><div class="product-bonds"><span>N—H</span><span>N—H</span><span>N—H</span><span>N—H</span></div><p>NH₃ + H⁺ → NH₄⁺</p></div>`;
}
function speak(t){
 if(!('speechSynthesis'in window)){return;}
 window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='id-ID';u.rate=.93;u.pitch=1;window.speechSynthesis.speak(u);
}
function setStage(i,autoAudio=true){
 stage=Math.max(0,Math.min(stages.length-1,i));
 document.getElementById('stageLabel').textContent=`Tahap ${stage+1}/${stages.length}`;
 document.getElementById('stageTitle').textContent=stages[stage][0];
 document.getElementById('stageText').textContent=stages[stage][1];
 document.getElementById('simScene').innerHTML=sceneMarkup(stage);
 document.querySelectorAll('.stage-chip').forEach((x,j)=>x.classList.toggle('active',j===stage));
 document.querySelectorAll('.stage-chip').forEach((x,j)=>x.setAttribute('aria-current',j===stage?'step':'false'));
 if(autoAudio && simulationAudioStarted) speak(stages[stage][1]);
}
function nextStage(){setStage(Math.min(stages.length-1,stage+1))}
function prevStage(){setStage(Math.max(0,stage-1))}
function startSimulation(){simulationAudioStarted=true;setStage(stage);}
let simulationAudioStarted=false;
const stagesEl=document.getElementById('stages');
stages.forEach((s,i)=>{const b=document.createElement('button');b.className='stage-chip';b.type='button';b.textContent=`${i+1}. ${s[0]}`;b.onclick=()=>setStage(i);stagesEl.appendChild(b)});
setStage(0,false);
function speakSimulation(){simulationAudioStarted=true;speak(stages[stage][1]);}

function revealPrompt(n){const answer=document.getElementById('prompt'+n);const feedback=document.getElementById('feedback'+n);if(!answer.value.trim()){answer.focus();answer.setCustomValidity('Tuliskan jawaban singkat terlebih dahulu sebelum memeriksa penjelasan.');answer.reportValidity();answer.addEventListener('input',()=>answer.setCustomValidity(''),{once:true});return;}feedback.hidden=false;feedback.classList.add('revealed');const btn=answer.parentElement.querySelector('button');if(btn){btn.disabled=true;btn.textContent='Penjelasan sudah dibuka';}}

function continueFromPrompts(){
 const ids=['prompt1','prompt2','prompt3'];
 const missing=ids.find(id=>!document.getElementById(id).value.trim());
 if(missing){const el=document.getElementById(missing);el.focus();el.setCustomValidity('Jawab ketiga pertanyaan terlebih dahulu.');el.reportValidity();el.addEventListener('input',()=>el.setCustomValidity(''),{once:true});return;}
 ids.forEach((id)=>{const n=id.slice(-1);const fb=document.getElementById('feedback'+n);if(fb){fb.hidden=false;fb.classList.add('revealed');}});
 advanceStep(5);
}
function saveEssays(){
 const ids=['essay1','essay2','essay3'];
 const vals=ids.map(id=>document.getElementById(id).value.trim());
 const missing=vals.findIndex(v=>!v);
 if(missing>=0){const el=document.getElementById(ids[missing]);el.focus();el.setCustomValidity('Isi ketiga jawaban terlebih dahulu.');el.reportValidity();el.addEventListener('input',()=>el.setCustomValidity(''),{once:true});return;}
 try{localStorage.setItem('chemBondEssays',JSON.stringify(vals));}catch(e){}
 const keys=[
  ['ikatan kovalen koordinasi','pasangan elektron','satu atom','donor','akseptor'],
  ['nh3','h+','donor','akseptor','nitrogen','hidrogen'],
  ['5','kulit l','terluar','elektron valensi']
 ];
 const scores=vals.map((v,i)=>{const t=v.toLowerCase().replaceAll('₃','3').replaceAll('₄','4').replaceAll('⁺','+');let hits=keys[i].filter(k=>t.includes(k)).length;return Math.round(hits/keys[i].length*100)});
 const total=Math.round(scores.reduce((a,b)=>a+b,0)/3);
 const result=document.getElementById('essayResults');
 const answers=[
  'Ikatan kovalen koordinasi adalah ikatan kimia ketika pasangan elektron yang dipakai bersama berasal dari satu atom saja.',
  'N pada NH₃ adalah donor karena menyumbangkan pasangan elektron bebas. H⁺ adalah akseptor karena menerima pasangan elektron tersebut. Keduanya membentuk NH₄⁺.',
  'Nitrogen memiliki 5 elektron valensi karena susunan kulitnya K = 2 dan L = 5. Kulit terluarnya adalah L, yang berisi 5 elektron.'
 ];
 result.innerHTML='<h3>Hasil jawabanmu</h3><p><strong>Skor perkiraan: '+total+'/100</strong></p><p>Skor ini berdasarkan kata kunci, jadi bukan penilaian otomatis yang sempurna. Periksa juga contoh jawaban berikut.</p>'+answers.map((a,i)=>'<article><strong>Nomor '+(i+1)+' — kecocokan kata kunci: '+scores[i]+'/100</strong><p><b>Contoh jawaban:</b> '+a+'</p></article>').join('');
 result.hidden=false;
 document.getElementById('essaySaved').textContent=' ✓ Jawaban tersimpan di perangkat ini.';
}

try{
 const saved=JSON.parse(localStorage.getItem('chemBondEssays')||'[]');
 ['essay1','essay2','essay3'].forEach((id,i)=>{if(saved[i])document.getElementById(id).value=saved[i]});
}catch(e){}
let currentStep=1;
function applyLockState(){
 sectionIds.forEach((id,i)=>{
  const el=document.getElementById(id);
  if(el)el.classList.toggle('locked',i+1>currentStep);
 });
 document.querySelectorAll('.topbar nav a').forEach(a=>{
  const id=(a.getAttribute('href')||'').slice(1);
  const idx=sectionIds.indexOf(id)+1;
  const enabled=idx>0&&idx<=currentStep;
  a.classList.toggle('nav-locked',!enabled);
  a.setAttribute('aria-disabled',String(!enabled));
  a.tabIndex=enabled?0:-1;
 });
 updateProgress();
}
function saveStudentBio(event){
 if(event)event.preventDefault();
 const name=document.getElementById('studentName').value.trim();
 const email=document.getElementById('studentEmail').value.trim();
 const school=document.getElementById('studentSchool').value.trim();
 if(!name||!email||!school){document.getElementById('studentBioForm').reportValidity();return false;}
 try{localStorage.setItem('chemBondStudentBio',JSON.stringify({name,email,school}));}catch(e){}
 const status=document.getElementById('bioStatus');if(status)status.textContent='Biodata berhasil disimpan pada perangkat ini.';
 advanceStep(4);return false;
}
function submitStudentBio(){
 const form=document.getElementById('studentBioForm');
 if(!form.reportValidity())return;
 saveStudentBio(null);
}
function loadStudentBio(){
 try{const data=JSON.parse(localStorage.getItem('chemBondStudentBio')||'null');if(!data)return;
 document.getElementById('studentName').value=data.name||'';document.getElementById('studentEmail').value=data.email||'';document.getElementById('studentSchool').value=data.school||'';
 }catch(e){}
}
document.addEventListener('DOMContentLoaded',loadStudentBio);

function goStep(n){
 if(n<1||n>sectionIds.length)return;
 if(n>currentStep+1||n>currentStep)return;
 const el=document.getElementById(sectionIds[n-1]);
 if(el){el.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#'+sectionIds[n-1]);}
}
function advanceStep(n){
 if(n<1||n>sectionIds.length)return;
 if(n===currentStep+1)currentStep=n;
 else if(n>currentStep+1)return;
 applyLockState();
 const el=document.getElementById(sectionIds[n-1]);
 if(el){el.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#'+sectionIds[n-1]);}
}
function restartLearning(){currentStep=1;applyLockState();document.getElementById('beranda').scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#beranda');}
document.querySelectorAll('.slide-step .next-step').forEach(btn=>{
 const old=btn.getAttribute('onclick')||'';
 const match=old.match(/goStep\((\d+)\)/);
 if(match)btn.setAttribute('onclick',`advanceStep(${match[1]})`);
});
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',e=>{
 const id=(a.getAttribute('href')||'').slice(1),idx=sectionIds.indexOf(id)+1;
 if(idx<1||idx>currentStep){e.preventDefault();return;}
 e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#'+id);
}));
currentStep=1;applyLockState();document.body.classList.add('navigation-locked');history.replaceState(null,'','#beranda');
// Pengguliran tetap aktif di dalam slide yang sedang dibuka, tetapi tidak boleh
// membawa pengguna ke slide lain; perpindahan slide hanya melalui tombol.
function activeSlideBounds(){
 const el=document.getElementById(sectionIds[currentStep-1]);
 if(!el)return {top:0,bottom:document.documentElement.scrollHeight};
 const r=el.getBoundingClientRect();
 return {top:r.top+window.scrollY,bottom:r.bottom+window.scrollY};
}
document.addEventListener('wheel',e=>{
 if(e.ctrlKey)return;
 const b=activeSlideBounds(),y=window.scrollY,atTop=y<=b.top+2,atBottom=y+window.innerHeight>=b.bottom-2;
 if((e.deltaY<0&&atTop)||(e.deltaY>0&&atBottom))e.preventDefault();
},{passive:false});
let touchStartY=0;
document.addEventListener('touchstart',e=>{touchStartY=e.touches[0]?.clientY||0},{passive:true});
document.addEventListener('touchmove',e=>{
 const y=e.touches[0]?.clientY||touchStartY,delta=touchStartY-y,b=activeSlideBounds();
 const atTop=window.scrollY<=b.top+2,atBottom=window.scrollY+window.innerHeight>=b.bottom-2;
 if((delta<0&&atTop)||(delta>0&&atBottom))e.preventDefault();
},{passive:false});
document.addEventListener('keydown',e=>{
 if(['TEXTAREA','INPUT'].includes(document.activeElement.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;
 const b=activeSlideBounds(),y=window.scrollY,atTop=y<=b.top+2,atBottom=y+window.innerHeight>=b.bottom-2;
 if((['ArrowUp','PageUp','Home'].includes(e.key)&&atTop)||(['ArrowDown','PageDown','End',' '].includes(e.key)&&atBottom))e.preventDefault();
});
function updateProgress(){
 const pct=Math.round(((currentStep-1)/(sectionIds.length-1))*100);
 const bar=document.getElementById('progressBar'),txt=document.getElementById('progressText');
 if(bar)bar.style.width=pct+'%';if(txt)txt.textContent=`Progres belajar ${pct}%`;
}
addEventListener('scroll',()=>{ /* progres mengikuti tahapan yang sudah dibuka, bukan posisi scroll */});
