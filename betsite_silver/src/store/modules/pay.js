
export default {
    state: {
        moneyDeposit: null,
        baseUAddress: null
    },

    getters: {
        MONEY_DEPOSIT: state => state.moneyDeposit,
        USDT_ADDRESS: state => state.baseUAddress,
    },

    mutations: {
        MoneyDeposit(state, payload) {
            state.moneyDeposit = payload
        },
        SetUSDTAddress(state, payload) {
            state.baseUAddress = payload
        },
    },
    namespaced: true
}
