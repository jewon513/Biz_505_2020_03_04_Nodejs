import React, { createContext } from "react";

/*

    observer 로서 state 변수와 여러가지 handler method 통합관리하고 상위(main) 컴포넌트에서 하위(View, List, Insert) 컴포넌트에
    state 변수를 전달하고 하위 컴포넌트에서 상위 컴포넌트의 state 변수를 변경하여 여러 컴포넌트에 state 변수를 전파할때 사용할
    handler

*/
// 열 ㅓ컴포넌트에 전파할 떄 사용할 state 변수
const BucketProvider = createContext({
  bucketList: [],
  changeFlag: id => {},
  bucket_add: b_title => {},
  bucket_update: (id, b_title) => {},
  bucket_complet: (id, b_end_date) => {},
  toggleCancel: id => {}
});

export default BucketProvider;
