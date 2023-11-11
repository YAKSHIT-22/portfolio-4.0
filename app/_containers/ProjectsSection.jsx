import demo from "@/app/_assets/dummy.webp";
const projects = [
  {
    id: 1,
    title: "Demo project",
    description: "Showcase your property online with stunning design",
    image: demo.src,
  },
  {
    id: 2,
    title: "Demo project",
    description: "Showcase your property online with stunning design",
    image: demo.src,
  },
  {
    id: 3,
    title: "Demo project",
    description: "Showcase your property online with stunning design",
    image: demo.src,
  },
  {
    id: 4,
    title: "Demo project",
    description: "Showcase your property online with stunning design",
    image: demo.src,
  },
  {
    id: 5,
    title: "Demo project",
    description: "Showcase your property online with stunning design",
    image: demo.src,
  },
  {
    id: 6,
    title: "Demo project",
    description: "Showcase your property online with stunning design",
    image: demo.src,
  },
];
const ProjectsSection = () => {
  return (
    <section id="work" className="w-full flex items-center justify-center h-full border-r border-l border-[#2e2e2e] p-2 sm:p-8">
      <div className="flex items-center justify-center w-full pt-14 h-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-full flex-col gap-[4rem]">
          <div className="flex items-center justify-center flex-col gap-[2.5rem] w-full">
            <div className="w-full flex items-start justify-start flex-col text-white uppercase">
              <h1 className="font-mattone font-bold text-2xl xs:text-3xl s:text-4xl md:text-5xl lg:text-6xl xl:text-[5.3rem]">
                Powerful Branding, stunning websites
              </h1>
            </div>
            <div className="grid md:grid-cols-3 items-center justify-start gap-[1.4rem] s:grid-cols-2 grid-cols-1 border-b border-[#2e2e2e]">
              {projects.map((project)=>(<div key={project.id} className="flex items-start justify-start flex-col gap-3 mb-12">
                <div className="flex items-center justify-center w-full h-full overflow-hidden">
                  <img src={project.image} alt="demo" className="object-cover hover:scale-110 transition ease-in-out duration-700"/>
                </div>
                <div className="flex items-start justify-start w-full">
                  <p className="uppercase font-mattone font-bold text-xl lg:text-2xl xl:text-4xl text-white">
                    {project.title}
                  </p>
                </div>
                <div className="flex items-start justify-start w-[75%] xl:w-[55%]">
                  <p className="uppercase text-[#878787] font-semibold text-sm xl:text-base">
                    {project.description}
                  </p>
                </div>
              </div>))}
            </div>
            <div id="services" className="flex items-center justify-center w-full lg:p-24">
              <div className="flex items-center justify-center w-full flex-col gap-2">
               <div className="flex flex-wrap items-center justify-center gap-2">
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">01</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">WEB DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">02</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">UI DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">03</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">WEB DEVELOPMENT</p>
                 </div>
               </div>
               <div className="flex flex-wrap items-center justify-center gap-2">
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">01</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">WEB DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">02</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">UI DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">03</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">GRAPHIC DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">04</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">WEB DEVELOPMENT</p>
                 </div>
               </div>
               <div className="flex flex-wrap items-center justify-center gap-2">
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">01</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">WEB DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">02</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">UI DESIGN</p>
                 </div>
                 <div className="flex items-center justify-center py-4 px-9 border-2 gap-2 border-[#2e2e2e] rounded-full  text-white">
                  <sup className="font-mattone text-sm sm:text-base">03</sup>
                  <p className="font-mattone font-bold text-sm sm:text-lg">WEB DEVELOPMENT</p>
                 </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;