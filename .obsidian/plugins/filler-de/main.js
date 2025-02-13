/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var x=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var I=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var A=(l,i)=>{for(var t in i)x(l,t,{get:i[t],enumerable:!0})},j=(l,i,t,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of I(i))!T.call(l,n)&&n!==t&&x(l,n,{get:()=>i[n],enumerable:!(e=P(i,n))||e.enumerable});return l};var E=l=>j(x({},"__esModule",{value:!0}),l);var z={};A(z,{default:()=>v});module.exports=E(z);var c=require("obsidian");var b=require("obsidian"),p=class extends b.PluginSettingTab{constructor(t,e){super(t,e);this.plugin=e}display(){let{containerEl:t}=this;t.empty(),t.createEl("h2",{text:"Settings"}),new b.Setting(t).setName("Anthropic API Key").setDesc("Won`t leave your vault").addText(e=>e.setPlaceholder("Enter your key").setValue(this.plugin.settings.anthropicKey).onChange(async n=>{this.plugin.settings.anthropicKey=n,await this.plugin.saveSettings()}))}};var F={anthropicKey:""};var C=require("obsidian");var m={generate_dictionary_entry:`You are an expert linguist specializing in the German language. Your task is to create a detailed dictionary entry for a given German word. Here's the word you need to analyze:

<german_word>
{{german_word}}
</german_word>

Before creating the entry, analyze the word and plan your approach. Break down the word inside <word_breakdown> tags:

1. Identify the part of speech of the word.
2. If it's a verb:
   - Determine if it's trennbar (separable) or untrennbar (inseparable).
   - Identify its tense forms (present, past, perfect).
   - Note any irregular conjugations. -Fill the list of cojugations (Pr\xE4sens, Pr\xE4teritum, Imperativ, Konjunktiv I, Konjunktiv II) 
3. For nouns:
   - Identify the gender (masculine, feminine, or neuter).
   - Determine the declension pattern.
4. For adjectives:
   - Note the comparative and superlative forms.
5. Identify and list examples of each morpheme in the word.
6. Plan which template you'll use based on the part of speech.
7. List the key information you'll need to include in the entry (e.g., pronunciation, conjugations, synonyms, antonyms, translations, morphemes).

It's OK for this section to be quite long.

Now, create the dictionary entry using the appropriate template based on your analysis. Strictly adhere to the format provided in the examples, ensuring no additional text is included that isn't present in the templates. Use the following guidelines:

1. For trennbar verbs:
   - Start with an appropriate emoji
   - Include pronunciation, conjugations, synonyms, antonyms, English translation, morpheme breakdown, and a conjugation table

2. For untrennbar verbs and verbs without prefixes:
   - Follow a similar format to trennbar verbs, adjusting the conjugation details as needed

3. For adjectives:
   - Start with an appropriate emoji
   - Include pronunciation, antonyms, synonyms, English translation, and unique possible forms

4. For nouns:
   - Use \u{1F534} for feminine, \u{1F7E2} for neuter, and \u{1F535} for masculine nouns
   - Include plural form, synonyms, English translation, morpheme breakdown, and unique possible forms

5. For other parts of speech:
   - Create a similar template, adapting the information as appropriate for the specific part of speech

Present only your final entry. Do not present the user with word_breakdown. Do not write to the user your thought process.
<examples>
<example>
<german_word>
verfeinden
</german_word>
<ideal_output>
\u{1F624} [[verfeinden]], [f\u025B\u0250\u032F\u02C8fa\u026A\u032Fndn\u0329] | [[verfeindete]], haben [[verfeindet]]

---

---
= [[zerstreiten]], [[entzweien]]
\u2248 Feindschaft  [[schlie\xDFen]], [[verkrachen]], in Konflikt [[geraten]]
\u2260 [[vers\xF6hnen]], [[vertragen]], [[anfreunden]]

---
to make enemies, to set at odds

---
[[ver]]|[[fein]]|[den]]

---
ich: [[verfeinde]], [[verfeindete]], \u2013, [[verfeinde]], [[verfeindete]]
du: [[verfeindest]], [[verfeindetest]], [[verfeinde]] | [[verfeind]] | [[verfeinde]], [[verfeindest]], [[verfeindetest]]
er/sie/es: [[verfeindet]], [[verfeindete]], \u2013, [[verfeinde]], [[verfeindete]]
wir: [[verfeinden]], [[verfeindeten]], [[verfeinden wir|verfeinden]], [[verfeinden]], [[verfeindeten]]
ihr: [[verfeindet]], [[verfeindetet]], [[verfeindet]], [[verfeindet]], [[verfeindetet]] 

PI: [[verfeindend]], PII: [[verfeindet]], Zu+inf: [[zuverfeinden]]

---
[[verfeinden]] - [[ver]] = [[feinden]] / to make enemies, to set at odds

---
[[Verfehndung]], [[Verfeindung]], [[Feind]], [[feindlich]], [[Feindschaft]]

</ideal_output>
</example>
<example>
<german_word>
Hoffnung
</german_word>
<ideal_output>
\u{1F534} \u{1F54A}\uFE0F die [[Hoffnung]], [\u02C8h\u0254fn\u028A\u014B]
die [[Hoffnungen]]


---


---
= [[Zuversicht]], [[Optimismus]]
\u2248 [[Erwartung]], [[Vertrauen]], [[Glaube]], [[Wunsch]]
\u2260 [[Verzweiflung]], [[Pessimismus]], [[Hoffnungslosigkeit]], [[Resignation]]

---
hope

---
[[Hoff]]|[[nung]]

---
N: die [[Hoffnung]], die [[Hoffnungen]]  
A: die [[Hoffnung]], die [[Hoffnungen]]  
G: der [[Hoffnung]], der [[Hoffnungen]]  
D: der [[Hoffnung]], den [[Hoffnungen]]  

---
[[hoffen]], [[hoffentlich]], [[hoffnungsvoll]], [[hoffnungslos]]
</ideal_output>
</example>
<example>
<german_word>
Busch
</german_word>
<ideal_output>
\u{1F535} \u{1F333} der [[Busch]]
die [[B\\xFCsche]]

---


---
= [[Strauch]], [[Gestr\xE4uch]]
\u2248 [[Geb\xFCsch]], [[Hecke]], [[Geh\xF6lz]]
\u2260 [[Baum]], [[Wiese]], [[Ackerland]], [[\xD6dland]]

---
bush, shrub

---
[[Busch]]

---
N: der [[Busch]], die [[B\xFCsche]]  
A: den [[Busch]], die [[B\xFCsche]]  
G: des [[Busches]], der [[B\xFCsche]]  
D: dem [[Busch]], den [[B\xFCschen]] 

---
buschig, buschieren
</ideal_output>
</example>
<example>
<german_word>
klein
</german_word>
<ideal_output>
\u{1F42D} [[klein]], [\\u02C8kla\\u026A\\u032Fn] \u2260 [[gro\\xDF]]

---


---
= [[kompakt]], [[winzig]], [[gering]]
\u2248 [[niedrig]], [[schmal]], [[zierlich]], [[zart]], [[begrenzt]]
\u2260 [[gro\xDF]], [[riesig]], [[weit]], [[breit]]

---
small, little

---
[[klein]]

---
N: [[klein]], [[kleiner]], [[kleinster]]  
A: [[kleinen]], [[kleineren]], [[kleinsten]]  
G: [[kleiner]], [[kleinerer]], [[kleinster]]  
D: [[kleinem]], [[kleinerem]], [[kleinstem]]  
F: [[kleine]], [[kleinere]], [[kleinste]]  
N: [[kleines]], [[kleineres]], [[kleinstes]]  
P: [[kleinen]], [[kleineren]], [[kleinsten]]  

---
[[Kleinheit]], [[kleinlich]], [[kleinmachen]]
</ideal_output>
</example>
<example>
<german_word>
anzurufen
</german_word>
<ideal_output>
\u{1F4DE} [[anrufen]], [\u02C8an\u02A6u\u02CC\u0281u\u02D0f\u0259n] | [[rief an]], haben [[angerufen]]

---

---
= [[telefonieren]], [[kontaktieren]], [[anklingeln]]
\u2248 [[sich melden]], [[Kontakt aufnehmen]], [[durchklingeln]]
\u2260 [[ignorieren]], [[ablehnen]], [[auflegen]], [[beenden]]

---
to call, to phone

---
[[an]]|[[ru]]|[[fen]]

---
ich: [[rufe an]], [[rief an]], \u2013, [[rufe an]], [[riefe an]]
du: [[rufst an]], [[riefst an]], [[rufe an]] | [[ruf an]], [[rufest an]], [[riefest an]]
er/sie/es: [[ruft an]], [[rief an]], \u2013, [[rufe an]], [[riefe an]]
wir: [[rufen an]], [[riefen an]], [[rufen wir an|rufen an]], [[rufen an]], [[riefen an]]
ihr: [[ruft an]], [[rieft an]], [[ruft an]], [[rufet an]], [[riefet an]]

PI: [[anrufend]], PII: [[angerufen]], Zu+inf: [[anzurufen]]

---
[[anrufen]] - [[an]] = [[rufen]] / to call, to phone

---
[[Anruf]], [[Anrufer]], [[Anruferin]], [[anrufbar]], [[Anrufbeantworter]]
</ideal_output>
</example>
<example>
<german_word>
st\xE4ndigen
</german_word>
<ideal_output>
\u{1F570}\uFE0F [[st\xE4ndig]], [\u02C8\u0283t\u025Bnd\u026A\xE7] \u2260 [[selten]]

---


---
= [[fortw\xE4hrend]], [[dauerhaft]], [[andauernd]]
\u2248 [[permanent]], [[kontinuierlich]], [[best\xE4ndig]], [[ununterbrochen]], [[pausenlos]]
\u2260 [[selten]], [[gelegentlich]], [[unregelm\xE4\xDFig]], [[sporadisch]]

---
constantly, continuously, persistently, perpetually

---
[[st\xE4n]]|[[dig]]

---
N: [[st\xE4ndig]], [[st\xE4ndiger]], [[st\xE4ndigster]]  
A: [[st\xE4ndigen]], [[st\xE4ndigeren]], [[st\xE4ndigsten]]  
G: [[st\xE4ndigen]], [[st\xE4ndigeren]], [[st\xE4ndigsten]]  
D: [[st\xE4ndigem]], [[st\xE4ndigeren]], [[st\xE4ndigstem]]  
F: [[st\xE4ndige]], [[st\xE4ndigere]], [[st\xE4ndigste]]  
N: [[st\xE4ndiges]], [[st\xE4ndigeres]], [[st\xE4ndigstes]]  
P: [[st\xE4ndigen]], [[st\xE4ndigeren]], [[st\xE4ndigsten]]  

---
[[stehen]], [[St\xE4ndigkeit]], [[zust\xE4ndig]], [[anst\xE4ndig]], [[best\xE4ndig]], [[aufst\xE4ndig]]



</ideal_output>
</example>
<example>
<german_word>
traurig
</german_word>
<ideal_output>
\u{1F622} [[traurig]], [\u02C8t\u0281a\u028A\u032F\u0281\u026A\xE7]
nicht [[fr\xF6hlich]]

---


---
= [[betr\xFCbt]], [[bek\xFCmmert]], [[niedergeschlagen]]
\u2248 [[melancholisch]], [[wehm\xFCtig]], [[bedr\xFCckt]]
\u2260 [[fr\xF6hlich]], [[gl\xFCcklich]], [[heiter]], [[vergn\xFCgt]]

---
sad, sorrowful

---
[[trau]]|[[rig]]

---
N: [[traurig]], [[trauriger]], [[traurigster]]  
A: [[traurigen]], [[traurigeren]], [[traurigsten]]  
G: [[trauriger]], [[traurigerer]], [[traurigster]]  
D: [[traurigem]], [[traurigerem]], [[traurigstem]]  
F: [[traurige]], [[traurigere]], [[traurigste]]  
N: [[trauriges]], [[traurigeres]], [[traurigstes]]  
P: [[traurigen]], [[traurigeren]], [[traurigsten]]  

---
[[Trauer]], [[trauern]], [[Traurigkeit]], [[betrauern]], [[trauernd]]
</ideal_output>
</example>
<example>
<german_word>
obwohl
</german_word>
<ideal_output>
\u{1F517} [[obwohl]], [\u0254p\u02C8vo\u02D0l]

---


---
= [[obgleich]], [[wenngleich]], [[obschon]]
\u2248 [[dennoch]], [[gleichwohl]], [[trotzdem]], [[nichtsdestotrotz]]
\u2260 [[weil]], [[denn]], [[deshalb]], [[daher]]

---
although, even though, despite

---
[[ob]]|[[wohl]]

---
[[trotz]], [[obschon]], [[obzwar]], [[wiewohl]], [[obgleich]]
</ideal_output>
</example>
<example>
<german_word>
Rechercheergebnisse
</german_word>
<ideal_output>
\u{1F7E2} \u{1F4C4} das [[Rechercheergbenis]], [re\u02C8\u0283\u025Br\u0283\u0259\u0294\u025B\u0250\u032F\u0261e\u02D0pn\u026As]
die [[Rechercheergbnisse]]

---


---
= [[Untersuchungsergebnis]], [[Forschungsergebnis]]
\u2248 [[Ergebnis]], [[Resultate]], [[Erkenntnisse]], [[Befund]]
\u2260 [[Hypothese]], [[Vermutung]], [[Spekulation]]

---
research result, findings

---
[[Recher\xADche]]+[[ergeb\xADnis]]
[[Re]]|[[cher]]|[[che]]|[[er]]|[[geb]]|[[nis]]

---
N: das [[Rechercheergbenis]], die [[Rechercheergbnisse]]  
A: das [[Rechercheergbenis]], die [[Rechercheergbnisse]]  
G: des [[Rechercheergbnis\xADses]], der [[Rechercheergbnisse]]  
D: dem [[Rechercheergbnis]], den [[Rechercheergbnissen]]  

---
[[recherchieren]], [[Recherche]], [[ergebnisorientiert]], [[Forschung]]
</ideal_output>
</example>
</examples>

`,determine_infinitive_and_pick_emoji:`Given a german word, determine its infinitive form and pick an appropriate emoji to represent it. If the word is a noun, determin it's gender and use \u{1F535} for der,  \u{1F534} for die, if \u{1F7E2} for das. Do not write anything else, just the infinitive and an emoji. given "brutzelt"   "\u{1F373}[[brutzeln]]". Given "gesorgt" reply with "\u{1F914} [[sorgen]]". Given "Hoffnungen" reply with "\u{1F91E} \u{1F534} die [[Hoffnung]]. Given "eisigen", reply with "\u{1F976} [[eisig]]. I a word can be a form of multiple parts of speach, list all options, separated with |. For expample, given "vergangene", reply with "\u{1F570}\uFE0F, [[vergangen]] | \u{1F570}\uFE0F, [[vergehen]]. Given "Nieser", reply with "\u{1F927} [[niesen]] | \u{1F535} \u{1F927} der [[Nieser]]. Gigen "klares", reply with "\u{1F60C} [[kl\xE4ren]] | \u{1F60C} [[klar]] | \u{1F60C} \u{1F7E2} das [[Klare]]"`,make_brackets:`Process the given German text and generate output following these rules:

For verbs:
a. If the verb is in its basic form (infinitive), enclose it in double square brackets: [[infinitive]]
b. If the verb is not in its basic form, use this format: [[infinitive|encountered form]]
b. If the verb is trenbarren, add the prefix to the infinitive: [[prefixed infinitive|encountered form]]
For nouns:
a. If the noun is singular, enclose it in double square brackets: [[singular form]]
b. If the noun is plural, use this format: [[singular form|plural form]]
For adjectives:
a. If the adjective is in its basic form, enclose it in double square brackets: [[basic form]]
b. If the adjective is not in its basic form, use this format: [[basic form|encountered form]]
Ignore haben/sein, articles (definite and indefinite), names, proper nouns and pronomen

<example>
Der flei\xDFige Student f\xE4ngt an, das schwierige Buch zu lesen, das sein Lehrer empfohlen hat.
Der [[flei\xDFig|flei\xDFige]] [[Student]] [[anfangen|f\xE4ngt]] an, das [[schwierig|schwierige]] [[Buch]] zu [[lesen]], das sein [[Lehrer]] [[empfehlen|empfohlen]] hat.
</example>

<example>
(Schubst Sokka weg)\xA0Genau, er ist bestimmt ein Spion der Feuermarine! Das sieht man schon an dem furchtbar b\xF6sen Blick in seinen Augen!
([[wegschubsen|Schubst]] [[schubsen|Sokka]] weg) Genau, er ist [[bestimmt]] ein [[Spion]] der [[Feuermarine]]! Das [[sehen|sieht]] man [[schon]] an dem [[furchtbar|furchtbare]] [[b\xF6se|b\xF6sen]] [[Blick]] in seinen [[Auge|Augen]]!
</example>

<example>
Keine Angst. Mit Wasser kriegt man das wieder ab. Und, wohnt ihr hier in der Gegend?
Keine [[Angst]]. Mit [[Wasser]] [[abkriegen|kriegt]] man das wieder ab. Und, [[wohnen|wohnt]] ihr hier in der [[Gegend]]?
</example>

<example>
und ri\xDF ihnen die Fl\xFCgel aus.  
und [[ausrei\xDFen|ri\xDF]] ihnen die [[Fl\xFCgel]] aus.
</example>

<example>
Er schlug die St\xFChl und V\xF6gel tot,  
Er [[totschlagen|schlug]] die [[Stuhl|St\xFChl]] und [[Vogel|V\xF6gel]] tot,
<example>
</example>

<example>
So hab ich mich schon fr\xFCh gezwungen  
So hab ich mich [[schon]] [[fr\xFCh]] [[zwingen|gezwungen]]
<example>


The output should only contain the processed text, without explanations or additional content. Ensure grammatical accuracy in the final output.
`,translate_text:`Translate the given German text to English. The translation should be staying true to the original meaning. When possible, mimic german sentance structure. Only provide the translation, no explanations or additional content.

<example>
input:
Der flei\xDFige Student f\xE4ngt an, das schwierige Buch zu lesen.
output:
The diligent student begins the difficult book to read.
</example>

<example>
input:
Keine Angst. Mit Wasser kriegt man das wieder ab.
output:
No worry. With water can one wash it off.
</example>`};var w=class{constructor(i){this.settings=i}async fetchTemplate(i){return this.makeRequest(i,m.generate_dictionary_entry)}async determineInfinitiveAndEmoji(i){return this.makeRequest(i,m.determine_infinitive_and_pick_emoji)}async makeBrackets(i){return this.makeRequest(i,m.make_brackets)}async translateText(i){return this.makeRequest(i,m.translate_text)}async makeRequest(i,t){let e="https://api.anthropic.com/v1/messages",n={"Content-Type":"application/json","x-api-key":this.settings.anthropicKey,"anthropic-version":"2023-06-01"},a={model:"claude-3-5-haiku-20241022",max_tokens:1024,system:[{type:"text",text:t,cache_control:{type:"ephemeral"}}],messages:[{role:"user",content:i}]};try{let r=await(0,C.requestUrl)({url:e,method:"POST",contentType:"application/json",body:JSON.stringify(a),headers:n});return JSON.stringify(r)}catch(r){return r+`

`+JSON.stringify({url:e,method:"POST",headers:n,body:a})}}};var g=require("obsidian"),k=class{constructor(i){this.vault=i}async appendToFile(i,t){let e=this.vault.getAbstractFileByPath(i);if(!e){try{await this.vault.create(i,t)}catch(n){new g.Notice(`Error creating file: ${n.message}`)}return}if(!(e instanceof g.TFile)){new g.Notice(`File ${i} does not exist or is not a valid file!`);return}try{let a=await this.vault.read(e)+t;await this.vault.modify(e,a)}catch(n){new g.Notice(`Error appending to file: ${n.message}`)}}async doesFileContainContent(i,t){let e=this.vault.getAbstractFileByPath(i);return!e||!(e instanceof g.TFile)?null:(await this.vault.read(e)).includes(t)}};var v=class extends c.Plugin{async onload(){await this.loadSettings(),this.apiService=new w(this.settings),this.fileService=new k(this.app.vault),this.addCommand({id:"backlink-all-to-current-file",name:"Add backlinks to the current file in all referenced files",editorCallback:async(t,e)=>{var S,_;let n=(S=e.file)==null?void 0:S.name;if(!e.file||!n){new c.Notice("Current file is missing a title");return}let{metadataCache:a,vault:r}=this.app,o=a.getFileCache(e.file),d=(_=o==null?void 0:o.links)!=null?_:[],s=[];for(let h of d){let u=h.link,f=a.getFirstLinkpathDest(u,e.file.path);f instanceof c.TFile?s.push({name:u,path:f.path}):s.push({name:u,path:null})}for(let h of s)try{let u,f=`[[${n.split(".")[0]}]]`;if(h.path)u=h.path;else{let y=`Worter/${h.name[0].toUpperCase()}`;r.getAbstractFileByPath(y)||await r.createFolder(y),u=`${y}/${h.name}.md`}await this.fileService.doesFileContainContent(u,f)||await this.fileService.appendToFile(u,`, ${f}`)}catch(u){new c.Notice(`Error processing link ${h.name}: ${u.message}`)}}}),this.addCommand({id:"fill-template",name:"Fill the template for the word in the title of the file",editorCallback:async(t,e)=>{var d,s;let n=(d=e.file)==null?void 0:d.name;if(!n){new c.Notice("Current file is missing a title");return}let a=n.slice(0,-3),r=await this.apiService.fetchTemplate(a),o=this.extractContentFromResponse(r);o&&((s=e==null?void 0:e.file)!=null&&s.path)&&await this.fileService.appendToFile(e.file.path,o)}}),this.addCommand({id:"get-infinitive-and-emoji",name:"Get infinitive form and emoji for current word",editorCallback:async(t,e)=>{var o,d;let n=(o=e.file)==null?void 0:o.name;if(!n){new c.Notice("Current file is missing a title");return}let a=await this.apiService.determineInfinitiveAndEmoji(n),r=this.extractContentFromResponse(a);r&&((d=e==null?void 0:e.file)!=null&&d.path)&&await this.fileService.appendToFile(e.file.path,r)}}),this.addCommand({id:"duplicate-selection",name:"Duplicate selected text and process with brackets",editorCallback:async t=>{let e=t.getSelection();if(e){let n=t.getCursor(),a=await this.apiService.makeBrackets(e),r=this.extractContentFromResponse(a);r&&(t.replaceSelection(e+`

`+r+`
`),t.setCursor({line:n.line,ch:n.ch+e.length}))}}}),this.addCommand({id:"translate-selection",name:"Translate selected text and show below",editorCallback:async t=>{let e=t.getSelection();if(e){let n=t.getCursor(),a=await this.apiService.translateText(e),r=this.extractContentFromResponse(a);r&&(t.replaceSelection(e+`

`+r+`
`),t.setCursor({line:n.line,ch:n.ch+e.length}))}}}),this.addSettingTab(new p(this.app,this))}async loadSettings(){this.settings=Object.assign({},F,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}extractContentFromResponse(t){var e,n,a,r,o,d;try{let s=JSON.parse(t);return((a=(n=(e=s==null?void 0:s.json)==null?void 0:e.content)==null?void 0:n[0])==null?void 0:a.text)||((d=(o=(r=s==null?void 0:s.json)==null?void 0:r.content)==null?void 0:o[0])==null?void 0:d.text)||""}catch(s){return""}}};
