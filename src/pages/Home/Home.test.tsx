import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import chordMock from "@/mock/chordMock";
import { createTestQueryClient, mockedAxios } from "@/tests/testUtils";

const mockAndRender = () => {
    // Mockeamos la respuesta de axios.get para que devuelva los datos anteriores
    mockedAxios.get.mockResolvedValueOnce({ data: chordMock });
    // Creamos un nuevo cliente para React Query
    const queryClient = createTestQueryClient();
    // Renderizamos el componente Home envuelto con QueryClientProvider
    render(
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    );
}

describe('Home', () => {

    beforeEach(() => {
        mockAndRender();
    })

    it('Should render Home in the document', async () => {
        await waitFor(() => {
            expect(screen.getByRole('banner')).toBeInTheDocument();
        })
    })

    it('Should contain an h1 and a description', async () => {
        await waitFor(() => {
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/The chords finder/i);
            expect(screen.getByText(/easy.*search/i)).toBeInTheDocument();
        })
    })

    it('Should contain the chord name and image taken from the api', async () => {
        await waitFor(() => {
            const homeHeader = screen.getByRole('banner');
            const chordImgFromApi = screen.getByRole('img', { name: /C major/i });
            const chordNameFromApi = screen.getByText(chordMock.name.eng);

            expect(chordImgFromApi).toBeInTheDocument();
            expect(chordNameFromApi).toBeInTheDocument();

            expect(homeHeader).toContainElement(chordImgFromApi);
            expect(homeHeader).toContainElement(chordNameFromApi);

            expect(chordImgFromApi).toHaveAttribute('src', chordMock.images.pos1);
            expect(chordImgFromApi).toHaveAttribute('alt', `Image of ${chordMock.name.eng}`);
            
        })
    })



    // Esperamos a que la imagen con alt text que incluye "C major" aparezca en pantalla
    // await waitFor(() => {
    //     const chordImgFromApi = screen.getByRole('img', { name: /C major/i });
    //     const chordNameFromApi = screen.getByText('C Major');

    //     //La imagen del acorde y su nombre deben estar en el documento
    //     expect(chordImgFromApi).toBeInTheDocument();
    //     expect(chordNameFromApi).toBeInTheDocument();
    // });
});