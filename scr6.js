const footballTeam = {
    team: "Arsenal Football Club",
    year: 2025,
    headCoach: "Mikel Merino",
    players: [
         { name: "Martin Odegard", position: "midfielder", isCaptain: true },
        { name: "Eberechi Eze", position: "forward", isCaptain: false },
        { name: "Martin Zubimendi", position: "midfielder", isCaptain: false },
        { name: "Declan Rice", position: "midfielder", isCaptain: false },
        { name: "Bukayo Saka", position: "forward", isCaptain: false },
        { name: "Leandro Trosard", position: "midfielder", isCaptain: false },
        { name: "William Saliba", position: "defender", isCaptain: false },
        { name: "Gabriel Magalesh", position: "defender", isCaptain: false },
        { name: "Piero Hencapie", position: "defender", isCaptain: false },
        { name: "Miles Lewis-Skelly", position: "defender", isCaptain: false },
        { name: "Viktor Gyokeres", position: "forward", isCaptain: false },
        { name: "David Raya", position: "goalkeeper", isCaptain: false },
        { name: "Kepa Arizablaga", position: "goalkeeper", isCaptain: false },
        { name: "Christian Mosquera", position: "defender", isCaptain: false },
        { name: "Riccardo Califiori", position: "defender", isCaptain: false },
        { name: "Jurian Timber", position: "defender", isCaptain: false },
        { name: "Ben White", position: "defender", isCaptain: false },
        { name: "Mikel Merino", position: "midfielder", isCaptain: false },
        { name: "Christian Norgard", position: "midfielder", isCaptain: false },
        { name: "Gabriel Martinrli", position: "forward", isCaptain: false },
        { name: "Kai Havertz", position: "forward", isCaptain: false },
        { name: "Noni Madueke", position: "forward", isCaptain: false },
        { name: "Gabriel Jesus", position: "forward", isCaptain: false },
        { name: "Ethen Nwaneri", position: "midfielder", isCaptain: false }
    ]
};

function renderPlayers(playersToDisplay) {
    const cardsContainer = document.getElementById('player-cards');
    cardsContainer.innerHTML = ''; 

    playersToDisplay.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';

        
        const playerName = document.createElement('h3');
        playerName.textContent = player.name + (player.isCaptain ? ' (C)' : '');

        const playerPosition = document.createElement('p');
        card.appendChild(playerName);
        card.appendChild(playerPosition);
        cardsContainer.appendChild(card);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const filterElement = document.getElementById('position-filter');

    renderPlayers(footballTeam.players);

    
    filterElement.addEventListener('change', (event) => {
        const selectedPosition = event.target.value;
        let filteredPlayers;

        if (selectedPosition === 'all') {
            
            filteredPlayers = footballTeam.players;
        } else {
        
            filteredPlayers = footballTeam.players.filter(player => 
                player.position === selectedPosition
            );
        }
        
        
        renderPlayers(filteredPlayers);
    });
});

