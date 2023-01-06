import { useState } from "react"
import PropTypes from 'prop-types'


const Togglable = ({ children, buttonLabel }) => {

    const [visible, setVisible] = useState(false)

    Togglable.propTypes = {
        buttonLabel: PropTypes.string.isRequired
    }


    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }

    return (
        <div>
            <div style={hideWhenVisible}>
                <button onClick={() => setVisible(true)}>{buttonLabel}</button>
            </div>
            <div style={showWhenVisible}>
                {children}
                <button onClick={() => setVisible(false)}>Cancel</button>
            </div>
        </div>

    )
}

export default Togglable