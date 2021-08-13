export const authSuccess = props => ({login: props.login, password: props.password});
export const authFailure = error => ({error});