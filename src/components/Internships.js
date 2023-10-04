import React from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { internships } from "../data";

export default function Internships() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
      <TerminalIcon  className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Past Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {internships.map((internship) => (
            <div key={internship.id} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{internship.company}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {internship.role}
                    </span>
                    <span className="text-white-500 text-sm ">
                    {internship.tasks.map((task, index) => (
                        <p key={index}> {task}</p>
                    ))}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}