import axios from "axios";

export const spring = () => {
    let instance = axios.create({
        baseURL: `${"http://localhost:8080/"}`
    });
    return instance;
}
