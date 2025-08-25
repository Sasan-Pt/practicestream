import { RecentUploadsinnerDataType } from "@/app/api/apiHooks/useRecentUploads";

const Tooltip = (props: RecentUploadsinnerDataType) => {
  const { link, name, summary } = props;
  return (
    <div className="absolute left-[50%] top-[50%] p-4 bg-[#171717] z-[7]">
      <div className="text-white bold text-[20px] leading-5">{name}</div>
      <div className="text-white">{summary}</div>
    </div>
  );
};
export default Tooltip;
