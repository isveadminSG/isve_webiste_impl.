declare module 'apiClient' {
    import {AxiosInstance} from 'axios';

    export const apiClient: AxiosInstance;
}

declare module 'apiClient' {
    import {AxiosError} from 'axios'

    export function apiClientError(): AxiosError
}