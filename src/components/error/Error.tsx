import ERROR_IMG from "../../assets/gif/404-error-page1.gif";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center align-middle h-[100vh]">
      <img src={ERROR_IMG} alt="" />
    </div>
  );
}
