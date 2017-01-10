import { HomePage } from './home/home';
import { PostPage } from './post/post';
import { PostsPage } from './posts/posts';
import { PagesPage } from './pages/pages';
import { TaxonomiesModal } from './taxonomies-modal/taxonomies-modal';

export const MenuMapping = {
    post: PostPage,
    posts: PostsPage,
    pages: PagesPage
}

export default [
    HomePage,
    PostsPage,
    PostPage,
    PagesPage,
    TaxonomiesModal
];