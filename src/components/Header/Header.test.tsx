import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

const renderComponent = () => {
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
}

describe('Header', () => {

    it('Should render the Header component as a header', () => {
        renderComponent();

        // Header debe tener el rol "banner" y existir en el documento
        const header = screen.getByRole('banner');
        expect(header).toBeInTheDocument();
    })


    it('Should contain the logo component and a nav', () => {
        renderComponent();

        // Ubicamos el header y el link (<Logo/>) por su role
        const header = screen.getByRole('banner');
        const logoLink = screen.getByRole('link', { name: /home/i });

        // Link debe existir dentro del documento y del header
        expect(header).toBeInTheDocument();
        expect(logoLink).toBeInTheDocument();
        expect(header).toContainElement(logoLink);
    })

    it('Should contain the nav element with links', () => {
        renderComponent();

        // Ubicamos el header y el link (<Logo/>) por su role
        const header = screen.getByRole('banner');
        const nav = screen.getByRole('navigation');

        // El nav debe existir dentro del documento y del header
        expect(nav).toBeInTheDocument();
        expect(header).toContainElement(nav);

        // Ubicamos los links del nav
        const navLinkSearch = screen.getByRole('link', { name: /search/i });
        const navLinkAbout = screen.getByRole('link', { name: /about/i });

        // Los links deben existir dentro del nav
        expect(nav).toContainElement(navLinkSearch);
        expect(nav).toContainElement(navLinkAbout);

        // Cada link del nav debe tener un arl y un src concretos
        expect(navLinkSearch).toHaveAttribute('href', '/search');
        expect(navLinkSearch).toHaveAttribute('aria-label', 'Go to search page');
        expect(navLinkAbout).toHaveAttribute('href', '/about');
        expect(navLinkAbout).toHaveAttribute('aria-label', 'Go to about page');

        // Ubicamos los iconos de cada link
        const navIconSearch = screen.getByRole('img', { name: /search/i });
        const navIconAbout = screen.getByRole('img', { name: /about/i });

        // Los iconos deben estar dentro del documento y dentro del nav
        expect(navIconSearch).toBeInTheDocument();
        expect(navIconAbout).toBeInTheDocument();
        expect(nav).toContainElement(navIconSearch);
        expect(nav).toContainElement(navIconAbout);

        // los iconos deben tener un arl y un src concretos
        expect(navIconSearch).toHaveAttribute('alt', 'Search icon');
        expect(navIconSearch).toHaveAttribute('src', '/icons/search_icon.svg');
        expect(navIconAbout).toHaveAttribute('alt', 'About icon');
        expect(navIconAbout).toHaveAttribute('src', '/icons/about_icon.svg');
    })

})