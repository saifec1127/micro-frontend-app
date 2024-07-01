import config from '../config/config';

const getDailyUpdates = async (api = 'localApi') => {
    try {
        const response = await fetch(`${config[api].baseUrl}${config[api].endpoints.dailyUpdates}`);
        if (!response.ok) {
            throw new Error(`Error fetching daily updates: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const createDailyUpdate = async (dailyUpdate, api = 'localApi') => {
    try {
        const response = await fetch(`${config[api].baseUrl}${config[api].endpoints.dailyUpdates}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dailyUpdate)
        });
        if (!response.ok) {
            throw new Error(`Error creating daily update: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating data:", error);
        throw error;
    }
};

export default {
    getDailyUpdates,
    createDailyUpdate
};
