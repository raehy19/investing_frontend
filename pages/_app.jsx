import GlobalStyle from '../src/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import Layout from '../src/components/Layout';

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
