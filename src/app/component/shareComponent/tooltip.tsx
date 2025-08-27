import { RecentUploadsinnerDataType } from "@/app/api/apiHooks/useRecentUploads";
import { Button } from "@/components/ui/button";

const Tooltip = (props: RecentUploadsinnerDataType) => {
  const { link, name, summary } = props;
  return (
    <div className="absolute flex flex-col left-[50%] top-[50%] bg-[#171717] z-[7] w-[300px] h-[250px]">
      <div className="p-4 ">
      <div className="text-white bold text-[20px] leading-5">{name}</div>
      <div className="text-white text-[15px] pt-6">{summary}</div>
      </div>
      <Button className="w-full bg-[#5A2E98] rounded-none mt-auto" >watch</Button>
    </div>
  );
};
export default Tooltip;
