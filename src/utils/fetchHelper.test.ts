import { describe, it, expect, vi, afterEach } from 'vitest';
import fetchHelper from './fetchHelper';

// Resets mocks after each test to prevent interference
afterEach(() => {
    vi.restoreAllMocks();
});

describe('fetchHelper', () => {
    // Test for a successful API call
    it('should return data on successful fetch', async () => {
        const mockJsonPromise = Promise.resolve({ data: 'test data' });
        const mockFetchPromise = Promise.resolve({
            ok: true,
            json: () => mockJsonPromise,
        });

        // Mock the global fetch function
        global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

        const url = 'https://dummyjson.com/products';
        const result = await fetchHelper(url);

        // Check if fetch was called correctly
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: null,
        });

        // Check if the result is as expected
        expect(result).toEqual({ data: 'test data' });
    });

    // Test for a failed API call
    it('should throw an error on failed fetch', async () => {
        const mockFetchPromise = Promise.resolve({
            ok: false,
            text: () => Promise.resolve('Network response was not ok'),
        });

        // Mock the global fetch function
        global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

        const url = 'https://dummyjson.com/products';

        // Check if fetchHelper throws an error as expected
        await expect(fetchHelper(url)).rejects.toThrow('Network response was not ok');
    });
});
