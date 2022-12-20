import os from "os";

export const cpus = () => {
    const cpus = os.cpus()
    const result = cpus.reduce((acc, cur, index) => {
        acc = {
            ...acc,

        }
        acc[`CPU#${index+1}`]= cur.model.trim() + " at " + cur.speed/1000 + " GHz"
        return acc
    }, {OverallAmountCpus: cpus.length})
    console.log(result)
}