import axios from "axios";

const chordsApi = axios.create({
    baseURL: "https://chords.alday.dev/v1",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default chordsApi;
