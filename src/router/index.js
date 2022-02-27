import loadable from "../utils/loadable";
import LoadingIndicator from "../components/LoadingIndicator";

const Test = () => {
  return <div>test</div>
}

const routes = [
  {
    name: 'Home',
    path: '/',
    component: loadable(() => import('./../pages/Home'), { fallback: <LoadingIndicator /> }),
    children: [
      {
        name: 'Test',
        path: 'test',
        component: Test,
      }
    ]
  }
]

export default routes;