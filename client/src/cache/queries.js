import gql from 'graphql-tag';
// ====================== User Queries ====================== //

export const GET_DB_USER = gql`
	query GetDBUser {
		getCurrentUser {
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

export const GET_DB_ANIMATIONSPRITE = gql`
	query GetDBAnimatationsprite  {
		getCurrentAnimatationsprite {
			_id
			sprite_name
            public
            width
            height
            animation_states {
				animation_state_name
				layers {
					layer_name
					isVisable
					isLocked
				}
				frames{
					position
					data
				}
			}
		}
	}
`;


// ====================== Item Queries ====================== //
// ====================== Todolist Queries ================== //