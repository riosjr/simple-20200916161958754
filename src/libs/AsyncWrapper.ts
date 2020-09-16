const asyncWrapper = fn => (...args) => fn(...args).catch(args[2])

export default asyncWrapper
