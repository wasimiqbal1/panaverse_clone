import { FC } from "react";

interface Iprops {
  header: string;
  discription: string;
  number: number;
  haveBorder?: boolean;
}

const Quarterbox: FC<Iprops> = ({ header, discription, number }) => {
  return (
    <div className="border rounded-md flex-1 px-8 py-12 relative flex flex-col justify-center">
      <h4 className="font-bold text-lg ">{header}</h4>
      <p className="mt-2 text-slate-800">{discription}</p>
      <div>
        <span className="absolute -top-10 right-10 text-[170px] font-bold -z-10 text-gray-200">
          {number}
        </span>
      </div>
    </div>
  );
};

export default Quarterbox;
