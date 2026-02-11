
const mbtiData = {
    "ISTJ": { name: "Le Logisticien", desc: "Pragmatique et factuel, la fiabilité incarnée.", famous: "Hermione Granger, Sting, Denzel Washington, George Washington, Machine Connor" },
    "ISFJ": { name: "Le Défenseur", desc: "Dévoué et chaleureux, toujours prêt à protéger ceux qu'il aime.", famous: "Captain America, Beyoncé, Reine Elizabeth II, Vin Diesel, Marge Simpson" },
    "INFJ": { name: "L'Avocat", desc: "Calme et mystique, mais très inspirant et idéaliste.", famous: "Gandalf, Martin Luther King, Lady Gaga, Aragorn, Johan Liebert" },
    "INTJ": { name: "L'Architecte", desc: "Un penseur imaginatif et stratège, avec un plan pour tout.", famous: "Elon Musk, Walter White, Christopher Nolan, Michelle Obama, Nikola Tesla" },
    "ISTP": { name: "Le Virtuose", desc: "Audacieux et pratique, maître de tous les outils.", famous: "James Bond, Indiana Jones, Tom Cruise, Michael Jordan, Eminem" },
    "ISFP": { name: "L'Aventurier", desc: "Un artiste flexible et charmant, toujours prêt à explorer.", famous: "Michael Jackson, Harry Potter, Frida Kahlo, Rihanna, messi" },
    "INFP": { name: "Le Médiateur", desc: "Poétique, gentil et altruiste, toujours désireux d'aider.", famous: "Frodon Sacquet, William Shakespeare, Johnny Depp, Björk, legoshi, Björn Andrésen" },
    "INTP": { name: "Le Logicien", desc: "Un inventeur innovant avec une soif inétanchable de connaissances.", famous: "Albert Einstein, Bill Gates, Neo (Matrix), Descartes, " },
    "ESTP": { name: "L'Entrepreneur", desc: "Intelligent, énergique et très perspicace.", famous: "Madonna, Ernest Hemingway, Rocket Raccoon, Eddie Murphy, Hank Schrader" },
    "ESFP": { name: "L'Amuseur", desc: "Spontané, énergique et enthousiaste, la vie n'est jamais ennuyeuse.", famous: "Marilyn Monroe, Elvis Presley, Miley Cyrus, Will Smith, " },
    "ENFP": { name: "L'Inspirateur", desc: "Enthousiaste, créatif et sociable, un esprit libre.", famous: "Robert Downey Jr., Spider-Man, Robin Williams, Walt Disney" },
    "ENTP": { name: "L'Innovateur", desc: "Astucieux et curieux, il ne résiste pas à un défi intellectuel.", famous: "Joker, Captain Jack Sparrow, Thomas Edison, Céline Dion" },
    "ESTJ": { name: "Le Directeur", desc: "Un excellent administrateur, inégalé dans la gestion des choses.", famous: "Boromir, Juge Judy, Frank Sinatra, Dwight Schrute" },
    "ESFJ": { name: "Le Consul", desc: "Extraordinairement attentionné, social et populaire.", famous: "Taylor Swift, Jennifer Lopez, Bob l'Éponge, Monica Geller" },
    "ENFJ": { name: "Le Protagoniste", desc: "Un leader charismatique et inspirant, capable de captiver son public.", famous: "Barack Obama, Oprah Winfrey, Morpheus, Daenerys Targaryen" },
    "ENTJ": { name: "Le Commandant", desc: "Un leader audacieux, imaginatif et volontaire.", famous: "Steve Jobs, Gordon Ramsay, Napoléon Bonaparte, Jules César" }
};

