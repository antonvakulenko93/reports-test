import Vue from 'vue';
import axios, {AxiosInstance} from 'axios';
import {User} from "@/interfaces";
class API extends Vue {
    private client: AxiosInstance;
    constructor(...args: any) {
        super(...args);
        this.client = axios.create({
            baseURL: process.env.VUE_APP_API_URL,
        });
    }

    public login(username: string, password: string): Promise<any> {
        const headers = { 'Content-Type' : 'application/x-www-form-urlencoded'};
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        return this.client.post('/login', {}, { headers, params})
            .then(({data}) => data).catch((e) => alert(e.message));
    }

    public getReports(): any {
        return this.client.get('/v2/reports/').then(({data}) => data).catch((e) => alert(e.message));
    }

    public createReport(type: string): any {
        return this.client.post(`/reports/${type}`).then(({data}) => data).catch((e) => alert(e.message));
    }


}

export default new API();
