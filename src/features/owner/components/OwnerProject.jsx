import Table from "../../../ui/Table";
import Sppiner from "../../../ui/Sppiner";
import { useProject } from "../hooks/useProject";
import OwnerProposalItem from "./OwnerProposalItem";
import ButtonIcon from "../../../ui/ButtonIcon";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import useMoveBack from "../../../hooks/useMoveBack";

function OwnerProject() {
  const { project, isProjecting } = useProject();
  const moveBack = useMoveBack();

  return (
    <div>
      <div className="flex items-center gap-x-4 mb-10">
        <ButtonIcon
          onClick={moveBack}
          IconComponent={ArrowRightIcon}
          iconClasses="size-6 group-hover:text-tag"
          buttonClasses="hover:bg-tag/5 hover:border-tag/5"
        />
        <h3>درخواست های پروژه ی شما</h3>
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
              <OwnerProposalItem
                key={proposal._id}
                proposal={proposal}
                index={index}
              />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>پر.پوزالی وجود ندارد</p>
      )}
    </div>
  );
}
export default OwnerProject;
