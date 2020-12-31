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




const Profile = (props) => {



    return (
        <div className="profile-user-page">
            <div className="profile-user-page-avatar"/>
            <div className="profile-user-page-section">
                <h6>UserName: </h6>
                <input className="profile-user-page-input" type="text"/>
            </div>
            <div className="profile-user-page-section">
                <h6>Real Name: </h6>
                <input className="profile-user-page-input" type="text"/>
            </div>
            <div className="profile-user-page-section">
                <h6>Description: </h6>
                <input className="profile-user-page-input" type="text"/>
            </div>
            
                
        </div>
    )
};

//charlie@email.com
//charlie

export default compose(

)(Profile);
