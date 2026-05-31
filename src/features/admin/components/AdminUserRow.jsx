import { CogIcon } from "@heroicons/react/24/outline";
import USER_ROLES from "../../../constants/userRolesData";
import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import { toPersianNumbers } from "../../../utils/toPersianNumber";
import USER_STATUS from "../constants/usersStatusData";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import AdminChangeUserStatus from "./AdminChangeUserStatus";

function AdminUserRow({ name, email, phoneNumber, role, status, index, _id }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toPersianNumbers(phoneNumber)}</td>
      <td>{USER_ROLES[role].label}</td>
      <td>
        <Tag classes={`mx-auto ${USER_STATUS[status].classes}`}>
          {USER_STATUS[status].title}
        </Tag>
      </td>
      <td>
        <button
          className="cursor-pointer group"
          onClick={() => setIsOpenModal(true)}
        >
          <CogIcon className="size-6 group-hover:text-tag" />
        </button>
        <Modal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          title="تغییر وضعیت پروپوزال"
        >
          <AdminChangeUserStatus
            onClose={() => setIsOpenModal(false)}
            userId={_id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default AdminUserRow;