// --- Descriptions Ennéagramme ---
const enneaData = {
    1: { name: "Type 1 : Le Réformateur", tags: "Rigueur • Idéal", desc: "Vise la perfection et redoute l'erreur.", passion: "Passion : Colère", virtue: "Vertu : Sérénité", pdesc: "Irritation face à l'imperfection.", vdesc: "Accepter le monde tel qu'il est." },
    2: { name: "Type 2 : L'Auxiliaire", tags: "Amour • Service", desc: "Définit son identité par le service aux autres.", passion: "Passion : Orgueil", virtue: "Vertu : Humilité", pdesc: "Se croire indispensable.", vdesc: "Reconnaître ses propres besoins." },
    3: { name: "Type 3 : Le Réalisateur", tags: "Succès • Image", desc: "Veut être admiré pour ses réussites et craint l'échec.", passion: "Passion : Tromperie", virtue: "Vertu : Authenticité", pdesc: "Confondre son vrai Moi avec son image.", vdesc: "Être aimé pour qui il est." },
    4: { name: "Type 4 : L'Individualiste", tags: "Art • Mélancolie", desc: "Cherche le sens et la beauté. Se sent différent.", passion: "Passion : Envie", virtue: "Vertu : Équanimité", pdesc: "Le sentiment de manque essentiel.", vdesc: "Équilibre émotionnel présent." },
    5: { name: "Type 5 : L'Investigateur", tags: "Savoir • Retrait", desc: "Observe pour comprendre le monde. Protège son énergie.", passion: "Passion : Avarice", virtue: "Vertu : Détachement", pdesc: "Retenir son temps et son énergie.", vdesc: "Participer sans peur d'être envahi." },
    6: { name: "Type 6 : Le Loyaliste", tags: "Loyauté • Sécurité", desc: "Anticipe les dangers. Fidèle mais souvent anxieux.", passion: "Passion : Peur", virtue: "Vertu : Courage", pdesc: "Anxiété de fond et anticipation.", vdesc: "Agir malgré l'incertitude." },
    7: { name: "Type 7 : L'Enthousiaste", tags: "Plaisir • Futur", desc: "Optimiste, fuit la souffrance. Déteste les limites.", passion: "Passion : Gourmandise", virtue: "Vertu : Sobriété", pdesc: "Soif insatiable d'expériences.", vdesc: "Apprécier le moment présent." },
    8: { name: "Type 8 : Le Challengeur", tags: "Pouvoir • Contrôle", desc: "Fort et protecteur. Déteste la faiblesse et la trahison.", passion: "Passion : Excès", virtue: "Vertu : Innocence", pdesc: "Besoin d'intensité et de contrôle.", vdesc: "Accepter sa vulnérabilité." },
    9: { name: "Type 9 : Le Pacificateur", tags: "Harmonie • Calme", desc: "Cherche l'harmonie et évite le conflit à tout prix.", passion: "Passion : Paresse", virtue: "Vertu : Action Juste", pdesc: "S'oublier pour garder la paix.", vdesc: "S'impliquer pleinement dans sa vie." }
};

