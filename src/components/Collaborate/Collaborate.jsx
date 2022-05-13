import { hands } from "../../assets";
import CustomInput from "../CustomInput/CustomInput";
import { CustomButton } from "../reusables";
import "./Collaborate.scss";

const Collaborate = ({ darkmode }) => {
  return (
    <section className={`collaborate ${darkmode ? "dark" : ""}`}>
      <div className="lg:flex lg:px-30 gap-10">
        <div className="collaborate--image hidden lg:block lg:w-2/4 lg:mt-28 lg:pl-10">
          <img src={hands} alt="hands" className="" />
        </div>
        <div className="collaborate--container lg:w-2/4">
          <div className="collaborate--title pt-6">
            <h2 className="mb-7">
              JOIN THE NERDYEYE <span> NETWORK</span>
            </h2>
            <p className="mr-10 md:block">
              Thank you for showing interest in the Nerdy Eye’s Recruitment
              program. Please fill the form below and we will connect you with
              your ideal employers as soon as possible.
            </p>
          </div>
          <form>
            <CustomInput label={"Role"} inputClass="flex flex-col mt-20" />
            <CustomInput
              label={"Years Of Experience"}
              inputClass="flex flex-col mt-14"
            />
            <CustomInput
              label={"Work type"}
              inputClass="flex flex-col  mt-14"
            />
            <CustomButton className={"mt-14"}>Submit</CustomButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
