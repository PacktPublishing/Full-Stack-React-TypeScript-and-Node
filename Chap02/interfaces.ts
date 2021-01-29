interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const linda: Employee = {
    name: "linda",
    id: 2,
    isManager: false,
    getUniqueId: (): string => {
        let uniqueId = linda.id + "-" + linda.name;
        if(!linda.isManager) {
            return "emp-" + uniqueId;
        }
        return uniqueId;
    }
}
console.log(linda.getUniqueId());

const pam: Employee = {
    name: "pam",
    id: 1,
    isManager: true,
    getUniqueId: (): string => {
        let uniqueId = pam.id + "-" + pam.name;
        if(pam.isManager) {
            return "mgr-" + uniqueId;
        }
        return uniqueId;
    }
}
console.log(pam.getUniqueId());