// --- Questions MBTI ---
const mbtiQuestions = [
    { text: "Vous vous sentez dynamisé après avoir passé du temps avec beaucoup de gens.", target: 'E' },
    { text: "Vous préférez les petits comités aux grandes fêtes.", target: 'I' },
    { text: "Vous avez tendance à penser à voix haute lors d'une discussion.", target: 'E' },
    { text: "Vous avez impérativement besoin de solitude pour recharger vos batteries.", target: 'I' },
    { text: "Vous allez naturellement vers les inconnus lors d'un événement.", target: 'E' },
    { text: "Vous préférez écouter attentivement plutôt que prendre la parole.", target: 'I' },
    { text: "Vous êtes souvent le premier à répondre dans une conversation de groupe.", target: 'E' },
    { text: "Vous réfléchissez longuement avant de partager votre opinion en public.", target: 'I' },
    { text: "Vous vous sentez à l'aise au centre de l'attention.", target: 'E' },
    { text: "Les interactions sociales prolongées vous épuisent psychologiquement.", target: 'I' },
    { text: "Vous initiez souvent le contact lors des nouvelles rencontres.", target: 'E' },
    { text: "Vous vous fiez davantage aux faits concrets qu'à votre intuition.", target: 'S' },
    { text: "Vous aimez imaginer des théories sur le futur ou l'évolution du monde.", target: 'N' },
    { text: "Vous préférez les instructions précises aux concepts vagues.", target: 'S' },
    { text: "Vous voyez souvent des liens entre des choses apparemment sans rapport.", target: 'N' },
    { text: "On vous décrit comme une personne terre-à-terre et réaliste.", target: 'S' },
    { text: "Vous vous perdez souvent dans vos pensées ou vos rêves éveillés.", target: 'N' },
    { text: "Vous appréciez les méthodes de travail qui ont fait leurs preuves.", target: 'S' },
    { text: "Vous préférez inventer une nouvelle façon de faire que suivre la routine.", target: 'N' },
    { text: "Vous remarquez immédiatement les détails physiques de votre environnement.", target: 'S' },
    { text: "Vous vous intéressez plus au 'pourquoi' profond qu'au 'quoi' immédiat.", target: 'N' },
    { text: "Vous préférez les faits observables aux interprétations théoriques.", target: 'S' },
    { text: "La logique doit primer sur les émotions dans une décision.", target: 'T' },
    { text: "Vous détestez blesser les gens, même pour dire une vérité nécessaire.", target: 'F' },
    { text: "Vous appréciez les débats intellectuels, même s'ils deviennent vifs.", target: 'T' },
    { text: "Vous agissez souvent selon vos valeurs personnelles et votre cœur.", target: 'F' },
    { text: "Vous privilégiez l'efficacité et la performance avant tout.", target: 'T' },
    { text: "Vous cherchez l'harmonie et le consensus au sein d'un groupe.", target: 'F' },
    { text: "Vous êtes capable de rester froidement impartial face à un conflit.", target: 'T' },
    { text: "Vous êtes très sensible aux besoins émotionnels de votre entourage.", target: 'F' },
    { text: "Vous préférez être respecté pour votre compétence que pour votre gentillesse.", target: 'T' },
    { text: "Vous essayez toujours de comprendre le point de vue émotionnel d'autrui.", target: 'F' },
    { text: "Vous privilégiez la justice impartiale à la clémence émotionnelle.", target: 'T' },
    { text: "Vous aimez que les choses soient décidées, planifiées et actées.", target: 'J' },
    { text: "Vous préférez attendre de voir ce qui se passe avant de vous engager.", target: 'P' },
    { text: "Vous terminez systématiquement vos tâches avant de vous détendre.", target: 'J' },
    { text: "Vous vous sentez limité ou étouffé par des horaires trop stricts.", target: 'P' },
    { text: "Votre espace de travail ou de vie est généralement bien ordonné.", target: 'J' },
    { text: "Vous êtes stimulé par l'approche d'une date limite de dernière minute.", target: 'P' },
    { text: "Vous n'aimez pas laisser les dossiers ou les discussions en suspens.", target: 'J' },
    { text: "Vous préférez improviser sur le moment plutôt que suivre un plan.", target: 'P' },
    { text: "Vous vous fixez souvent des objectifs clairs et chiffrés à long terme.", target: 'J' },
    { text: "Vous changez facilement de plan si une meilleure opportunité se présente.", target: 'P' },
    { text: "Vous vous sentez plus à l'aise avec des structures qu'avec l'improvisation.", target: 'J' }
];

// --- Questions Ennéagramme ---
const enneaQuestions = [
    { text: "Je m'efforce d'être parfait et je supporte mal l'erreur.", target: '1' },
    { text: "J'ai un sens très fort du devoir et de ce qui est juste.", target: '1' },
    { text: "Je ressens souvent de l'irritation quand les choses ne sont pas faites correctement.", target: '1' },
    { text: "J'ai besoin de me sentir aimé et utile aux autres.", target: '2' },
    { text: "Je fais souvent passer les besoins des autres avant les miens.", target: '2' },
    { text: "Il est crucial pour moi que les gens se sentent bien accueillis en ma présence.", target: '2' },
    { text: "Le succès et l'image que je renvoie sont très importants.", target: '3' },
    { text: "Je suis très productif et j'aime atteindre mes objectifs.", target: '3' },
    { text: "J'aime que mes succès soient reconnus et validés par mon entourage.", target: '3' },
    { text: "Je me sens souvent différent ou incompris des autres.", target: '4' },
    { text: "Je cherche la profondeur émotionnelle et l'authenticité.", target: '4' },
    { text: "J'ai l'impression que la vie est plus intense et profonde pour moi que pour les autres.", target: '4' },
    { text: "J'ai besoin de tout comprendre en profondeur avant d'agir.", target: '5' },
    { text: "Je protège mon temps et mon énergie pour éviter l'épuisement.", target: '5' },
    { text: "Je préfère observer un événement de loin plutôt que d'être au centre de l'action.", target: '5' },
    { text: "La sécurité et la loyauté sont mes priorités absolues.", target: '6' },
    { text: "J'anticipe souvent les problèmes potentiels pour m'y préparer.", target: '6' },
    { text: "Je me pose souvent la question 'et si ça se passe mal ?' pour anticiper les risques.", target: '6' },
    { text: "Je cherche toujours de nouvelles expériences pour éviter l'ennui.", target: '7' },
    { text: "Je préfère rester optimiste et éviter les émotions douloureuses.", target: '7' },
    { text: "Je m'ennuie très vite si je n'ai pas plusieurs projets ou idées en cours.", target: '7' },
    { text: "J'aime prendre le contrôle et protéger ceux qui me sont chers.", target: '8' },
    { text: "Je suis direct et je n'hésite pas à confronter les autres.", target: '8' },
    { text: "Je respecte les gens qui sont directs et qui ne tournent pas autour du pot.", target: '8' },
    { text: "J'évite les conflits et je cherche l'harmonie avant tout.", target: '9' },
    { text: "J'ai du mal à dire non pour ne pas briser la paix.", target: '9' },
    { text: "Je remets souvent à plus tard ce qui est important pour éviter le stress.", target: '9' },
    { text: "J'ai tendance à m'oublier moi-même pour ne pas déranger les autres.", target: '9' },
    { text: "Je privilégie le plaisir immédiat au détriment de mes responsabilités.", target: '7' },
    { text: "Je n'ai aucun mal à m'imposer si je sens une injustice.", target: '8' }
];

