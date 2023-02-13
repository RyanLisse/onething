import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  value: string;
  error: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCompletedThing: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
}

const CustomForm: React.FC<Props> = ({ value, handleInput, handleSubmit }) => (
  <>
    <h1 className="text-3xl text-center uppercase font-black text-zinc-500 dark:text-zinc-50">
      What&apos;s your one thing?
    </h1>
    <form className="flex rounded-md focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800">
      <input
        type="text"
        className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full"
        placeholder="Enter One Thing"
        autoFocus
        maxLength={64}
        value={value}
        onChange={handleInput}
      />
      <button
        type="submit"
        className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600"
        onClick={handleSubmit}>
        <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none" />
      </button>
    </form>
  </>
);

export default CustomForm;
