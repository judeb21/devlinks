"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Empty } from "@/components/layout/dashboard/empty-state";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { ReorderItems } from "@/components/layout/link/reorderItems";
import { useAuthContext } from "@/context/AuthContext";
import { PlatformTypes } from "@/types/platform";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import RightCaret from "../../../../public/right-caret.svg";
import { platforms } from "@/helpers/platform";
import { platformsIcons } from "@/helpers/platformIcons";

export default function Dashboard() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<
    Array<PlatformTypes>
  >([]);
  const { user } = useAuthContext();

  const addPlatforms = () => {
    const platform: PlatformTypes = {
      name: "",
      value: "",
      iconName: "",
      id: selectedPlatforms.length + 1,
    };
    setSelectedPlatforms([...selectedPlatforms, platform]);
  };

  const removeLink = (id: number | string) => {
    setSelectedPlatforms(
      selectedPlatforms.filter((platform) => platform.id !== id)
    );
  };

  const setPlatform = (id: number | string, value: string) => {
    let filteredPlatform: Array<PlatformTypes> = selectedPlatforms.filter(
      (item) => item.id !== id
    );

    console.log("Value", value);

    let platformIcon = platformsIcons.filter(item => item.name === value);

    console.log("Icon", platformIcon);

    const newPlatform = {
      name: value,
      value: "",
      iconName: platformIcon[0]?.iconName,
      id: Number(id)
    } as PlatformTypes

    setSelectedPlatforms([...filteredPlatform, newPlatform]);

    return;
  };

  const setPlatformUrl = (id: number | string, value: string) => {
    let platform = selectedPlatforms.find(
      (item) => item.id === id
    ) as PlatformTypes;

    let selectedPlatform: Array<PlatformTypes> = selectedPlatforms.filter(
      (item) => item.id !== id
    );

    const newPlatform = {
      name: platform.name,
      value: value,
      iconName: platform.iconName,
      id: Number(id)
    } as PlatformTypes

    setSelectedPlatforms([...selectedPlatform, newPlatform]);
  };

  return (
    <>
      <div className="w-[0px] hidden md:w-full md:block md:max-w-[580px] md:p-[100px] md:rounded-[12px] bg-white flex items-center justify-center relative">
        <svg
          width="308"
          height="632"
          viewBox="0 0 308 632"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative overflow-scroll"
        >
          <path
            d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
            stroke="#737373"
          />
          <path
            d="M12 55.5C12 30.9233 31.9233 11 56.5 11H80.5C86.8513 11 92 16.1487 92 22.5C92 30.5081 98.4919 37 106.5 37H201.5C209.508 37 216 30.5081 216 22.5C216 16.1487 221.149 11 227.5 11H251.5C276.077 11 296 30.9233 296 55.5V576.5C296 601.077 276.077 621 251.5 621H56.5C31.9233 621 12 601.077 12 576.5V55.5Z"
            fill="white"
            stroke="#737373"
          />
        </svg>
        <div className="absolute w-[0] md:w-[250px] max-h-[560px] h-[100%] top-[140px] md:auto left-[22%]">
          <div className="relative hidden md:flex h-[100%] overflow-scroll flex flex-col justify-start items-center">
            <div className="mt-[40px]">
              {user?.photoURL ? (
                <Image
                  src={`${user?.photoURL}`}
                  alt="upload image"
                  className="cursor-pointer w-[96px] rounded-[100%] h-[96px] object-cover border-[4px] border-primary-purple"
                  width={96}
                  height={96}
                />
              ) : (
                <Skeleton className="h-[96px] w-[96px] rounded-full bg-[#EEEEEE]" />
              )}
            </div>

            <div className="mt-[25px] mb-[13px]">
              {user?.displayName ? (
                <h4 className="text-grey-dark text-[18px]">
                  {user?.displayName}
                </h4>
              ) : (
                <Skeleton className="h-[16px] w-[160px] rounded-full bg-[#EEEEEE]" />
              )}
            </div>

            <div className="mb-[56px]">
              {user?.email ? (
                <p className="text-grey-default text-[14px]">{user?.email}</p>
              ) : (
                <Skeleton className="h-[8px] w-[72px] rounded-full bg-[#EEEEEE]" />
              )}
            </div>

            {selectedPlatforms.map((items, index) => {
              return (
                <>
                  <div className="mb-[20px]" key={index}>
                    {items.name !== "" ? (
                      <>
                        <Link
                          className={`${items.name} w-[237px] flex justify-between items-center p-[16px] rounded-[8px] cursor-pointer`}
                          href={items.value as string}
                          target="_blank"
                        >
                          <div className="flex gap-[8px]">
                            <Image
                              src={items.iconName}
                              height={20}
                              width={20}
                              alt="Platform icon"
                            />
                            <h4 className="text-white text-[15px]">{items.name}</h4>
                          </div>
                          <div>
                            <Image
                              src={RightCaret}
                              height={16}
                              width={16}
                              alt="right caret icon to view link"
                            />
                          </div>
                        </Link>
                      </>
                    ) : (
                      <Skeleton className="h-[44px] w-[237px] rounded-[8px] bg-[#EEEEEE]" />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full md:w-full rounded-[12px] bg-white">
        <div className="pt-[40px] md:p-[40px] p-[12px]">
          <h2 className="font-bold text-grey-dark text-[32px] leading-[48px] mb-[9px]">
            Customize your links
          </h2>
          <p className="leading-[24px] text-grey-default">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <Button
            variant="outline"
            className="border-primary-purple text-primary-purple transition ease-in-out hover:bg-primary-light duration-300 w-full font-[600] leading-[24px] mt-[40px]"
            onClick={addPlatforms}
          >
            <Plus size={16} weight="thin" /> Add new link
          </Button>
        </div>

        <div className="md:max-h-[480px] h-[480px] flex flex-col px-[12px] md:px-[40px] bg-white justify-start overflow-scroll relative">
          {selectedPlatforms.length < 1 ? (
            <Empty />
          ) : (
            <Reorder.Group
              values={selectedPlatforms}
              onReorder={setSelectedPlatforms}
              axis="y"
              layoutScroll
              style={{ overflowY: "scroll" }}
            >
              {selectedPlatforms.map((item, index) => (
                <ReorderItems
                  key={item.id}
                  item={item}
                  index={index}
                  removeLink={removeLink}
                  setPlatform={setPlatform}
                  setPlatformUrl={setPlatformUrl}
                />
              ))}
            </Reorder.Group>
          )}
        </div>

        <div className="border-t-[1px] border-grey-border px-[40px] my-[24px] pb-0"></div>

        <div className="px-[40px] pb-[24px] flex justify-end">
          <Button
            className="w-[90px] bg-primary-purple transition ease-in-out hover:bg-primary-hover disabled:bg-primary-light text-white duration-300"
            disabled={selectedPlatforms.length < 1}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