// ==========================================
// 2. ÉTAT DU JEU (STATE)
// ==========================================

let currentQuestionIndex = 0;
let mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let enneaScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
let activeQuiz = null; // 'mbti' ou 'ennea'
let myChart = null; // Stocke l'instance du graphique Chart.js

// ==========================================
// 3. FONCTIONS D'INTERACTION (ACCUEIL)
// ==========================================

function showEnneaDetails(typeId) {
    const detailsBox = document.getElementById('enneagram-details');
    const data = enneaData[typeId];
    if (!detailsBox || !data) return;

    detailsBox.innerHTML = `
        <div class="ennea-header">
            <h3>${data.name}</h3>
            <div class="ennea-tags">${data.tags}</div>
        </div>
        <p class="ennea-desc">${data.desc}</p>
        <div class="ennea-duo">
            <div class="ennea-card passion-card"><h4>${data.passion}</h4><p>${data.pdesc}</p></div>
            <div class="ennea-card virtue-card"><h4>${data.virtue}</h4><p>${data.vdesc}</p></div>
        </div>
    `;
    detailsBox.classList.remove('hidden');
}

// ==========================================
// 4. LOGIQUE DU QUIZ (MOTEUR)
// ==========================================

function startQuiz(type) {
    activeQuiz = type;
    
    // Reset complet
    mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    enneaScores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    currentQuestionIndex = 0;

    // UI
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    
    showQuestion();
}

function showQuestion() {
    const questions = activeQuiz === 'mbti' ? mbtiQuestions : enneaQuestions;
    const q = questions[currentQuestionIndex];
    
    // Mise à jour du texte
    const questionTextEl = document.getElementById('question-text');
    questionTextEl.classList.remove('fade-in'); // Reset anim
    void questionTextEl.offsetWidth; // Trigger reflow
    questionTextEl.textContent = q.text;
    questionTextEl.classList.add('fade-in');

    // Mise à jour barre progression
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
}

