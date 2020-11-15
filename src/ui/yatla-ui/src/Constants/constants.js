const env = process.env;
export default {
    API_BASE_URL: env.API_BASE_URL ? env.API_BASE_URL : "https://localhost:8001",
    LIST_REFRESH_RATE: env.LIST_REFRESH_RATE ? env.LIST_REFRESH_RATE : 10000
}