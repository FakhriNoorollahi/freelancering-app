import { useParams } from "react-router-dom";
import Table from "../../ui/Table";
import { useOwnerProject } from "../../hooks/useOwner";
import Sppiner from "../../ui/Sppiner";
import OwnerProposalItem from "./OwnerProposalItem";
import { useState } from "react";
import OwnerStatusChangeProposalModal from "./OwnerStatusChangeProposalModal";

function OwnerProject() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [proposalId, setIsProposalId] = useState(null);
  const { id } = useParams();
  const { project, isPending } = useOwnerProject(id);

  return (
    <div>
      <h4 className="mb-4">درخواست های پروژه ی شما</h4>
      {isPending ? (
        <Sppiner />
      ) : project.proposals ? (
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
                {...proposal}
                index={index}
                onOpenModal={() => setIsOpenModal(true)}
                setIsProposalId={() => setIsProposalId(proposal._id)}
              />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>پر.پوزالی وجود ندارد</p>
      )}

      {isOpenModal && (
        <OwnerStatusChangeProposalModal
          setIsOpenModal={setIsOpenModal}
          projectId={id}
          proposalId={proposalId}
        />
      )}
    </div>
  );
}
export default OwnerProject;
