const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="text-black label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-lightOrange"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="text-black label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-lightOrange"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckBox;
