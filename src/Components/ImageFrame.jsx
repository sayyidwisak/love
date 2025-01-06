import PropTypes from 'prop-types';

const ImageFrame = ({ children }) => {
    return (
        <div className="flex items-center justify-center bg-aliceblue w-[300px] h-[200px] rounded-none relative border-4 border-black shadow-[4px_4px_0_0_black,8px_8px_0_0_#333,12px_12px_0_0_#555] overflow-hidden transition-transform duration-150 ease-in-out hover:scale-105">
            {children}
        </div>
    )
}

ImageFrame.propTypes = {
    children: PropTypes.node.isRequired
}

export default ImageFrame