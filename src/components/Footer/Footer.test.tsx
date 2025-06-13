import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

const renderComponent = () => {
    render(
        <MemoryRouter>
            <Footer />
        </MemoryRouter>
    );
}

describe('Footer', () => {
    it('Should render Footer component as a footer', () => {
        renderComponent();

        const footer = screen.getByRole('contentinfo');
        expect(footer).toBeInTheDocument();

    })

    it('Should contain the brand chords api link', () => {
        renderComponent();

        const footer = screen.getByRole('contentinfo');

        const footerBrandLink = screen.getByRole('link', {name: /chords api/i});
        
        expect(footerBrandLink).toBeInTheDocument();
        expect(footer).toContainElement(footerBrandLink);

        expect(footerBrandLink).toHaveAttribute('href', 'https://chords.alday.dev');
        expect(footerBrandLink).toHaveAttribute('target', '_blank');
        expect(footerBrandLink).toHaveAttribute('rel', 'noreferrer noopener');
        expect(footerBrandLink).toHaveAttribute('aria-label', 'Go to Chords API');
    })

    it('Should contain the author AldayDev link', () => {
        renderComponent();

        const footer = screen.getByRole('contentinfo');

        const footerAuthorLink = screen.getByRole('link', {name: /aldaydev/i});
        
        expect(footerAuthorLink).toBeInTheDocument();
        expect(footer).toContainElement(footerAuthorLink);

        expect(footerAuthorLink).toHaveAttribute('href', 'https://alday.dev');
        expect(footerAuthorLink).toHaveAttribute('target', '_blank');
        expect(footerAuthorLink).toHaveAttribute('rel', 'noreferrer noopener');
        expect(footerAuthorLink).toHaveAttribute('aria-label', 'Go to AldayDev portfolio');
    })
})