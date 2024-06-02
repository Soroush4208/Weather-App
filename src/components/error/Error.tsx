import ERROR_IMG from "../../assets/gif/404-error-page1.gif";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center align-middle h-[100vh]">
      <p className="text-4xl text-red-600 font-bold font-kalam">
        Page is Not Found !
      </p>
      <img src={ERROR_IMG} alt="" />
      <p className="text-3xl text-red-600 font-bold font-vazir">
        !صفحه مورد نظر پیدا نشد
      </p>
    </div>
  );
}
