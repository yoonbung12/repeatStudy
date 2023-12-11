import React from 'react';
import {connect} from 'react-redux';
import {addSubscriber} from '../redux/Subscribers/actions'

const Subscribers = ({count, addSubscriber}) => {
    return (
        <>
            <div className="items">
                <p>구독자수: {count}</p>
                <button onClick={() => addSubscriber()}>구독하기</button>

            </div>
        </>
    )

}

const mapStateToProps = ({subscribers}) => {
    return {
        // 이 count가 위에 props로 전달이 된다..
        count: subscribers.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addSubscriber: () => dispatch(addSubscriber())
//     }
// }
// 아래거로 바꿈
const mapDispatchToProps = {
    addSubscriber // 프로퍼티와 벨류값이 같으면 뒤에 '= addSubscriber'를 안써돈됨
}


export default connect(mapStateToProps,mapDispatchToProps) (Subscribers);