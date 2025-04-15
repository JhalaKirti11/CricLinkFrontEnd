let url = {
    organizer: {
        Organizer_profile: 'http://localhost:3001/user/detail'
    },
    player: {
            all: 'http://localhost:3001/user/playerList',
            viewcard: 'http://localhost:3001/user/profile/:userId',
            signup: 'http://localhost:3001/user/signup',
            signin: 'http://localhost:3001/user/signin', 
            sendOTP: "http://localhost:5000/api/user/sendOTP",
            sendRequest: 'http://localhost:3001/player/sendRequest',
            searchByCategory: 'http://localhost:3001/player/searchByCategory'
        },

    tournament: {
        TOURNAMENT_LIST : "http://localhost:3001/Tournament/tournamentList",
        TOURNAMENT_BY_ID : "http://localhost:3001/Tournament",
        ADD_MATCH : "http://localhost:3001/match",
        CREATE_TOURNAMENT: 'http://localhost:3001/Tournament/createTournamentReq'
    },
    match : {
        MATCH_LIST : "http://localhost:3001/match/matches",
    }
}

export default url;
