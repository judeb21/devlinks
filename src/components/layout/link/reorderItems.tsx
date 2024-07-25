import { Label } from "@/components/ui/label";
import { Reorder, useDragControls } from "framer-motion";
import Image from "next/image";
import { GithubLogo, Link } from "@phosphor-icons/react/dist/ssr";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlatformTypes } from "@/types/platform";
import { platforms } from "@/helpers/platform";

interface Props {
  item: PlatformTypes;
  index: number;
}

export function ReorderItems({ item, index }: Props) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={index}
      value={item}
      dragListener={false}
      dragControls={controls}
    >
      <div className="bg-grey-light p-[20px] rounded-[12px] mb-[24px]">
        <div className="flex justify-between items-center">
          <div
            className="flex justify-start items-center gap-[8px] cursor-pointer"
            onPointerDown={(event) => controls.start(event)}
          >
            <Image
              src="/reorder.svg"
              alt="reorder icon"
              className="cursor-pointer"
              width={12}
              height={6}
              onPointerDown={(event) => controls.start(event)}
            />
            <p className="text-grey-default font-bold leading-[24px] pointer-events-none">
              Link #{++index}
            </p>
          </div>
          <p className="text-grey-default font-normal leading-[24px] cursor-pointer">
            Remove
          </p>
        </div>

        <div className="grid w-full max-w-full items-center gap-1.5 mt-[24px]">
          <Label
            htmlFor="link"
            className="text-grey-dark text-[12px] font-normal"
          >
            Platform
          </Label>
          <div className="flex w-full max-w-full items-center gap-[12px]">
            <Select>
              <SelectTrigger className="w-full h-[48px] rounded-[8px] border-[1px] border-grey-border bg-white focus:border-[#633CFF] focus:ring-1 focus:ring-transparent focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)] text-grey-dark">
                <SelectValue
                  className="text-grey-dark"
                  placeholder="Select platform"
                />
              </SelectTrigger>
              <SelectContent className="bg-white z-10 p-[16px]">
                <SelectGroup className="p-0 m0">
                  {platforms.map((platform, index) => {
                    return (
                      <>
                        <SelectItem
                          value={platform.value}
                          className="text-grey-dark leading-[24px]"
                          key={index}
                        >
                          <div className="flex items-center text-grey-dark leading-[24px] gap-[12px]">
                            <Image
                              src={platform.iconName}
                              alt="platform icon"
                              width={16}
                              height={16}
                            />
                            {platform.name}
                          </div>
                        </SelectItem>
                      </>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex w-full max-w-full items-center h-[48px] gap-[12px] rounded-[8px] border-[1px] border-grey-border bg-white px-[16px] py-[12px]">
            <Link size={16} weight="thin" color="rgb(var(--grey))" />
            <Input
              type="text"
              placeholder={`e.g. https://www.${item.value}.com/johnappleseed`}
              autoComplete="off"
              autoCapitalize="off"
              className="border-0 focus:outline-none focus:border-white focus:ring-1 focus:ring-transparent pl-0 ml-0 text-grey-dark"
            />
          </div>
        </div>
      </div>
    </Reorder.Item>
  );
}
