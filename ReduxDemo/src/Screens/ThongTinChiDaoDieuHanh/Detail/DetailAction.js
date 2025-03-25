var data= null;

import Api from '../../../Api/Api';
import ApiConstants from '../../../Api/Constants';

export const DATA_AVAILABLE = 'DETAIL_DATA_AVAILABLE';

export function getData(item){
    return (dispatch) => {
      Api.post4(ApiConstants.ACTION_CHITIETTHONGTINCHIDAODIEUHANH, JSON.stringify(
        {
          "TokenNguoiDung":"XSIu6g\/L1Cp5sbXkKVkeC7TQQ8HkYmVnzTcG5PEIZp9Ke5+TEcc0ad2VsVBs6YJaXjB1OOkIfVk=",
          "TokenApi":"Bt7SOa2Nd6GMoQKeww022SUUtxQeK1F71RCFsYNh2vjp\/UgPwpX3\/MhE5EDHl7XmZvJS+qq4UcM9y2TddqSiW4x\/pgH7rRfRXjB1OOkIfVk=",
          "Id": item.Id
        }
      )).then((result) => {
          if (result) {
            data= result;              
          }
          dispatch({type: DATA_AVAILABLE, data: data});
          
      });
    };
}