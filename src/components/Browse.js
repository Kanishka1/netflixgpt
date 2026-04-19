import Header from "./Header";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
	// In dev mode, react does extra rendering to check for errors due to strict mode.
	// Remove Strict mode
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

	useMovies();
	usePopularMovies();
	useTrendingMovies();
	return (
		<div className="relative">
			<Header></Header>
			{showGptSearch ? (
				<GPTSearch />
			) : (
				<>
					<MainContainer />
					<SecondaryContainer></SecondaryContainer>
				</>
			)}
		</div>
	);
};

export default Browse;
