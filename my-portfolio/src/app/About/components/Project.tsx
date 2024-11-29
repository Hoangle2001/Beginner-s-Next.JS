'use client'

export default function Project() {
  return (
    <section className="flex w-1/2  min-h-0 flex-col gap-y-3 mt-6 "> 
        <h1 className="text-2xl font-bold">Project</h1>
        <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
            <div className="flex flex-col space-y-1.5">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight text-base">
                <a href="#" target="_blank" className="inline-flex items-center gap-1 hover:underline">
                  Weather App 
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
                </h3>
                <p className="text-muted-foreground font-mono text-xs print:text-[10px]">The Agile meeting co-pilot that delivers better meetings with less effort</p>
              </div>
            </div>
          <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
            <div className="mt-2 flex flex-wrap gap-1">
              <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-black text-white hover:bg-slate-500 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">
                Front-end Developer
              </div>
            </div>
          </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border border-muted p-3">
            <div className="flex flex-col space-y-1.5">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight text-base">
                <a href="#" target="_blank" className="inline-flex items-center gap-1 hover:underline">
                  Landing Page
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
                </h3>
                <p className="text-muted-foreground font-mono text-xs print:text-[10px]">The Agile meeting co-pilot that delivers better meetings with less effort</p>
              </div>
            </div>
          <div className="text-pretty font-mono text-sm text-muted-foreground mt-auto flex">
            <div className="mt-2 flex flex-wrap gap-1">
              <div className="inline-flex items-center rounded-md border font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-black text-white hover:bg-slate-500 px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:text-[8px] print:leading-tight">
                Front-end Developer
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>

  );
}
