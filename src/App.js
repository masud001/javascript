import { useContext } from 'react';
import ClickCounter from './Components/ClickCounter';
import Counter from './Components/Counter';
import HoverCounter from './Components/HoverCounter';
import AppProvider from './context/AppProvider';
import ThemeContext from './context/ThemeContext';
function App() {
	const { theme } = useContext(ThemeContext);
	const contentStyle = {
		backgroundColor: theme === 'dark' ? 'black' : 'white',
		color: theme === 'dark' ? 'white' : 'black',
	};
	return (
		<div className='App' style={contentStyle}>
			<header className='App-header'>
				{/* <h1>Hello world</h1> */}
				<ClickCounter />
				<HoverCounter />
			</header>
			<AppProvider>
				<Counter />
			</AppProvider>
		</div>
	);
}

export default App;
