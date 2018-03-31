import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Posts from './Posts';
import PostDetails from './PostDetails';
import AddPost from './AddPost';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Posts}/>
			<Route exact path='/posts/add' component={AddPost}/>
			<Route exact path='/posts/:id' component={PostDetails}/>
		</Switch>
	</main>
)

export default Main;