import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcomingState = [action].reduce(rootReducer, store.getState())
    console.log('upcomingState', JSON.stringify(upcomingState));
    // Pass action
    return next(action);
} // eslint-disable-line no-unused-vars

export default myLogger