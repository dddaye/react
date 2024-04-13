//rface하면 자동으로 밑에 내용 생김

import React, { useState } from 'react'
import '../App.css'

// ()=> 하면 익명의 함수가 만들어짐
//State변수 선언 방법 =  useState, []안에 이름 넣기
// useState(100) ()안에는 변수의 초기값
const Counter = () => {
    const [count, setCount] = useState(10)
    return (
    <div>
        <button onClick={()=>setCount(count-1)}>감소</button>
        <span className='value'>{count}</span> {/*span은 줄바꿈 안됨 div는 줄바꿈 됨 */}
        <button onClick={()=>setCount(count+1)}>증가</button>
    </div>
    )
}

export default Counter

