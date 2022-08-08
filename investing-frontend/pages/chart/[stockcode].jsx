import Chart from '../../src/components/Chart';
import { useRouter } from 'next/router';

const Chartpage = () => {
	const query = useRouter();
	return <Chart name={`${query.query.stockcode}`} />;
};

export default Chartpage;
