import { JobsStore } from './JobsStore';
import { UserStore } from './UserStore';

export class RootStore {
    jobsStore: JobsStore;
    userStore: UserStore;
    constructor() {
        this.jobsStore = new JobsStore()
        this.userStore = new UserStore()
    }
}

const rootStore = new RootStore();
export default rootStore; 