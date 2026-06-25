import { useEffect } from "react";
import { useLocation } from "react-router";
import './ScrollToTop.css';

function normalizePath(path) {
    const withoutQuery = path.split('?')[0].split('#')[0];
    if (withoutQuery.length > 1 && withoutQuery.endsWith('/')) {
        return withoutQuery.slice(0, -1);
    }
    return withoutQuery;
}

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleClick = (e) => {
            const anchor = e.target.closest('a[href]');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) {
                return;
            }

            if (normalizePath(href) === normalizePath(pathname)) {
                window.scrollTo(0, 0);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [pathname]);

    return null;
}

export default ScrollToTop;