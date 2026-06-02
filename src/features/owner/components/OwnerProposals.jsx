import { Navigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useProject } from "../hooks/useProject";
import OwnerProposalRow from "./OwnerProposalRow";
import useMoveBack from "@/hooks/useMoveBack";
import ButtonIcon from "@/ui/ButtonIcon";
import Table from "@/ui/Table";
import Empty from "@/ui/Empty";
import Sppiner from "@/ui/Sppiner";

function OwnerProposals() {
  const { project, isProjecting } = useProject();
  const moveBack = useMoveBack();

  if (!isProjecting && !project) return <Navigate to="/404" />;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center flex-wrap gap-y-2  gap-x-4 mb-10">
        <ButtonIcon
          onClick={moveBack}
          IconComponent={ArrowRightIcon}
          iconClasses="size-6 group-hover:text-tag"
          buttonClasses="hover:bg-tag/5 hover:border-tag/5"
        />
        <p className="text-lg font-semibold lg:text-2xl lg:font-bold">
          درخواست های پروژه ی شما
        </p>
      </div>
      {isProjecting ? (
        <Sppiner />
      ) : project.proposals.length ? (
        <Table>
          <Table.Header>
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            {project.proposals.map((proposal, index) => (
              <OwnerProposalRow
                key={proposal._id}
                proposal={proposal}
                index={index}
              />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className="center-all flex-1">
          <Empty title="پروپوزالی" />
        </div>
      )}
    </div>
  );
}
export default OwnerProposals;
