import {Module} from 'vuex-smart-module';
import { UserModule } from '@/store/modules/user';
import {ReportsModule} from '@/store/modules/reports';

export default new Module({
    modules: {
        UserModule,
        ReportsModule,
    },
});
