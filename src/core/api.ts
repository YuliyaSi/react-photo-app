import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const makeApiRequest = async (
    action: (value: any) => void
): Promise<void> => {
    try {
        const response = await axios.get(`${baseUrl}/photos`);
        action(response.data);

    } catch (error) {
        throw new Error('Connecting failed.', { cause: error });
    }
};