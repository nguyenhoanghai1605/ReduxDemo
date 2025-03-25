 
export const DATA_AVAILABLE = 'DETAIL_DATA_AVAILABLE';

export function getData(item){
    return (dispatch) => {
      dispatch({type: DATA_AVAILABLE, data: item});
    };
}
