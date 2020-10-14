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
export const GET_DB_ANIMATIONSPRITE = gql`
  query GetDBAnimatationsprite {
    getCurrentAnimatationsprite {
      _id
      id
      sprite_name
      public
      width
      height
      animation_states {
        animation_state_name
        isSelected
        frames{
          position
          duration
          isSelected
          layers{
            layer_name
            isVisable
            isLocked
            isSelected
            data
          }
        }
  
      }
    }
  }
`;




// ====================== Todolist Queries ================== //
