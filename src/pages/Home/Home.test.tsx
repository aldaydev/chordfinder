import { describe, it, expect, test } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import Home from './Home';
import chordMock from "@/mock/chordMock";
import { createTestQueryClient, mockedAxios } from "@/tests/testUtils";
import { beforeEach } from "node:test";

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

describe('Home', async () => {

    beforeEach(() => {
        mockAndRender();
    })

    it('El componente Home debe contener un h1 con el título y una descripción', async () => {
        await waitFor(() => {
            expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/The chords finder/i);
            expect(screen.getByText(/easy.*search/i)).toBeInTheDocument();
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