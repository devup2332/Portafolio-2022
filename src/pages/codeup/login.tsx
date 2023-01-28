import React from "react";
import LoginContainer from "../../containers/CodeUp/LoginContainer/LoginContainer";
import CodeUpTemplate from "../../templates/CodeUpTemplate/CodeUpTemplate";

const LoginPage = () => {
	return (
		<CodeUpTemplate title='Login'>
			<LoginContainer />
		</CodeUpTemplate>
	);
};

export default LoginPage;
