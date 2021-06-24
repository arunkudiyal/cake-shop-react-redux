import { connect } from "react-redux"
import { addCake, buyCake } from "../redux/cake/cakeAction"

const Cake = (props) => {
    return (
        <div>
            <h1>Number of Cakes : {props.numOfCakes} </h1>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.addCake}>Add Cake</button>
        </div>
    )
}

// Step 1 - Map the States to the Props
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// Step 2 - Map the Dispatch to the Props
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

// Step 3 - Connect both the functions
export default connect(mapStateToProps, mapDispatchToProps)(Cake)