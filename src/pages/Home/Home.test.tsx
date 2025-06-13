import { describe, it, expect, test } from "vitest";
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import axios from 'axios';
import Home from './Home';
import chordMock from "@/mock/chordMock";

// Mockeamos axios con vi para no hacer peticiones reales
vi.mock('axios');

// Cast para que TypeScript entienda que axios está mockeado
const mockedAxios = vi.mocked(axios, true); // El `true` es para deep mock

// Creamos un cliente nuevo de React Query para cada test
const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false, // para que no intente repetir queries en test
            },
        },
    });

test('Muestra la imagen del acorde cuando la data llega', async () => {

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

    // Esperamos a que la imagen con alt text que incluye "C major" aparezca en pantalla
    await waitFor(() => {
        expect(screen.getByRole('img', { name: /C major/i })).toBeInTheDocument();
    });
});