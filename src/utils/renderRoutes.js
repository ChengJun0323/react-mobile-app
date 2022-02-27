import { Route } from 'react-router-dom';

function renderRoutes(routes) {
  return (
    routes.map(route => (<Route path={route.path} key={route.name} component={route.component} exact />))
  )
}

export default renderRoutes;
