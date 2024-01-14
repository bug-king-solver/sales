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

    // Test for fetching a single product
    it('should return a single product data when fetching by ID', async () => {
        const productId = '123'; // Example product ID
        const mockProductData = { id: productId, name: 'Test Product', price: 100 };
        const mockJsonPromise = Promise.resolve(mockProductData);
        const mockFetchPromise = Promise.resolve({
            ok: true,
            json: () => mockJsonPromise,
        });

        // Mock the global fetch function
        global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

        const url = `https://dummyjson.com/products/${productId}`;
        const result = await fetchHelper(url);
        // Check if fetch was called correctly
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: null,
        });

        // Check if the result matches the mocked product data
        expect(result).toEqual(mockProductData);
    });
});
