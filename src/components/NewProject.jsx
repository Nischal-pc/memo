import Input from "./Input";
import { useRef } from "react";
const NewProject = ({ onAdd, close }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    console.log("save button is clicked");
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const eneterdDueDate = dueDate.current.value;
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: eneterdDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16 ">
      <main className="flex items-center justify-end gap-4 my-4">
        <div>
          <button
            onClick={close}
            className="text-stone-800 hover:text-stone-950 "
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 rounded-md hover:bg-stone-950 py-2 px-6"
          >
            Save
          </button>
        </div>
      </main>
      <Input type="text" ref={title} label="title" textarea />
      <Input type="time" ref={description} label="Description" textarea />
      <Input type="date" ref={dueDate} label="Due Date" textarea />
    </div>
  );
};

export default NewProject;
