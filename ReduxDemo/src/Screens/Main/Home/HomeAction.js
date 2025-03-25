
const data  = [
    {
      "key": "1",
      "title": "tqky1",
      "description": "tqky1"
    },
    {
      "key": "2",
      "title": "tqky2",
      "description": "tqky2"
    },
    {
      "key": "3",
      "title": "tqky3",
      "description": "tqky3"
    },
    {
      "key": "4",
      "title": "tqky4",
      "description": "tqky4"
    },
    {
      "key": "5",
      "title": "tqky5",
      "description": "tqky5"
    }
];
 
export const DATA_AVAILABLE = 'HOME_DATA_AVAILABLE';
export const INSERTING_DATA = 'HOME_INSERTING_DATA';
export const INSERTED_DATA = 'HOME_INSERTED_DATA';

export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: DATA_AVAILABLE, data: data});
        }, 2000);
    };
}

export function insertData(_data) {
    return (dispatch) => {
      dispatch({type: INSERTING_DATA, data: _data, isInserting: true});
      setTimeout(() => {
        _data.push({
          "key": (_data.length + 1).toString(),
          "title": "tqky",
          "description": "tqky"
        });
        dispatch({type: INSERTED_DATA, data: _data});
      }, 2000);
    };
}