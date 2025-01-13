import { AxiosInstance } from "axios";

export default interface Service {
    serviceName: string;
    axios: AxiosInstance;
}