import CustomButton from "./CustomButton";

interface Props {
  value: string;
  handleCompletedThing: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OneThing: React.FC<Props> = ({ value, handleCompletedThing }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center text-slate-100">
        {value}
      </h1>
      <CustomButton
        text="Mark Done"
        handleCompletedThing={handleCompletedThing}
      />
    </>
  );
};

export default OneThing;
