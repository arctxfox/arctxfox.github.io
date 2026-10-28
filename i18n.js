/* English <-> Japanese switcher. Add new translations to the JA list below.
   Text with no entry simply stays in English. */
(()=>{
const JA={
"Home":"ホーム",
"Projects":"プロジェクト",
"Web apps":"Webアプリ",
"Tools":"ツール",
"Color picker":"カラーピッカー",
"Games":"ゲーム",
"Lab":"ラボ",
"Experiments":"実験",
"About":"プロフィール",
"About me":"自己紹介",
"Skills":"スキル",
"Contact":"お問い合わせ",
"Hi, I build things in the snow.":"こんにちは、雪の中で物作りをしています。",
"Welcome to my den. Here you will find every project I make, all in one place.":"私の巣穴へようこそ。作ったプロジェクトをすべてここにまとめています。",
"See my projects":"プロジェクトを見る","Latest.exe":"最新作.exe",
"Latest projects":"最新のプロジェクト",
"Open project":"プロジェクトを開く",
"Apps that run in your browser. Open one to try it.":"ブラウザで動くアプリです。開いて試してみてください。",
"Small utilities that save time.":"時間を節約できる小さなユーティリティです。",
"Little games, mostly about snow.":"雪をテーマにした小さなゲームです。",
"Unfinished ideas and tests.":"未完成のアイデアとテストです。",
"Empty folder":"空のフォルダ",
"Nothing here yet. Add a project to the PROJECTS list in script.js.":"まだ何もありません。script.js の PROJECTS リストにプロジェクトを追加してください。",
"Hello!":"こんにちは！",
"I am a developer who likes making small, useful and playful things. Replace this text with your own story: what you build, why, and what you are learning right now.":"小さくて便利で遊び心のあるものを作るのが好きな開発者です。このテキストをあなた自身のストーリー（何を作っているか、なぜ作るのか、今何を学んでいるか）に置き換えてください。",
"Like the arctic fox, I adapt to wherever the project takes me.":"ホッキョクギツネのように、プロジェクトが向かう先に合わせて柔軟に適応します。",
"Loading skills...":"スキルを読み込み中...",
"HTML and CSS":"HTMLとCSS",
"Git and GitHub":"GitとGitHub",
"New message":"新規メッセージ",
"Fastest way: open an issue or email me. This form opens your mail app.":"いちばん早い方法：issue を作成するかメールをください。このフォームはメールアプリを開きます。",
"Subject":"件名",
"Message":"メッセージ",
"Send email":"メールを送信",
"Click or drag on the wheel to choose a colour. Use the slider to make it lighter or darker.":"ホイールをクリックまたはドラッグして色を選びます。スライダーで明るさを調整できます。",
"Colors.exe":"カラー.exe",
"Brightness":"明るさ",
"Copy":"コピー",
"Aurora Notes":"オーロラノート",
"A tiny note-taking app that lives in your browser.":"ブラウザ上で動く小さなメモアプリです。",
"Snowdrift Weather":"スノードリフト天気",
"Weather dashboard with animated icons.":"アニメーションアイコン付きの天気ダッシュボードです。",
"Color Wheel Picker":"カラーホイールピッカー",
"Pick any colour from a wheel and copy its HEX and RGB.":"ホイールから好きな色を選び、HEXとRGBをコピーできます。",
"Den Converter":"巣穴コンバーター",
"Unit and colour converter for quick dev work.":"開発作業向けの単位・色コンバーターです。",
"Lemming Run":"レミングラン",
"A snowy endless runner made with canvas.":"Canvasで作った雪のエンドレスランナーです。",
"Particle Blizzard":"パーティクル・ブリザード",
"Experiment: 10k particles with a WebGL shader.":"実験：WebGLシェーダーによる1万個のパーティクル。",
};
Object.assign(JA,window.JA_EXTRA||{});
const PARTS=[["Built with HTML, CSS and JS","HTML・CSS・JSで制作"]];
const MSG={"Press Ctrl+C to copy":"Ctrl+C でコピーしてください"};
let lang="en";try{lang=localStorage.getItem("lang")==="ja"?"ja":"en"}catch{}
const tr=t=>{const m=t.match(/^(.*?)\s*▾$/);if(m)return JA[m[1]]?JA[m[1]]+" ▾":t;
 if(JA[t])return JA[t];let r=t;PARTS.forEach(([a,b])=>r=r.replace(a,b));return r};
const nodes=[];
const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>/^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentNode.tagName)||!n.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
while(w.nextNode())nodes.push([w.currentNode,w.currentNode.nodeValue]);
const parts=document.title.split(" | "),orig=document.title;
const css=document.createElement("style");
css.textContent='html[lang=ja]{--font:"Nunito","Noto Sans JP","Yu Gothic","Hiragino Sans",Meiryo,sans-serif;--ui:"Noto Sans JP","Yu Gothic UI","Hiragino Sans",Meiryo,sans-serif}'+
'.lang{margin-left:.6rem;font:700 .85rem var(--ui);color:var(--deep);padding:.4rem .9rem;border-radius:999px;cursor:pointer;border:1px solid var(--sea);background:linear-gradient(#fff,#bfe7fb 50%,#8fd3f5 51%,#c7ecfd);box-shadow:inset 0 1px 0 #fff,0 2px 6px rgba(27,134,201,.4);white-space:nowrap}.lang:hover{filter:brightness(1.06)}';
document.head.appendChild(css);
const btn=document.createElement("button");btn.className="lang";btn.type="button";
document.querySelector(".bar").appendChild(btn);
function apply(){
 document.documentElement.lang=lang;
 nodes.forEach(([n,en])=>{if(lang==="ja"){const l=en.match(/^\s*/)[0],r=en.match(/\s*$/)[0];n.nodeValue=l+tr(en.trim())+r}else n.nodeValue=en});
 document.title=lang==="ja"?[tr(parts[0]),...parts.slice(1)].join(" | "):orig;
 btn.textContent=lang==="ja"?"English":"日本語";btn.setAttribute("aria-label",lang==="ja"?"Switch to English":"日本語に切り替え");
 if(lang==="ja"&&!document.getElementById("jpfont")){const k=document.createElement("link");k.id="jpfont";k.rel="stylesheet";k.href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap";document.head.appendChild(k)}}
btn.onclick=()=>{lang=lang==="ja"?"en":"ja";try{localStorage.setItem("lang",lang)}catch{}apply()};
/* live message on the colour picker page */
const msg=document.getElementById("msg");
if(msg)new MutationObserver(()=>{if(lang!=="ja")return;const t=msg.textContent;
 if(t.startsWith("Copied "))msg.textContent="コピーしました "+t.slice(7);else if(MSG[t])msg.textContent=MSG[t]}).observe(msg,{childList:true,characterData:true,subtree:true});
apply();
})();
