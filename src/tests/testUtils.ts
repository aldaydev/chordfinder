import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { vi } from "vitest";

// Mockeamos axios con vi para no hacer peticiones reales
vi.mock('axios');

// Cast para que TypeScript entienda que axios está mockeado y no de problemas
export const mockedAxios = vi.mocked(axios, true); // El `true` es para deep mock

// Creamos un cliente nuevo de React Query para cada test
export const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false, // para que no intente repetir queries en test
            },
        },
    });