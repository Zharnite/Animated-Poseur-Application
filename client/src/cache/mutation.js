import gql from "graphql-tag";
// ====================== User Mutations ====================== //

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      username
      email
      password
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
      password
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

// ====================== Animationsprite Mutations ====================== //
export const ADD_ANIMATIONSPRITE = gql`
	mutation AddAnimationSprite($animationsprite: AnimationspriteInput!) {
		addTodolist(animationsprite: $animationsprite) 
	}
`;

export const UPDATE_ANIMATIONSPRITE = gql`
	mutation UpdateTodolistField($_id: String!, $field: String!, $value: String!) {
		updateTodolistField(_id: $_id, field: $field, value: $value)
	}
`;

export const DELETE_ANIMATIONSPRITE = gql`
	mutation DeleteTodolist($_id: String!) {
		deleteTodolist(_id: $_id)
	}
`;