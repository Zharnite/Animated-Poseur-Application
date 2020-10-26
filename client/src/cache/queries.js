import gql from "graphql-tag";
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

// ====================== AnimationSprite Queries ====================== //

export const GET_LOCAL_ANIMATIONSPRITES = gql`
	{
		getAllAnimationsprites @client  {
      _id
      owner
      sprite_name
      isPublic
      width
      height
      animation_states {
        animation_state_name
        frames{
          position
          duration
          layers{
            layer_name
            isVisable
            isLocked
            data
          }
        }
  
      }
		}
	}
`;

export const GET_DB_ANIMATIONSPRITES = gql`
  query GetDBAnimatationsprites{
    getAllAnimationsprites{
      _id
      owner
      sprite_name
      isPublic
      width
      height
      animation_states {
        animation_state_name
        frames{
          position
          duration
          layers{
            layer_name
            isVisable
            isLocked
            data
          }
        }
      }
    }
  }
`;

export const GET_ANIMATIONSPRITE_BY_ID = gql`
query GetAnimationspriteById($_id: String!) {
  getAnimationspriteById(_id: $_id) {
      _id
      owner
      sprite_name
      isPublic
      width
      height
      animation_states {
        animation_state_name
        frames{
          position
          duration
          layers{
            layer_name
            isVisable
            isLocked
            data
          }
        }
  
      }
    }
}
`;