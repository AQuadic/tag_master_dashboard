import { getLinks } from "@/api/links";
import { useAuthStore } from "@/stores/userStore";
import EditIcon from "../icons/myaccount/EditIcon";
import EditLinks from "./EditLinks";
// import EditLink from './EditLink'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../icons/general/Spinner";
import AddingLink from "./AddingLink";
import emptyLinks from "/images/Account/emptyLinks.png";
import Cookies from "js-cookie";

const ManageLinks = () => {
  const { user } = useAuthStore();
  const [open, setOpen] = useState(false);
  const profileId = Cookies.get("profile_id");
  const [editOpen, setEditOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const {
    data: links = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-links", profileId],
    queryFn: () => getLinks(profileId),
    enabled: !!profileId,
  });

  const handleAddSuccess = () => {
    setOpen(false);
    refetch();
  };

  const handleEditSuccess = () => {
    setEditOpen(false);
    setSelectedLink(null);
    refetch();
  };

  if (isLoading) return <Spinner />;

  return (
    <section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="ml-auto flex">
          <div className="mt-7 flex justify-end">
            <button className="w-[140px] h-14 border-2 border-[#002847] rounded-[50px]">
              Add link
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="lg:!max-w-[900px] w-full lg:h-auto h-[500px] overflow-auto">
          <DialogHeader>
            <DialogDescription>
              <AddingLink onSuccess={handleAddSuccess} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {links.length === 0 ? (
        <div className="flex justify-center">
          <img
            src={emptyLinks}
            className="md:w-[600px] w-full md:h-[600px] h-full"
            alt="Empty state"
          />
        </div>
      ) : (
        <div className="mt-[28px]">
          {links.map((data) => (
            <div
              key={data.id}
              className="w-full h-full bg-[#FFFFFF] rounded-[12px] py-[29px] md:px-[38px] px-4 mt-4 flex md:flex-row flex-col md:items-center justify-between"
              style={{ boxShadow: "0px 1px 2px 0px #00000040" }}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <img
                  src={data.image?.url}
                  alt={data.name}
                  className="w-[40px] h-[40px] object-contain"
                />
                <div className="text-[#000000] text-lg">
                  {data.name || "Unnamed Link"} <br />
                </div>
                {data.link && (
                  <p className="text-[#002847] text-base font-medium mt-4 md:mt-0 break-all">
                    {data.link}
                  </p>
                )}
              </div>

              <button
                className="flex items-center justify-center gap-2 w-[78px] h-10 border rounded-[25px] mt-4 md:mt-0 cursor-pointer"
                onClick={() => {
                  setSelectedLink(data);
                  setEditOpen(true);
                }}
              >
                <p className="text-[#002847] text-base">Edit</p>
                <EditIcon />
              </button>
            </div>
          ))}
        </div>
      )}

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="lg:!max-w-[900px] w-full lg:h-auto h-[500px] overflow-auto">
          <DialogHeader>
            <DialogDescription>
              {selectedLink && (
                <EditLinks linkData={selectedLink} onSuccess={handleEditSuccess} />
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};
export default ManageLinks;
