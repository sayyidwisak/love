import PropTypes from "prop-types";

const Container = ({ className, children }) => {
    const classes = className ? className + " flex justify-center items-center min-h-[100vh] py-10 " : " flex justify-center items-center min-h-[100vh] py-10 gap-10 sm:gap-16 sm:flex-row flex-col "
    return (
        <div className={classes}>
            {children}
        </div >
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Container