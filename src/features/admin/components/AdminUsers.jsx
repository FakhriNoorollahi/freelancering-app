import Sppiner from "@/ui/Sppiner";
import useUsers from "../hooks/useUsers";
import AdminUserRow from "./AdminUserRow";
import Table from "@/ui/Table";
import Empty from "@/ui/Empty";

function AdminUsers() {
  const { isUsering, users } = useUsers();

  return (
    <div className="flex flex-col gap-y-10 h-full">
      <>
        <div className="flex justify-between items-center flex-wrap gap-y-2">
          <p className="text-lg font-semibold lg:text-2xl lg:font-bold">
            کاربران
          </p>
        </div>
        {isUsering ? (
          <Sppiner />
        ) : users?.length > 0 ? (
          <Table>
            <Table.Header>
              <th>#</th>
              <th>نام</th>
              <th>ایمیل</th>
              <th>شماره موبایل</th>
              <th>نقش</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </Table.Header>
            <Table.Body>
              {users.map((user, index) => (
                <AdminUserRow key={user._id} {...user} index={index + 1} />
              ))}
            </Table.Body>
          </Table>
        ) : (
          <div className="flex-1 center-all">
            <Empty title="کاربری" />
          </div>
        )}
      </>
    </div>
  );
}

export default AdminUsers;
