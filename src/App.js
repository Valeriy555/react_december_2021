import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {
    CommentsPostPage,
    HomePage,
    NotFoundPage,
    PostsPage,
    PostsUserPage,
    SinglePostPage,
    SingleUserPage,
    UsersPage
} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostsUserPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<CommentsPostPage/>}/>
                    </Route>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
