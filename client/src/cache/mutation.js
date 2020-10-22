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
	mutation AddAnimationsprite($animationsprite: AnimationspriteInput!) {
		addAnimationsprite(animationsprite: $animationsprite) 
	}
`;

export const ADD_LOCAL_ANIMATIONSPRITE = gql`
  mutation AddLocalAnimationsprite($animationsprite: AnimationspriteInput!) {
    addLocalAnimationsprite(animationsprite: $animationsprite) @client
  }
`;


export const UPDATE_ANIMATIONSPRITE_FIELD = gql`
	mutation UpdateAnimationspriteField($_id: String!, $field: String!, $value: String!) {
		updateAnimationspriteField(_id: $_id, field: $field, value: $value)
	}
`;

export const UPDATE_LOCAL_ANIMATIONSPRITE_FIELD = gql`
	mutation UpdateAnimationspriteField($_id: String!, $field: String!, $value: String!, $opcode: Int) {
		updateLocalAnimationspriteField(_id: $_id, field: $field, value: $value, opcode: $opcode) @client
	}
`;


