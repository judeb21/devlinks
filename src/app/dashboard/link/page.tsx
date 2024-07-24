"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { Empty } from "@/components/layout/dashboard/empty-state";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { ReorderItems } from "@/components/layout/link/reorderItems";
import { useAuthContext } from "@/context/AuthContext";
import { PlatformTypes } from "@/types/platform";

export default function Dashboard() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<
    Array<PlatformTypes>
  >([]);
  const { user } = useAuthContext();

  const addPlatforms = () => {
    const platform: PlatformTypes = {
      name: "GitHub",
      value: "github",
      iconName: ""
    };
    setSelectedPlatforms([platform]);
  };

  return (
    <>
      <div>
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

        <div className="md:min-h-[480px] h-[100%] flex flex-col px-[12px] md:px-[40px] bg-white justify-start overflow-scroll relative">
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
                <ReorderItems key={index} item={item} index={index} />
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
