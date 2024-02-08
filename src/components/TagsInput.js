import React from "react";

export default function TagsInput({ wrapperClass, label, onTag }) {
  const [inputText, setInputText] = React.useState("");
  const [error, setError] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const addTag = (e) => {
    if (e.target.value !== "" && !tags.includes(e.target.value)) {
      setTags([...tags, e.target.value]);
      onTag([...tags, e.target.value]);
      setInputText("");
      setError("");
    }
    if (tags.includes(e.target.value)) {
      setError("Already exist");
    }
  };
  const delTag = (idx) => {
    setTags((tag) => tag.filter((t) => t !== tags[idx]));
  };
  return (
    <>
      <div className={wrapperClass}>
        <label className="form-label">{label}</label>
        <div className="tags-wrapper">
          {tags?.map((tag, idx) => (
            <label key={idx}>
              {tag}
              <span onClick={() => delTag(idx)}>
                <i className="bx bx-x"></i>
              </span>
            </label>
          ))}
          <input
            type="text"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTag(e);
              }
              if (e.keyCode === 8 && e.target.value === "" && tags.length > 0) {
                delTag(tags.length - 1);
              }
            }}
          />
        </div>
        {error !== "" ? (
          <div className="invalid-feedback d-block">{error}</div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
