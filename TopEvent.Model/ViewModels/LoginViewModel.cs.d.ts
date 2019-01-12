declare module server {
	interface loginViewModel {
		email: string;
		password: string;
		rememberMe: boolean;
		returnUrl: string;
	}
}
