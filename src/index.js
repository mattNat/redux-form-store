import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// switch component takes in a collection of different routes
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

// past app was wrapper or main locations
// with react-router, no single or central component going on...so don't need app component
import reducers from './reducers';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        {/* Switch -> should load specific endpoints first */}
        <Switch>
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
