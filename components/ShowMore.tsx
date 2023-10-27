"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const isShowingMore = pageNumber > 1;
  const handleNavigation = () => {
    const newPageNumber = isShowingMore ? pageNumber - 1 : pageNumber + 1;
    const newLimit = newPageNumber * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));

    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title={`Show ${!isShowingMore ? "More" : "Less"}`}
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
