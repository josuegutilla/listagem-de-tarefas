import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange, onEnterPress, type = "text" }) => {
    const handleKeyDowm = (e) => {
        if (e.key === "Enter") {
            onEnterPress();
        }
    };

    return (
        <div className="input-container">
            <input
                type={type}
                value={value}
                className="custom-input"
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => handleKeyDowm(e)}
            />

            {label ? (
                <label
                    className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default CustomInput;
