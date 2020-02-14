import {Getters, Mutations, Actions, Module, createMapper, Context} from 'vuex-smart-module';
import {Store} from 'vuex';
import API from '@/services/api';
import router from '@/router';
import uniqBy from 'lodash/uniqBy';

class ReportsState {
    public reports: any[] = [];
    public perPage: number = 5;
    public currentPage: number = 1;
    public draftReport: any;
}

class ReportsGetters extends Getters<ReportsState> {
    private store: Store<any> | null = null;
    public $init(store: Store<any>): void {
        this.store = store;
    }
    public get pageReports() {
        const { reports, currentPage, perPage } = this.state;
        const step = (currentPage - 1) * perPage;
        return reports.slice(step, step + perPage);
    }
    public get pagesCount() {
        return Math.ceil(this.state.reports.length / this.state.perPage);
    }
}

class ReportsMutations extends Mutations<ReportsState> {
    public setReports(reports: any[]) {
        this.state.reports = uniqBy([...this.state.reports, ...reports], 'report.id');
    }
    public setCurrentPage(value: number) {
        this.state.currentPage = value;
    }

    public addReport(report: any) {
        this.state.reports = [...this.state.reports, report];
    }

    public setDraft(draft: any) {
        draft.report.id = this.state.reports.length + 1;
        this.state.draftReport = draft;
    }

    public resetDraft() {
        this.state.draftReport = null;
    }

}

class ReportsActions extends Actions<ReportsState, ReportsGetters, ReportsMutations> {
    private store: Store<any> | null = null;
    public $init(store: Store<any>): void {
        this.store = store;
    }

    public async fetchReports() {
        const reports = await API.getReports();
        this.mutations.setReports(reports);
    }

    public async createReport(type: string) {
        const draft = await API.createReport(type);
        this.mutations.setDraft(draft);
        router.push('editor');
    }

    public saveReport() {
        this.mutations.addReport(this.state.draftReport);
        this.mutations.resetDraft();
        router.push('/');
    }
}

export const ReportsModule = new Module({
    getters: ReportsGetters,
    state: ReportsState,
    mutations: ReportsMutations,
    actions: ReportsActions,
});

export const ReportsMapper = createMapper(ReportsModule);

