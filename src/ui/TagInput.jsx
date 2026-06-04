import { WithContext as ReactTags, SEPARATORS } from "react-tag-input";

function TagInput({ tags, setTags, label, placeholder, id }) {
  const handleDelete = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleAddition = (tag) => {
    setTags((prevTags) => {
      return [...prevTags, tag];
    });
  };

  return (
    <div className="flex flex-col gap-y-2 mb-2.5">
      <label htmlFor={id} className="textField__label">
        {label}
      </label>
      <ReactTags
        id={id}
        classNames={{
          selected: "mt-1 h-6 text-right",
          tag: "bg-tag/50 mx-1 p-0.5 rounded-sm",
          tagInputField: "textField__input",
        }}
        tags={tags}
        separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="top"
        maxTags={7}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TagInput;
