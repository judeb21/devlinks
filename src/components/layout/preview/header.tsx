import { Button } from "@/components/ui/button";
import NavLink from "next/link";
import { usePathname } from "next/navigation";
import { LINK_ROUTE } from "@/constants/routes";
import { useAuthContext } from "@/context/AuthContext";

export const PreviewHeader = () => {
  const { user } = useAuthContext();

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

            <Button className="bg-primary-purple text-primary-purple transition ease-in-out hover:bg-primary-light duration-300 text-white">
              Share Link
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
