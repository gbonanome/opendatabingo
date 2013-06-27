
var source   = $("#excuses-template").html();
var template = Handlebars.compile(source);
var data1 = { excuse: [
{ id: "1", 
	title: "Ci esporremo allo spam", 
	answers: [ 
		{answer: "Non è necessario includere gli indirizzi email nei dataset."},
		{answer: "E comunque i vostri indirizzi email sono già sul sito!"},
		{answer: "Esistono i filtri anti-spam."},
		{answer: "In generale, si può lasciare ai singoli la decisione di includere o meno l’email."}
	]
},
{	id: "2",
	title: "I terroristi potrebbero utilizzare questi dati", 
	answers: [
		{answer: "Solitamente questa scusa la utilizza solo chi non vuole fare nulla in materia - e comunque è una scusa che non si regge in piedi."},
		{answer: "Potrebbe essere un argomento valido, nel caso si parli di armi (anche nucleari, chimiche o batteriologiche) o di informazioni che renderebbero degli individui come un “obbiettivo” (come i nomi di ricercatori che stanno conducendo esperimenti in un ambito controverso, come i test su animali). Questi sono dubbi legittimi."},
		{answer: "I dati sensibili, tuttavia, possono essere comunque ottenuti con altri mezzi. Per esempio, i punti di incontro in un edificio in caso di incendio possono facilmente essere individuati: i segnali sono evidenti e chiunque li nota semplicemente passando. In altre parole, persone intenzionate a scoprire queste informazioni le otterrebbero comunque, dunque ci sono pochi rischi (o non ce ne sono affatto) nel rendere questi dati riutilizzabili."},
		{answer: "Si può creare un subset di dati che potrebbe ridurre o eliminare questo rischio?"},
		{answer: "Quali sono esattamente i dati che potrebbe essere problematico rivelare?"}
	]
},
{	id: "3",
	title: "Qualcuno potrebbe chiamarci e chiederci cose", 
	answers: [
		{answer: "Questa è la classica obiezione posta da coloro che si sentono già oberati di lavoro e/o che non considerano questo compito come parte del loro lavoro. Bisogna chiedere ai loro superiori se questo costituisca davvero un problema per le loro funzioni."}
	]
},
{ id: "4",
	title: "Le persone interpreteranno i dati in maniera scorretta",
	answers: [
		{answer: "Scrivete una documentazione su come i dati dovrebbero essere interpretati."},
		{answer: "Siate pronti a fornire aiuto e chiarimenti a queste persone; coloro che fraintendono il significato dei dati per errore saranno grati dell’aiuto."},
		{answer: "La pubblicazione può essere utile per contrastare una rappresentazione fuorviante (ad es. di dati acquisiti tramite la normativa sul diritto d’accesso di cui alla Legge 241/1990 e sul diritto di accesso civico di cui al D. Lgs. 33/2013), poiché si potranno indicare rapidamente i veri dati sul web per confutare l’errata interpretazione."}
	]
}
]};
var data2 = { excuse: [
{
	id: "5",
	title: "È troppo grande", 
	answers: [
		{answer: "Probabilmente non è grande come pensano (a meno che si stia parlando del CERN)."},
		{answer: "I titolari (proprietari) dei dati sono probabilmente fieri delle dimensioni del loro dataset, quindi non insultarli dichiarando che non è qualcosa di veramente grosso."},
		{answer: "Chiedi se sono favorevoli a effettuare degli esperimenti (e mostra con gentilezza quanto sia pratico/semplice farlo)"}
	]
},
{	id: "6",
	title: "Non sono dati interessanti", 
	answers: [
		{answer: "Dal momento che glieli stai chiedendo, è ovvio che tu li consideri interessanti. Spiegagli perché."},
		{answer: "Illustragli qualche caso in cui l’integrazione di altri dataset possa fornire un valore aggiunto al loro dataset (ad esempio, “quali college di Oxbridge offrono quali corsi” può essere integrato con una mappa con cui si indicano gli edifici dove si tengono i corsi, aiutando gli studenti nella scelta del college)."},
		{answer: "Convincili che non spetta a loro decidere quanto siano interessanti, ma ad altri. Anche dei dataset di nicchia hanno un loro interesse. Detto questo, l’obiettivo non è “pubblicare tutto in formato open”: concentriamoci sui frutti più semplici da cogliere e rimandiamo la roba meno interessante a dopo."}
	]
},
{	id: "7",
	title: "Potremmo utilizzarli in una pubblicazione nostra", 
	answers: [
		{answer: "Sì, in effetti ho sentito di dataset pubblicati in cristallografia..."},
		{answer: "Un’opzione è avere un periodo di embargo automatico o opzionale; richiedendo alle persone di archiviare i loro dati al momento della creazione ma rendendoli disponibili dopo X mesi. Potresti addirittura offrire l’opzione di rinnovare l’embargo, così potrebbero essere pubblicate solo le cose per cui non c’è più interesse, ma senza perdere l’opportunità di rendere, alla fine, tutto aperto."}
	]
},
{	id: "8",
	title: "Non c’è una API per ottenerli",
	answers: [
		{answer: "Non serve necessariamente una API pubblica. Che ne pensi di un’interfaccia con il database (SQL) dietro le quinte? Potrebbe anche essere possibile esportare i dati come file piatti e riversarli in un qualche posto adeguato alla loro successiva trasformazione."},
		{answer: "Come ultima risorsa, puoi ottenere i dati dal sito pubblico."},
		{answer: "Parla con il fornitore del sistema. Open Data è una nuova parola molto di moda, potrebbero essere interessati a cogliere l’occasione con poco sforzo."},
	]
},
{	id: "9",
	title: "Siamo preoccupati per la tutela dei dati personali e sensibili (Data Protection Act)", 
	answers: [
		{answer: "Il Codice della Privacy (D. Lgs. 196/2003) prevede la tutela dei diritti di riservatezza delle sole persone fisiche, non di quelle giuridiche (aziende, associazioni, fondazioni): pertanto, se i dati (meglio: i dataset) non contengono dati personali, sensibili o giudiziari relativi a persone fisiche, il Codice privacy non costituisce un ostacolo alla pubblicazione. In ogni caso, l’articolo 4 del D. Lgs. 33/2013 disciplina i rapporti tra pubblicazione dei dati e privacy, introducendo dei criteri che sono da ritenersi generali (es. anonimizzazione)  e costituire una guida per non incorrere in violazioni. "},
		{answer: "Se siete preoccupati per la privacy, potete comunque pubblicare ciò che è già stato pubblicato in modalità analogica (non-machine-readable, es. sull’albo pretorio del Comune)."},
		{answer: "Eliminate o anonimizzate le stringhe che contengono i dati personali."},
		{answer: "Chiedete ai titolari dei dati un’esplicita autorizzazione a pubblicare i dati che li riguardano, sempre nei limiti di quanto imposto dal Codice della privacy."}
	]
}
]};
var data3 = { excuse: [
{	id: "10",
	title: "Non siamo sicuri di essere titolari dei dati", 
	answers: [
		{answer: "Questo è il problema dei cataloghi delle biblioteche, spesso i metadati provengono da diverse fonti a pagamento che non permettono la libera ri-pubblicazione. Talvolta non è chiaro esattamente quali dati provengono da quale fonte, quindi l’intero dataset è corrotto."},
		{answer: "Ci sono parti di cui siamo sicuri? Possiamo pubblicare quelle."},
		{answer: "Se non ne siamo noi i titolari, conosciamo l’effettivo titolare?"},
		{answer: "C’è qualcos’altro di cui siamo sicuramente titolari noi?"}
	]
},
{	id: "11",
	title: "Non ho problemi a renderli aperti, ma sono preoccupato che qualcun altro possa obiettare qualcosa", 
	answers: [
		{answer: "Questa è più una manovra diversiva che un vero problema."},
		{answer: "Implica che la persona ha paura di essere accusata per aver fatto un errore."},
		{answer: "Cerca tra i suoi superiori qualcuno in grado di rassicurarli che non finiranno nei guai."},
		{answer: "Richiedi un sottoinsieme di dati meno controverso."}
	]
},
{	id: "12",
	title: "È troppo complicato", 
	answers: [
		{answer: "Questa è una questione simile a “è troppo grande”."},
		{answer: "Non mostrarti compiaciuto se viene fuori che non era così complicato, potrebbe compromettere le tue relazioni professionali con il fornitore dei dati"}
	]
},
{	id: "13",
	title: "I nostri dati sono brutti in modo imbarazzante",
	answers: [
		{answer: "Molti occhi ti aiuteranno a migliorare i tuoi dati (ad esempio evidenziando inesattezze)."},
		{answer: "Le persone accetteranno i tuoi dati per quello che sono."},
		{answer: "Offriti di aiutare il titolare dei dati a pulirli o mantenerli meglio. Fornendo un sistema che permetta ai titolari di gestire meglio i loro dati, potresti fare loro un favore."},
		{answer: "Se puoi ridurre i rischi, pubblicare dati aperti è un modo molto valido per motivare i fornitori di dati a pulirli. Ma i dati devono essere visibili, quindi ci sarà bisogno di una pagina web per mostrarli, così anche personale non tecnico potrà vederli (anche quelli brutti). Questa pagina è il luogo ideale per ribadire la procedura per fare correzioni. Questo significherà pubblicare inizialmente dati imperfetti, ma sarà molto efficace. Puoi mandare mail per anni alla gente chiedendo di migliorare i loro dati e non lo faranno. Nell’istante in cui scopriranno che questi sono visibili al pubblico, sfonderanno la tua porta chiedendoti di poterli correggere."}
	]
}
]};

$("#bingo-col1").html(template(data1));
$("#bingo-col2").html(template(data2));
$("#bingo-col3").html(template(data3));



