export type FetchOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE',
    headers?: HeadersInit,
    body?: BodyInit | null,
}

async function fetchHelper(url: string, options: FetchOptions = { method: 'GET' }) {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: options.body ? JSON.stringify(options.body) : null,
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error || 'Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export default fetchHelper;
