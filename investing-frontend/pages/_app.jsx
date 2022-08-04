import GlobalStyle from '../src/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
