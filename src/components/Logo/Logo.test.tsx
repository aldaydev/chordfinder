import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import Logo from "./Logo";

describe('Logo', () => {

    //Render and functionality tests

    it('should render the Logo component as a link to the homepage', () => {
        render(<Logo/>);

        const logoElement = screen.getByRole('link');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveAttribute('href', '/');
    });

    //Accesibility tests



})