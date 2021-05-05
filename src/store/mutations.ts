export default {
  increment (state: any, payload: any) {
    payload ? (state.total += payload) : state.total++
  }
}
