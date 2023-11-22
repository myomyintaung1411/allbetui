import instance from './index.js'
import photo from './photo' 

export default {
    SetBankAddress(data) {
        // console.log('data ... ', data)
        
        return instance({
            url: 'api/v1/user/SetBankAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    SetCoinAddress(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/SetCoinAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    GetMoneyAddress(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/GetMoneyAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    EditMoneyAddress(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/user/EditMoneyAddress',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    MoneyDeposit(data) {
        // console.log('data ... ', data)
        return instance({
           // url: 'api/v1/Pay/Direct',//local
            url: 'api/v1/pay/Direct',//global
            method: 'post',
            data:data,
            requestBase: '/api',// /api /pay
        })
    },
    MoneyWithdraw(data) {
        // console.log('data ... ', data)
        return instance({
            url: 'api/v1/pay/RedirectAnother',
            method: 'post',
            data:data,
            requestBase: '/api',//
        })
    },
    // get usdt desposit address
    GetBaseSetting(data) {
        return instance({
            url: 'api/v1/user/GetBaseSetting',
            method: 'post',
            data:data,
            requestBase: '/api',
        })
    },
    UploadImage(data) {
        return photo({ //use instance instead of photo method
            url: 'api/v1/user/Upload',
            method: 'post',
            data: data,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            requestBase: '/api',
        })
    },
    USDTDepositRequest(data) {
        return instance({
           // url: 'api/v1/user/USDTDepositRequest',
           url:'api/v1/pay/UDirect',
            method: 'post',
            data: data,
            requestBase: '/api',
        })
    },
    USDTWithdrawRequest(data) {
        return instance({
           // url: 'api/v1/user/USDTWithdrawRequest',
           url: 'api/v1/pay/URedirectAnother',
            method: 'post',
            data: data,
            requestBase: '/api',
        })
    }
}
