// import modules
import riot from 'riot';
import route from 'riot-route';

// import tags
// import './app.tag';

import './components/app-header.tag';
import './components/app-navigation.tag';

import './pages/index.tag';
import './pages/about.tag';
import './pages/links.tag';
import './pages/not-found.tag';

// mount app
// riot.mount('app');

// routing
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

// route('/*', () => {
//   console.log('change to not-found');
//   riot.mount('#app', 'not-found');
// });

route.base('/');
route.start(true);
