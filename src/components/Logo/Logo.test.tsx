import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Logo from "./Logo";
import { MemoryRouter } from 'react-router-dom';

const renderComponent = () => {
    render(
        <MemoryRouter>
            <Logo />
        </MemoryRouter>
    );
}

describe('Logo', () => {

    // ----- External link test -----

    it('should render the Logo component as a link to the homepage', () => {

        renderComponent();

        // Ubicamos un link con texto accesible 
        const logoLink = screen.getByRole('link', { name: /home/i });

        // Debe estar en el documento, redirigir correctamente y tener un aria-label
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute('href', '/');
        expect(logoLink).toHaveAttribute('aria-label', 'Go to home');
    });

    // ----- Inner image and text test -----

    it('should have an image inside and an "alt" attribute ', () => {

        renderComponent();

        // Ubicamos el link, la imagen y el texto (up and down)
        const logoLink = screen.getByRole('link', { name: /home/i });
        const logoImage = screen.getByRole('img', { name: /logo/i });
        const logoTextUp = screen.getByText('CHORD');
        const logoTextDown = screen.getByText('FINDER');

        // Logo y texto deben estar en el documento
        expect(logoImage).toBeInTheDocument();
        expect(logoTextUp).toBeInTheDocument();
        expect(logoTextDown).toBeInTheDocument();

        // Logo y texto deben estar dentro del link
        expect(logoLink).toContainElement(logoTextUp);
        expect(logoLink).toContainElement(logoTextDown);
        expect(logoLink).toContainElement(logoImage);

        // Logo debe tener un arl y un src concretos
        expect(logoImage).toHaveAttribute('alt', 'Chord Finder oficial logo');
        expect(logoImage).toHaveAttribute('src', '/brand/chordfinder_icon.svg');

        

        
    });


})