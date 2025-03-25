
var data = [  
];
const SoDong=10;
var searchText="";
export var TongSoLuong=0;


import Api from '../../../Api/Api';
import ApiConstants from '../../../Api/Constants';

export const DATA_FETCHING = 'HOME_DATA_FETCHING';
export const DATA_FETCHED = 'HOME_DATA_FETCHED';
export const DATA_AVAILABLE = 'HOME_DATA_AVAILABLE';

export function getMore(){
  return (dispatch) => {
      dispatch({type: DATA_FETCHING, data: data});
      let ViTriBatDau =0;
      let ViTriKetThuc=ViTriBatDau + SoDong;
      if(data.length>0){
        ViTriBatDau =data.length;
        ViTriKetThuc=data.length + SoDong;
      }
      Api.post4(ApiConstants.ACTION_DANHSACHTHONGTINCHIDAODIEUHANH, JSON.stringify(
        {
            "TokenNguoiDung":"XSIu6g\/L1Cp5sbXkKVkeC7TQQ8HkYmVnzTcG5PEIZp9Ke5+TEcc0ad2VsVBs6YJaXjB1OOkIfVk=",
            "TokenApi":"Bt7SOa2Nd6GMoQKeww022SUUtxQeK1F71RCFsYNh2vjp\/UgPwpX3\/MhE5EDHl7XmZvJS+qq4UcM9y2TddqSiW4x\/pgH7rRfRXjB1OOkIfVk=",
            "ViTriBatDau": ViTriBatDau, "ViTriKetThuc": ViTriKetThuc, "TuKhoa": searchText       
        }
      )).then((result) => {
          if (result) {
            if(data.length>0)
              data=[...data,...result.DanhSachThongTinChiDao];  
            else
              data= result.DanhSachThongTinChiDao;              
          }
          dispatch({type: DATA_FETCHED, data: data});          
      });
  };
}

export function getData(text){
    return (dispatch) => {
        data=[];
        if (text==undefined)
          searchText="";
        else
          searchText=text;
        let ViTriBatDau =0;
        let ViTriKetThuc=ViTriBatDau + SoDong;        
        Api.post4(ApiConstants.ACTION_DANHSACHTHONGTINCHIDAODIEUHANH, JSON.stringify(
          {
              "TokenNguoiDung":"XSIu6g\/L1Cp5sbXkKVkeC7TQQ8HkYmVnzTcG5PEIZp9Ke5+TEcc0ad2VsVBs6YJaXjB1OOkIfVk=",
              "TokenApi":"Bt7SOa2Nd6GMoQKeww022SUUtxQeK1F71RCFsYNh2vjp\/UgPwpX3\/MhE5EDHl7XmZvJS+qq4UcM9y2TddqSiW4x\/pgH7rRfRXjB1OOkIfVk=",
              "ViTriBatDau": ViTriBatDau, "ViTriKetThuc": ViTriKetThuc, "TuKhoa": searchText          
          }
        )).then((result) => {
            if (result) {
              if(data.length>0)
                data=[...data,...result.DanhSachThongTinChiDao];  
              else{
                data= result.DanhSachThongTinChiDao; 
                TongSoLuong= result.TongSoLuong;
              }             
            }
            dispatch({type: DATA_AVAILABLE, data: data});
        });
    };
}
