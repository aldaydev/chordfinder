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

    //Render and functionality tests

    it('should render the Logo component as a link to the homepage', () => {

        renderComponent();

        const logoLink = screen.getByRole('link', { name: /home/i });
        expect(logoLink).toBeInTheDocument();
        expect(logoLink).toHaveAttribute('href', '/');
        expect(logoLink).toHaveAttribute('aria-label', 'Go to home');
    });

    //Accesibility tests

    it('should have an image inside and an "alt" attribute ', () => {

        renderComponent();

        const logoLink = screen.getByRole('link', { name: /home/i });
        const logoImage = screen.getByRole('img', { name: /logo/i });
        const logoText = screen.getByTestId('logo-test');

        expect(logoImage).toBeInTheDocument();
        expect(logoImage).toHaveAttribute('alt', 'Chord Finder oficial logo');
        expect(logoImage).toHaveAttribute('src', '/chordfinder_icon.svg');

        expect(logoText).toBeInTheDocument();

        expect(logoLink).toContainElement(logoText);
        expect(logoLink).toContainElement(logoImage);
    });


})