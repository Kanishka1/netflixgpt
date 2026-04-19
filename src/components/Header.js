import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	const signOutUser = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};
	const supportedLanguages = [
		{
			identifier: "English",
			id: "en",
		},
		{
			identifier: "Hindi",
			id: "hi",
		},
		{
			identifier: "Spanish",
			id: "es",
		},
	];
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					}),
				);
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		//Unsubscribe when component unmounts
		return () => unsubscribe();
	}, []);

	const handleLanguageChange = (event) => {
		dispatch(changeLanguage(event.target.value));
	};

	const handleGPTSearchClick = () => {
		dispatch(toggleGptSearchView());
	};
	return (
		<div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
			<img src="/login-logo.png" alt="login-logo" className="w-44"></img>

			{user && (
				<div className="flex p-2 gap-2">
					{showGptSearch && (
						<select
							onChange={handleLanguageChange}
							className="p-2 m-2 bg-transparent text-red-500 rounded-lg"
						>
							{supportedLanguages.map((opt) => (
								<option key={opt.identifier} value={opt.id}>
									{opt.identifier}
								</option>
							))}
						</select>
					)}
					<button
						className="px-4 py-2 mx-2 bg-gray-400 text-white rounded-lg bg-opacity-90"
						onClick={handleGPTSearchClick}
					>
						{ showGptSearch ? "Home Page" : "GPT Search"}
					</button>

					<img
						className="w-14 h-14 rounded-lg"
						src={user?.photoURL}
						alt="usericon"
					></img>
					<button
						className="px-4 py-2 mx-2 bg-[red] text-white rounded-lg"
						onClick={signOutUser}
					>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
