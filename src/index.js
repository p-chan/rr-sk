// import modules
import riot from 'riot';
import route from 'riot-route';

// import tags
import './components/app-header.tag';
import './components/app-navigation.tag';

import './pages/index.tag';
import './pages/about.tag';
import './pages/links.tag';

// route and mount
route('/', () => {
  console.log('change to index');
  riot.mount('#app', 'index');
});

route('/about', () => {
  console.log('change to about');
  riot.mount('#app', 'about');
});

route('/links', () => {
  console.log('change to links');
  riot.mount('#app', 'links');
});

// start
route.base('/');
route.start(true);
