import { useProjectLists } from "../../hooks/useOwner";
import Sppiner from "../../ui/Sppiner";
import Table from "../../ui/Table";
import FreelancerProjectsItem from "./FreelancerProjectsItem";

function FreelancerProjects() {
  const { projects, isPending: isAllProjecting } = useProjectLists();

  return (
    <div className="flex flex-col gap-y-10">
      <>
        <div className="flex justify-between items-center">
          <h3>لیست پروژه ها</h3>
          <div>فیلترها</div>
        </div>
        {isAllProjecting ? (
          <Sppiner />
        ) : projects.length > 0 ? (
          <Table>
            <Table.Header>
              <th>#</th>
              <th>عنوان پروژه</th>
              <th>توضیحات</th>
              <th>دسته بندی</th>
              <th>بودجه</th>
              <th>ددلاین</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </Table.Header>
            <Table.Body>
              {projects.map((project, index) => (
                <FreelancerProjectsItem
                  key={project._id}
                  {...project}
                  index={index + 1}
                />
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p> پروژه ای وجود ندارد</p>
        )}
      </>
    </div>
  );
}

export default FreelancerProjects;
