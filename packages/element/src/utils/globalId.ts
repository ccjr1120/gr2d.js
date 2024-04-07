let globalIdCount = 0

export const getGlobalId = () => `${globalIdCount++}`
