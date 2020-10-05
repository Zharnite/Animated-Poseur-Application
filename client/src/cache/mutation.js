import gql from 'graphql-tag';
// ====================== User Mutations ====================== //

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			_id
			username
            email
            passsword
            photo
            realname
            description
		}
	}
`;
export const REGISTER = gql`
	mutation Register($username: String!, $email: String!, $password: String!) {
		register(username: $username, email: $email, password: $password) {
			_id
			username
            email
            passsword
            photo
            realname
            description
		}
	}
`;
export const LOGOUT = gql`
	mutation Logout {
		logout 
	}
`;

// ====================== Item Mutations ====================== //
