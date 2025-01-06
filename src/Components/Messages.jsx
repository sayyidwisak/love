import MessageContainer from "./MessageContainer"
import PropTypes from 'prop-types'

const Messages = (props) => {
    return (
        <>
            <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
                {props.messagesData.map((item, index) => (
                    <MessageContainer key={index}>
                        {item.message}
                    </MessageContainer>
                ))}
            </div>
        </>
    )
}

Messages.propTypes = {
    messagesData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Messages