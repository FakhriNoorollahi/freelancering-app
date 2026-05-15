import Table from "../../ui/Table";
import { EyeIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Tag from "../../ui/Tag";

function OwnerProjectsItem() {
  return (
    <Table.Row>
      <td>2</td>
      <td className="w-max-60">
        عنوان پروژه نماینده یک دو وژه نماینده یک دو سه چهار
      </td>
      <td>دسته بندی</td>
      <td>290000</td>
      <td>{new Date().toLocaleString("fa")}</td>
      <td className="w-max-40">
        <div className="flex items-center gap-x-2">
          <Tag>Html</Tag>
          <Tag>Css</Tag>
        </div>
      </td>
      <td>فریلنسر</td>
      <td>وضعیت</td>
      <td>
        <div className="flex items-center justify-between gap-x-3">
          <button className="cursor-pointer">
            <TrashIcon className="size-5 hover:text-danger" />
          </button>
          <button className="cursor-pointer">
            <PencilIcon className="size-5 hover:text-success" />
          </button>
        </div>
      </td>
      <td>
        <button className="cursor-pointer">
          <EyeIcon className="size-5 hover:text-tag" />
        </button>
      </td>
    </Table.Row>
  );
}

export default OwnerProjectsItem;
