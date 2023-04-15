import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Products from './component/Products/Products';
import Main from './layout/Main';
import Friend from './component/Friend/Friend';
import FriendDetails from './component/FriendDetails/FriendDetails';
import Posts from './component/Posts/Posts';
import PostDetails from './component/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
      {path: '/', 
      element: <Main></Main>,
      children: [
        {path:'/',element:<Home></Home>},
        {path:'/home',element: <Home></Home>},
        {path:'/products',element:<Products></Products>},
        {
        path:'/friend', 
        loader: async () => {
             return fetch('https://jsonplaceholder.typicode.com/users');
        },
        element:<Friend></Friend>
        },
        {
          path: '/friend/:friendID',
          loader: async ({params}) => {
            console.log(params);
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`);
             
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: '/posts',
          loader: async () =>{
              return fetch(`https://jsonplaceholder.typicode.com/posts`);
          },
          element: <Posts></Posts>

        },
        {
          path: '/post/:postId',
          loader: async ({params}) => {
           return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
        
      ]
      },
      {path: '/About', element: <About></About>},
      {path:'*',element: <div>404</div>}

           
  ])
  return (
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
