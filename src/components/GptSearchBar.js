import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
	const langKey = useSelector((store) => store.config.lang);
	const seachText = useRef(null);
	const handleGPTSearchClick = async () => {
		console.log(seachText.current.value);

		//Make an API call to GPT API
		const response = await openai.responses.create({
			model: "gpt-5-nano",
			instructions: "Recommend movie names for the query",
			input: seachText.current.value,
		});

		console.log(response.output_text);
		
	};

	return (
		<div className="pt-[10%] flex justify-center">
			<form
				className="w-1/2 bg-black grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={seachText}
					type="text"
					className="p-4 m-4 col-span-9 rounded-lg"
					placeholder={lang[langKey].gptPlaceholder}
				></input>
				<button
					className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3"
					onClick={handleGPTSearchClick}
				>
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
