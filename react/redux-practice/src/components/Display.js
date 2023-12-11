import React from "react";
import { connect } from "react-redux";
function Display(props) {
    return (
        <>
            <div>
                <h2>구독자수: {props.count}</h2>
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

export default connect(mapStateToProps)(Display);
