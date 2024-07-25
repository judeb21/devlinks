import { Button } from "@/components/ui/button";
import NavLink from "next/link";
import { usePathname } from "next/navigation";
import { LINK_ROUTE } from "@/constants/routes";
import { useAuthContext } from "@/context/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Link } from "@phosphor-icons/react/dist/ssr";

export const PreviewHeader = () => {
  const { user } = useAuthContext();
  const { toast } = useToast();

  const shareLinkCode = () => {
    navigator.clipboard.writeText("E be things");
    toast({
      className: cn(
        "bottom-0 left-0 md:left-[36%] flex fixed md:max-w-[420px] md:bottom-4 bg-grey-dark text-grey-light px-[24px] py-[16px]"
      ),
      action: (
        <div className="w-full flex items-center ml-[-20px]">
          <Link className="mr-2" weight="bold" size={20} />
          <span className="first-letter:capitalize text-grey-light">
            The link has been copied to your clipboard!
          </span>
        </div>
      ),
    });
  };

  return (
    <>
      <header className="md:max-w-[1440px] w-full flex items-start justify-start md:h-[350px] md:bg-primary-purple rounded-[0px_0px_32px_32px]">
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:m-[24px] bg-white px-[24px] py-[16px] md:rounded-[8px] flex justify-between items-center">
            {user !== null ? (
              <Button
                asChild
                variant="outline"
                className="text-primary-purple border-primary-purple"
              >
                <NavLink
                  href={LINK_ROUTE}
                  className={`flex gap-[8px] transition ease-in-out hover:text-primary-purple duration-300`}
                >
                  Back to Editor
                </NavLink>
              </Button>
            ) : (
              <></>
            )}

            <Button
              className="bg-primary-purple text-primary-purple transition ease-in-out hover:bg-primary-light duration-300 text-white"
              onClick={shareLinkCode}
            >
              Share Link
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