function answerQuestion(agreement) {
    const questions = activeQuiz === 'mbti' ? mbtiQuestions : enneaQuestions;
    const q = questions[currentQuestionIndex];

    if (activeQuiz === 'mbti') {
        // Logique MBTI : Si Oui -> Target, Si Non -> Opposé
        const pairs = { 'E':'I', 'I':'E', 'S':'N', 'N':'S', 'T':'F', 'F':'T', 'J':'P', 'P':'J' };
        if (agreement === 'yes') {
            mbtiScores[q.target]++;
        } else {
            mbtiScores[pairs[q.target]]++;
        }
    } else {
        // Logique Ennéagramme : Si Oui -> +1 au type, Si Non -> Rien
        if (agreement === 'yes') {
            enneaScores[q.target]++;
        }
    }

    // Passer à la suite
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// ==========================================
// 5. RÉSULTATS & GRAPHIQUE
// ==========================================

function showResult() {
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    let labels = [];
    let dataValues = [];
    let backgroundColors = [];

    // --- BRANCHE MBTI ---
    if (activeQuiz === 'mbti') {
        // 1. Calcul du type (ex: INTJ)
        const type = (mbtiScores.E >= mbtiScores.I ? "E" : "I") + 
                     (mbtiScores.S >= mbtiScores.N ? "S" : "N") + 
                     (mbtiScores.T >= mbtiScores.F ? "T" : "F") + 
                     (mbtiScores.J >= mbtiScores.P ? "J" : "P");

        document.getElementById('final-type').textContent = type;

        // 2. Affichage Description & Star System
        if (mbtiData[type]) {
            const profile = mbtiData[type];
            
            // On prépare le HTML des stars si elles existent
            let starHtml = '';
            if (profile.famous) {
                starHtml = `
                    <div class="star-box">
                        <span class="star-icon">✨</span>
                        <strong>Ils sont aussi ${type} :</strong><br>
                        ${profile.famous}
                    </div>
                `;
            }

            document.getElementById('final-desc').innerHTML = `
                <strong style="font-size:1.4rem; color:#667eea; display:block; margin-bottom:8px;">${profile.name}</strong>
                <span style="font-style:italic; opacity:0.9; margin-bottom:15px;">"${profile.desc}"</span>
                ${starHtml}
            `;
        } else {
            document.getElementById('final-desc').textContent = "Profil déterminé.";
        }

        // 3. Prépare Données Graphique
        labels = ['Extraversion', 'Introversion', 'Sensation', 'Intuition', 'Pensée', 'Sentiment', 'Jugement', 'Perception'];
        dataValues = [mbtiScores.E, mbtiScores.I, mbtiScores.S, mbtiScores.N, mbtiScores.T, mbtiScores.F, mbtiScores.J, mbtiScores.P];
        backgroundColors = ['#FF6384', '#FF6384', '#36A2EB', '#36A2EB', '#FFCE56', '#FFCE56', '#4BC0C0', '#4BC0C0'];

        // 4. Scores Texte
        const scoresDisplay = document.getElementById('scores-display');
        if (scoresDisplay) {
            scoresDisplay.innerHTML = `
                <div class="score-row"><span>E: ${mbtiScores.E} | I: ${mbtiScores.I}</span><span>S: ${mbtiScores.S} | N: ${mbtiScores.N}</span></div>
                <div class="score-row"><span>T: ${mbtiScores.T} | F: ${mbtiScores.F}</span><span>J: ${mbtiScores.J} | P: ${mbtiScores.P}</span></div>
            `;
        }
    } 
    // --- BRANCHE ENNÉAGRAMME ---
    else {
        // 1. Trouver le gagnant (score max)
        let maxScore = -1;
        let winnerType = "Inconnu";
        for (const [t, score] of Object.entries(enneaScores)) {
            if (score > maxScore) {
                maxScore = score;
                winnerType = t;
            }
        }

        // 2. Afficher Type
        document.getElementById('final-type').textContent = "Type " + winnerType;
        
        // 3. Afficher Description
        if (enneaData[winnerType]) {
            const profile = enneaData[winnerType];
            document.getElementById('final-desc').innerHTML = `
                <strong style="font-size:1.4rem; color:#e056fd; display:block; margin-bottom:8px;">${profile.name}</strong>
                <span style="font-style:italic; opacity:0.9;">"${profile.desc}"</span>
            `;
        }

        // 4. Prépare Données Graphique
        labels = ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7', 'Type 8', 'Type 9'];
        dataValues = [enneaScores[1], enneaScores[2], enneaScores[3], enneaScores[4], enneaScores[5], enneaScores[6], enneaScores[7], enneaScores[8], enneaScores[9]];
        backgroundColors = '#e056fd'; // Tout violet
    }

    // --- GÉNÉRATION DU GRAPHIQUE (Chart.js) ---
    const ctx = document.getElementById('resultChart');
    if (ctx) {
        if (myChart) myChart.destroy(); // Nettoie l'ancien graphique

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Score',
                    data: dataValues,
                    backgroundColor: backgroundColors,
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true, display: false }, // Cache l'axe Y
                    x: { grid: { display: false } } // Cache la grille
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion des boutons Ennéagramme sur la page d'accueil
    document.querySelectorAll('.type-item').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.type-item').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showEnneaDetails(btn.dataset.type);
        });
    });

    // 2. Boutons "Commencer" (MBTI et Ennéagramme)
    const startMbti = document.getElementById('start-btn');
    if (startMbti) startMbti.addEventListener('click', () => startQuiz('mbti'));

    const startEnnea = document.getElementById('start-btn-ennea');
    if (startEnnea) startEnnea.addEventListener('click', () => startQuiz('ennea'));

    // 3. Boutons de réponse (Oui / Non)
    document.querySelectorAll('.btn-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value'); // 'yes' ou 'no'
            answerQuestion(value);
        });
    });
});