import { CircularProgress } from "@mui/material";
import React from "react";

const CodeUpLoader = () => {
	return (
		<div className='fixed z-10 top-0 left-0 flex justify-center items-center w-full h-full bg-black-opacity-loader'>
			<CircularProgress />
		</div>
	);
};

export default CodeUpLoader;
