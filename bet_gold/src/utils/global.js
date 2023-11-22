import userApi from "@/network/user.js";
import allApi from "@/network/allApi.js";
import store from '@/store/index'
import {  computed } from 'vue'

 let token = computed(()=> store.getters["user/LToken"])
 let user = computed(()=> store.getters["user/LOGIN"])
 const userValue = computed(() => store.getters["user/USERINFO"]);

export default {
   validatePhoneNumber(phone, countryCode) {
    switch (countryCode) {
      case 95:
        return phone.match(/^\d{10}$/) || phone.match(/^9(2|4|5|6|7|8|9|)\d{8}$/);
      case 852:
        return /^(\+?852\-?)?[2356789]\d{3}\-?\d{4}$/.test(phone);
      case 853:
        //return /^(\+?853\-?)?[68]\d{3}\-?\d{4}$/.test(phone);
        return /^((\+?853\-?)?[68]\d{3}\-?\d{4}|^[2-9]\d{7})$/.test(phone);
      case 886:
        return /^(\+?886\-?|0)?9\d{8}$/.test(phone);
      case 971:
        return /^(?:00971|\+971|0)?(?:50|51|52|55|56|58|2|3|4|6|7|9)\d{7}$/.test(phone);
      case 81:
        return /^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$/.test(phone);
      case 63:
        return /^(\+?63|0)?[2-9]\d{2}\d{3}\d{4}$/.test(phone);
      case 66:
        return /^(\+?66|0)-?[1-9]\d{7}$/.test(phone);
      case 65:
        return /^(\+?65)?[689]\d{7}$/.test(phone);
      case 84:
        return /^(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone);
      case 60:
        return /^(01[0-46-9]-*[0-9]{7,8}|011-*([0-9]{8}|[0-9]{7}))$/.test(phone);
      case 62:
        return /^(^\+62|0)(2[12]|5[2-9]|7[78]|8[1-9]|9[1-9])[0-9]{6,9}$/.test(phone); //indo 0811123456
      case 855:
        return /^\+?(855)?(1|9|8)[0-9]{7,8}$/.test(phone);
      case 856:
        return /^\+?(856-?|0)(20|21|30|31|71|81|91)[0-9]{6,7}$/.test(phone);
      case 86:
        return /^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(phone);
      default:
        return true;
    }
  },

    async getUserInfo() {
      if (token.value) {
        let data = {
          "player": user.value?.info?.username,
          // "key": user.key
        }
  
        try {
          const res = await userApi.GetUserInfo({data: data, key: user.value?.key})
          if (res.data.code == '1') {
            console.log("res of userinfo data", res);
            store.commit('user/UserInfo', res.data.data)
          }
        } catch (error) {
          console.log(error)
        }
      }
    },

    customerService(){
      console.log(userValue.value?.base?.base_service);
      // if(!userValue.value){
      //   this.getUserInfo()
      // }
     if(token.value){
      console.log(token.value);
      if(userValue.value?.base){
        if(userValue.value?.base?.base_service){
          let loginId = userValue.value?.id;
          let loginName = userValue.value?.username;
          let splitedUrl = userValue.value?.base?.base_service?.split("=");
          let nick_name = `&nick_name=${loginName}`;
          let cusUrl =
            splitedUrl[0] +
            "=" +
            loginId +
            splitedUrl[1] +
            "=" +
            splitedUrl[2] +
            "=" +
            splitedUrl[3] +
            "=" +
            splitedUrl[4] +
            "=" +
            splitedUrl[5] +
            nick_name;
          window.open(cusUrl)
        }
      }
     }
    }
      
    //  getWashMoney ()  {
    //     if (token) {
    //       let data = {
    //         "player": user.info?.username,
    //       }

    //       allApi.GetWashMoney({data: data,key:user.key}).then((res) => {
    //         if (res.data.code == '1') {
    //           console.log("res of getwashmoney data", res);
    //           store.commit('user/UserInfo', res.data.data)
    //         }
    //       }).catch((e) => {
    //         console.log(e);
    //       })
    //     }
    //   },
}