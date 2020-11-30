import React from "react";
import Navbar from "./components/navbar/Navbar.js";
import Homescreen from "./components/community/Communityscreen.js";
import Loginscreen from "./components/loginscreen/Loginscreen.js";
import Editscreen from "./components/editscreen/Editscreen.js";
import Profilescreen from "./components/profilescreen/Profilescreen.js";
import Createscreen from "./Createscreen"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GET_DB_USER } from "./cache/queries.js";

import * as mutations from "./cache/mutation";
import { graphql } from "@apollo/react-hoc";
import { flowRight as compose, random } from "lodash";
import { useQuery } from "@apollo/react-hooks";
import { jsTPS } from './utils/jsTPS';
import Sidebar from "./components/sidebar/Sidebar.js";


const App = (props) => {
  let user = null;
  const { loading, error, data, refetch } = useQuery(GET_DB_USER);
  if (error) {
    console.log(error);
  }
  if (loading) {
    /* Good place for a spinner or something */
  }
  if (data) {
    let { getCurrentUser } = data;
    if (getCurrentUser !== null) {
      user = getCurrentUser;
    }
  }
  let transactionStack = new jsTPS();
  let auth;
  user == null? auth = false: auth = true;
  console.log(auth)

  return (
      <div className="animatedposeur">
      {
        auth?
          <div className="main">
            <Navbar 
              {...props} fetchUser={refetch} user={user} tps={transactionStack}
            />
            <Sidebar {...props} fetchUser={refetch} user={user} tps={transactionStack}/>
            <Switch>
              <Redirect exact from="/" to={{ pathname: "/login" }} />
              <Route
                path="/home"
                name="home"
                render={(props) => (
                  <Homescreen {...props} fetchUser={refetch} user={user} auth={auth}/>
                )}
              />
              <Route
                path="/edit:id"
                name="edit"
                render={(props) => (
                  <Editscreen {...props} fetchUser={refetch} user={user} auth={auth}/>
                )}
              />
              <Route
                path="/profile"
                name="profile"
                render={(props) => (
                  <Profilescreen {...props} fetchUser={refetch} user={user} auth={auth}/>
                )}
              />
            </Switch>
          </div>
          :
          <Loginscreen {...props} fetchUser={refetch} user={user} auth={auth}/>
      }
      </div>
  );
};

export default compose()(App);

// graphql(mutations.ADD_ITEM, {name: 'addItem'}),
// graphql(mutations.ADD_TODOLIST, {name: 'addTodolist'}),
// graphql(mutations.DELETE_ITEM, {name: 'deleteItem'}),
// graphql(mutations.DELETE_TODOLIST, {name: 'deleteTodolist'}),
// graphql(mutations.UPDATE_TODOLIST_FIELD, {name: 'updateTodolistField'}),
// graphql(mutations.UPDATE_LOCAL_TODO_FIELD, {name: 'updateLocalTodoField'}),
// graphql(mutations.ADD_LOCAL_TODOLIST, {name: 'addLocalTodolist'}),
// graphql(mutations.UPDATE_ITEM_FIELD, {name: 'updateItemField'}),
// graphql(mutations.REORDER_ITEMS, {name: 'reorderItems'}),
// graphql(GET_DB_TODOS, {name: 'getDbTodos'}),
