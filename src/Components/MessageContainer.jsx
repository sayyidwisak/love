import '../assets/styles/Message.css'
import PropTypes from 'prop-types'

const MessageContainer = ({ children }) => {
    return (
        <div className="pixel-content w-[90%] max-w-[350px] sm:max-w-[650px] sm:h-[250px] flex justify-center items-center bg-blue-50 relative text-justify px-5 sm:px-10 py-5 sm:py-10">
            <div className="pixel-border"></div>
            {children}
        </div>
    )
}

MessageContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default MessageContainer