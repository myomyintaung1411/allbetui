

import { BO_DIN, NIUNIU, GOLDENFLOWER } from './const'



export function FormatPlayerAccount(account) {
  if (account !== '') {
    return account.slice(0, -4)
  }
  return account
}

export function MapResult2(type, result) {
  if (type === 101 || type ===102 || type ===103 || type ===104 || type ===110) {
    return MapBac(result)
  }

  if (type === 301) {
    return MapLongHu(result)
  }

  if (type === 501) {
    return MapBoDin(result)
  }

  if (type === 801) {
    return MapNiuNiu(result)
  }

  if (type === 901) {
    return MapGoldenFlower(result)
  }
}

export function MapBac(result = '{6,1}') {
  if (result != '' && result.length >= 5) {
    result = result?.substring(1)
    result = result?.slice(0, -1)
    result = result?.split(',')
    const win = result[0] > result[1] ? '闲' : '庄'
    const res = '闲:' + result[0] + ' ' + '庄:' + result[1]
    const final_show = win + '  ' + res

    return final_show
  }
  return result
}

export function MapLongHu(result) {
  if (result != '' && result.length >= 5) {
    result = result?.substring(1)
    result = result?.slice(0, -1)
    result = result?.split(',')
    const win = (parseFloat(result[0]) > parseFloat(result[1])) ? '龙' : '虎'
    const res = '龙:' + result[0] + ' ' + '虎:' + result[1]
    const final_show = win + '  ' + res

    return final_show
  }
  return result
}

export function MapBoDin(result = "{6,6,7.2,2,8,5}") {
  if (result != '' && result?.length >= 13) {
    result = result?.substring(1)
    result = result?.slice(0, -1)
    result = result?.split(',')
    let win = ''
    if (parseFloat(result[0]) < parseFloat(result[1])) win += '闲1 '
    if (parseFloat(result[0]) < parseFloat(result[2])) win += '闲2 '
    if (parseFloat(result[0]) < parseFloat(result[3])) win += '闲3 '
    if (parseFloat(result[0]) < parseFloat(result[4])) win += '闲4 '
    if (parseFloat(result[0]) < parseFloat(result[5])) win += '闲5 '
    const res = '庄:' + result[0]
      + ' ' + '闲1:' + TransResult(BO_DIN, result[1])
      + ' ' + '闲2:' + TransResult(BO_DIN, result[2])
      + ' ' + '闲3:' + TransResult(BO_DIN, result[3])
      + ' ' + '闲4:' + TransResult(BO_DIN, result[4])
      + ' ' + '闲5:' + TransResult(BO_DIN, result[5])
    const final_show = win + '  ' + res
    // console.log(final_show)
    return final_show
  }
  return result
}

export function MapNiuNiu(result = "{10,0,9,0}") {
  if (result != '' && result.length >= 9) {
    result = result.substring(1)
    result = result.slice(0, -1)
    result = result.split(',')
    let win = ''
    if (parseFloat(result[0]) < parseFloat(result[1])) win += '闲1 '
    if (parseFloat(result[0]) < parseFloat(result[2])) win += '闲2 '
    if (parseFloat(result[0]) < parseFloat(result[3])) win += '闲3 '

    if (win == '') win += '庄 '
    const res = '庄:' + result[0]
      + ' ' + '闲1:' + TransResult(NIUNIU, result[1])
      + ' ' + '闲2:' + TransResult(NIUNIU, result[2])
      + ' ' + '闲3:' + TransResult(NIUNIU, result[3])
      const final_show = win + '  ' + res
    // console.log(final_show)
    return final_show
  }
  return result
}

export function MapGoldenFlower(result = "{29,19}") {
  if (result != '' && result.length >= 7) {
    result = result?.substring(1)
    result = result?.slice(0, -1)
    result = result?.split(',')
    let win = ''
    if (result[0]?.length == 3) {
      (parseInt(result[0], 2) > parseInt(result[1], 2)) ? (win += '龙') : (win += '凤')
    } 
    
    if (result[0]?.length == 2) {
      if (result[0] == 30) {
        win += '龙'
      } else if (result[1] == 30) {
        win += '凤'
      } else {
        let first = [...result[0]+'']
        let second = [...result[1]+'']
        if (first[1] === second[1]) {
          if (first[0] > second[0]) { win += '龙' } else { win += '凤' }
        }
        if (first[1] > second[1]) { win += '龙' } else { win += '凤' }
      }
    }
    
    const res = '龙:' + TransResult(GOLDENFLOWER, result[0])
      + ' ' + '凤:' + TransResult(GOLDENFLOWER, result[1])
    const final_show = win + '  ' + res

    return final_show
  }
  return result
}

// 石头，剪刀，布
export function MapSJB(result) {
  if (result == '') return ''
  if (result == 1) return '石头'
  if (result == 2) return '剪刀'
  if (result == 3) return '布'
}



function TransResult(type, data) {
  return type[data]
}
