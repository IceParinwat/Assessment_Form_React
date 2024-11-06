// นำภาพเข้ามา
import IceImage from "../assets/IceParin.jpg";

export default function Owner() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-y-10">
      <h1 className="text-center text-4xl font-bold mt-10 ">
        IceParinwat - Group H - 11 - JSD8
      </h1>
      {/* ใช้แสดงภาพ */}
      <img className="w-52 rounded-full" src={IceImage} alt="IceParinwat" />
      <h2 className="font-semibold text-2xl">About Me</h2>
      <p className="w-3/5 text-justify">
        Junior Software Developer with comprehensive training from Generation
        Boot-camp. Bringing 8 years of sales experience and 1 year as IT
        Support, complemented by ongoing studies in Computer Science. Known for
        strong teamwork, customer focus, achievement motivation, integrity,
        problem-solving skills, and the ability to handle pressure. Passionate
        about pursuing a career as a Full Stack Developer to leverage my diverse
        skill set and contribute to organizational success.
      </p>
    </div>
  );
}
