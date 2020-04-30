import { JobsStore } from './JobsStore';
import { UserStore } from './UserStore';

export class RootStore {
    jobsStore: JobsStore;
    userStore: UserStore;
    constructor() {
        this.jobsStore = new JobsStore(this);
        this.userStore = new UserStore(this);
    }
}

const rootStore = new RootStore();
export default rootStore; 