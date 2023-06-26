import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				{/* <h1>Hello world</h1> */}
				<ClickCounter />
				<HoverCounter />
			</header>
		</div>
	);
}

export default App;
