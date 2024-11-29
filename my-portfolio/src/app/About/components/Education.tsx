'use client'

export default function Education() {
  return (
    <section className="flex w-1/2  min-h-0 flex-col gap-y-3 mt-6 "> 
        <h2 className="text-xl font-bold">Education</h2>
        <div className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">Greenwich University</h3>
              <div className="text-sm tabular-nums text-gray-500">
                2019 - 2023
              </div>
            </div>
          </div>
        <div className="text-pretty font-mono text-sm text-muted-foreground mt-2 print:text-[12px]">Bachelor's Degree in Control systems engineering and Robotics</div>  
        </div>
    </section>

  );
}
