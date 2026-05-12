import { PlusIcon } from "@heroicons/react/16/solid";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import { useAddProject } from "../../hooks/useOwner";

function OwnerProjects() {
  //   const { data: allProjects, isPending: isProjecting } = useOwnerProjects();
  const { mutateAsync: createProject, isPending: isCreatingProject } =
    useAddProject();

  const onAddProject = async () => {
    console.log("add");
    const d = {
      title: "اپلیکیشن موبایل",
      description: "first project in this website",
      budget: 25000,
      category: 1,
      tags: ["android", "kottlin"],
      deadline: new Date(2027, 2, 10, 2, 30).toString(),
      owner: "69ffa2cf28faa4103b995dc3",
    };
    console.log(d);
    const res = await createProject({ ...d });

    console.log(res);
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex justify-between items-center">
        <h3>پروژه های شما</h3>
        <Button
          classes="flex justify-between items-center gap-x-2"
          onClick={onAddProject}
        >
          <PlusIcon className="size-5" />
          <span className="text-sm">اضافه کردن پروژه</span>
        </Button>
      </div>
      <div className="border border-border/35 rounded-2xl px-6 bg-white overflow-x-auto">
        <Table>
          <Table.Header>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <td>1</td>
              <td>عنوان پروژه نماینده یک دو سه چهار</td>
              <td>دسته بندی</td>
              <td>بودجه</td>
              <td>ددلاین</td>
              <td>تگ ها</td>
              <td>فریلنسر</td>
              <td>وضعیت</td>
              <td>عملیات</td>
              <td>درخواست ها</td>
            </Table.Row>
            <Table.Row>
              <td>2</td>
              <td>عنوان پروژه نماینده یک دو سه چهار</td>
              <td>دسته بندی</td>
              <td>بودجه</td>
              <td>ددلاین</td>
              <td>تگ ها</td>
              <td>فریلنسر</td>
              <td>وضعیت</td>
              <td>عملیات</td>
              <td>درخواست ها</td>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default OwnerProjects;
