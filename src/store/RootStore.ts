import { JobsStore } from './JobsStore';
import { UserDetailsStore } from './UserDetailsStore';

export class RootStore {
    jobsStore: JobsStore;
    userDetailsStore: UserDetailsStore;
    constructor() {
        this.jobsStore = new JobsStore(this)
        this.userDetailsStore = new UserDetailsStore(this)
    }
}

const rootStore = new RootStore();
export default rootStore; 