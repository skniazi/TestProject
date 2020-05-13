import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './header';
import { Content } from './content';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { Footer } from './footer';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Content />
			<Footer />
		</ThemeProvider>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
