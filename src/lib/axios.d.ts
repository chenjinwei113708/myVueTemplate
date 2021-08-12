import { AxiosInstance, AxiosRequestConfig } from 'axios';
interface IAxios extends AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>;
    (url: string, config?: AxiosRequestConfig): Promise<any>;
}
declare const _default: IAxios;
export default _default;
