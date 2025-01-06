import Button from "./Button"
import Container from "./Container"
import Left from '../assets/img/left.png'
import PropTypes from 'prop-types'

const Wrapper = ({ children }) => {
    return (
        <Container className="flex-col gap-8">
            {children}
            <Button
                image={Left}
                href="/"
                alt="Left Image"
                imageClass="w-12"
            />
        </Container>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
}

export default Wrapper
