import React from "react";

const Second= () => {
    const style1={
        color:'cyan',
        fontSize:20
    }
    return(
        <div style={style1}>
            <h1>두번째 컴포넌트입니다.</h1>
        </div>
    )
}

export default Second; // export 해줘야 외부에서 사용 가능