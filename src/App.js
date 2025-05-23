import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';
import Home from './Components/HomePage/Home.js';
import About from './Components/HomePage/About.js';
import ContactUs from './Components/HomePage/ContactUs.js';
import ForgotPassword from './Components/forgotPassword';
import Player from './Components/HomePage/Player.js';
import {CreateTeam} from './Components/Team/CreateTeam';
import PlayerProfile from './Components/Player/PlayerProfile.js';
import OrganizerProfile from './Components/Player/OrganizerProfile.js';
import OrganizerMyProfile from './Components/Player/OrganizerMyProfile';
import Players from './Components/Player/Players.js';
import PlayerMyProfile from './Components/Player/PlayerMyProfile';
import UpdateProfileForm from './Components/Player/UpdateProfileForm';
import WithoutTeam from './Components/Player/WithoutTeam';

import {PlayerNotifications} from "./Components/Player/PlayerNotifications.js";
import SendRequest from "./Components/Team/SendRequest"
import {PlayerMatch} from './Components/Player/PlayerMatch.js';
import {UpdateSchedule} from './Components/Tournaments/UpdateSchedule.js';
import ParticularTournament from "./Components/Tournaments/ParticularTournament.js";
import UpcomingTournamentsCards from "./Components/Tournaments/UpcomingTournamentsCards";
import { TeamRegister } from "./Components/Tournaments/TeamRegistration";
import {TournamentCreation} from "./Components/Tournaments/CreateTournament";
import {OrganizerTournament} from "./Components/Tournaments/OrganizerTournament.js";
import {UpdateResult} from "./Components/Tournaments/UpdateResult.js";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import Teams from './Components/Team/team.js';
import MyTeam from "./Components/Player/PlayerTeam.js";
import TeamDetail from './Components/Team/TeamDetails.js';
import TeamsPage from './Components/Team/TeamPage.js';
import PlayersDetail from './Components/Player/playersDetail.js';
import {CreateGroup} from "./Components/GroupChat/CreateGroup.js";
import './App.css'

function App() {

  return <>
  <GoogleOAuthProvider clientId='100929584640-iejanv0a3amo52cioffu9cg7j73t48gq.apps.googleusercontent.com'>
    <Routes>
    
      <Route path='/' element={<Home />} />

      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path='/PlayerProfile' element={<PlayerProfile />} />
      <Route path="/MyTeam" element={<MyTeam/>}/>
      <Route path='/Player' element={<Player />} />
      <Route path="/PlayerMyProfile" element={<PlayerMyProfile />} />
      <Route path="/UpdateProfileForm/:id" element={<UpdateProfileForm />} />
      <Route path='/OrganizerProfile' element={<OrganizerProfile />} />
      <Route path="/OrganizerMyProfile" element={<OrganizerMyProfile/>}/>
      <Route path="/Players" element={<Players/>}/>
      <Route path="/WithoutTeam" element={<WithoutTeam/>}/>
      <Route path="/AllNotifications" element={<PlayerNotifications/>}/>
      <Route path="/Team/req-to-join/:id" element={<SendRequest/>} ></Route>
      <Route path="/PlayerMatch" element={<PlayerMatch/>} />
      <Route path='/updateTournament/:id' element={<UpdateSchedule />} />
      <Route path="/tournamentById/:id" element={<ParticularTournament />} />
      <Route path="/UpcomingTournamentsCards" element={<UpcomingTournamentsCards/>}/>
      <Route path="/addTeam/:id" element={<TeamRegister/>}/>
      <Route path="/createTournamentReq" element={<TournamentCreation/>}/>
      <Route path="/OrganizerTournament" element={<OrganizerTournament/>}/>
      <Route path="/scheduleResult/:matchId" element={<UpdateResult/>}/>
      <Route path='/About' element={<About />} /> //teamDetails
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path="/TeamsPage" element={<TeamsPage/>}></Route>
      <Route path="/Team/:id" element={<TeamDetail/>} ></Route>
      <Route path="CreateTeam" element={<CreateTeam/>}></Route>
      <Route path="/user/:id" element={<PlayersDetail/>}></Route>
      <Route path="/CreateGroup" element={<CreateGroup/>}></Route>
    </Routes>
    </GoogleOAuthProvider>
  </>
}
export default App;
