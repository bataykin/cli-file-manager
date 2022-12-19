import path from "node:path";

export const upCommand = (curPath) => {
    const newPath = curPath.split(path.sep)
    const res  = newPath.length > 1 ? newPath.slice(0,-1) : newPath
    return res.join(path.sep)

}