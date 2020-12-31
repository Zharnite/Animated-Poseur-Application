import React, {useState} from "react";
import { flowRight as compose, random } from "lodash";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { GET_ANIMATIONSPRITE_BY_ID, GET_DB_ANIMATIONSPRITES } from "../../cache/queries";
import { useQuery } from "@apollo/react-hooks";
import { graphql } from "@apollo/react-hoc";
import { useLazyQuery } from "@apollo/react-hooks";
import SpriteCard from "./SpriteCard"
import { Redirect } from "react-router-dom";
import UserInfo from "./UserInfo";




const Profile = (props) => {
    let animationsList = [];
    const { loading, error, data, refetch} = useQuery(GET_DB_ANIMATIONSPRITES);
    const [getSprite, { lazyLoading, lazyError, lazyData }] = useLazyQuery(GET_ANIMATIONSPRITE_BY_ID);

    if(loading){  }
    if(error){ console.log(error); }
    if(data){
        console.log(data);
        animationsList = data.getAllAnimationsprites }
        console.log(animationsList)
    if(props.auth){ refetch() }
    if (!props.auth) {
        return <Redirect to="/login" />;
      } 
    else{ }
    console.log(animationsList);

    const selectSpriteToEdit = (animationsprite) =>{
        const _id = animationsprite._id;
        console.log(_id);
        console.log(animationsprite);
        // getSprite({ variables: { variables:  {_id} }})
        // if(lazyLoading){  }
        // if(lazyError){ console.log(error); }
        // if(lazyData){
        //     console.log(lazyData);
        // }
        props.history.push({
            pathname: '/edit:' + _id,
            animationsprite
        });

    }


    return (
        <div className="profile">
            <Container>
                <Row>
                    {animationsList && animationsList.map((sprite)=> (    
                         <Col md="auto">
                            <SpriteCard sprite={sprite} selectSpriteToEdit={selectSpriteToEdit}/>              
                        </Col>
                    ))};
                </Row>
            </Container>
            <UserInfo/>



        </div>
    );
    };

//charlie@email.com
//charlie

export default compose(
    graphql(
        GET_DB_ANIMATIONSPRITES, { name: "GetDBAnimatationsprites" },
        GET_ANIMATIONSPRITE_BY_ID, {name: "GetAnimationspriteById"}
        )
)(Profile);
