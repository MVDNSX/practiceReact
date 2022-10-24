import './App.css';
import './reset.css'
import HeaderContainer from './conponents/Header/HeaderContainer';
import Navbar from './conponents/Navbar/Navbar';
import Login from './conponents/Login/Login';
import ProfileContainer from './conponents/Profile/ProfileContainer';
import DialogsContainer from './conponents/Dialogs/DialogsContainer';
import UsersContainer from './conponents/Users/UsersContainer';
import Friends from './conponents/Friends/Friends';
import Music from './conponents/Music/Music';
import Settings from './conponents/Settings/Settings';
import { Routes, Route } from 'react-router-dom'


function App(props) {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar />
			<div className='app-content'>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<ProfileContainer />} />
					<Route path="/profile/:userId" element={<ProfileContainer />} />
					<Route path="/dialogs/*" element={<DialogsContainer />} />
					<Route path="/users/*" element={<UsersContainer />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/music" element={<Music />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</div>
		</div>

	);
}

export default App;
