import React from "react";

function Education() {
  return (
    <div className="flex flex-col md:px-20">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold m-5">Education</h1>
      </div>

      <div className="flex flex-wrap justify-around">
        <div className="flex flex-col md:w-2/5 w-4/5 shadow-lg px-10 py-5 my-5 rounded-sm border-2 transform hover:scale-110">
          <h2 className="text-xl font-bold text-blue-500">
            Lebanese American University
          </h2>
          <h3 className="text-lg italic font-light">
            B.E. in Computer Engineering
          </h3>
          <div>
            <spam className="text-white bg-blue-500 rounded-lg px-1 my-1">
              09/2019 - Present
            </spam>
          </div>
          <ul className="list-disc pl-10">
            <li>Hight Distinction: GPA 3.83</li>
            <li>
              Full scholarship by USAID: University Scholarship Program (USP)
            </li>
            <li>
              Placed on the school of engineering distinction list for my
              outstanding academic performance
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:w-2/5 w-4/5 shadow-lg px-10 py-5 my-5 rounded-sm border-2 transform hover:scale-110">
          <h2 className="text-xl font-bold text-blue-500">
            Chekka High School
          </h2>
          <h3 className="text-lg italic font-light">
            Lebanese Baccalaureate, General Science
          </h3>
          <div>
            <spam className="text-white bg-blue-500 rounded-lg px-1 my-1">
              09/2016 - 06/2019
            </spam>
          </div>
          <ul className="list-disc pl-10">
            <li>Distinction: 17.79/20</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
