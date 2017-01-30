// import modules
import riot from 'riot';
import route from 'riot-route';

// import tags
import './app.tag';

import './components/app-header.tag';
import './components/app-navigation.tag';

import './pages/index.tag';
import './pages/about.tag';
import './pages/links.tag';

// route and mount
riot.mount('app');

// start
route.base('/');
route.start(true);
