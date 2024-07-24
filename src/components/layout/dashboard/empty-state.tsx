import Image from "next/image";

export function Empty() {
  return (
    <div className="h-[100%] py-[40px] bg-grey-light">
      <Image
        src="/get-started.svg"
        alt="devlink Logo"
        className="cursor-pointer m-auto"
        width={250}
        height={160}
        priority
      />

      <h2 className="text-[32px] leading-[48px] text-grey-dark text-center mt-[40px] mb-[24px] font-bold">
        {"Let’s get you started"}
      </h2>
      <p className="w-full md:w-[480px] text-grey-default text-center mx-auto pb-[52px]">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
}
