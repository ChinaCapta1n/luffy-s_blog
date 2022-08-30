import { defineStore } from "pinia";

const useFlags = defineStore('flag', {
    state: () => ({
        navFlag: true
    }),
    actions: {
        setNavStatus() {
            this.navFlag = !this.navFlag;
        }
    }
})

export default useFlags;