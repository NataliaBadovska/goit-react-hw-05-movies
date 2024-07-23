import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './Layout.module.css'

function Layout() {
    return (
        <div>
            <header>
                <nav className={css.navigation}>
                    <NavLink to="/" className={css.navigationLink}>Home</NavLink>
                    <NavLink to="/movies" className={css.navigationLink}>Movies</NavLink>
                </nav>
            </header>

            <main className={css.main}>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet/>
                </Suspense>
                
            </main>
        </div>
    )
}

export default Layout;
