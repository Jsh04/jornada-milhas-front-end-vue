export default interface IStoreService<TState> {
    commit(mutation: string, payload: any): void;
    dispatch(action: string, payload: any): void;
    getState(): TState;
}