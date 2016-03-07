import App from './components/App';
import About from './components/About';

export const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
  ],
};
