import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Button = ({ href, name, className, image, alt, imageClass }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(href)}
            className={className || 'transform scale-100 transition duration-150 ease-in-out hover:scale-110 flex flex-col justify-center items-center gap-2'}
        >
            <img src={image} alt={alt} className={imageClass || 'w-36'} />
            {name && <div className="text-center text-white text-lg">{name}</div>}
        </button>
    );
};

Button.propTypes = {
    href: PropTypes.string.isRequired,
    name: PropTypes.string,
    className: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageClass: PropTypes.string,
    alt: PropTypes.string.isRequired
};

export default Button;
