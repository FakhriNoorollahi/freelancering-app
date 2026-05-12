import { ThreeDots } from "react-loader-spinner";

function Sppiner({ width = 75, height = 40 }) {
  return (
    <ThreeDots
      height={height}
      width={width}
      radius="9"
      color="var(--color-success)"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
}

export default Sppiner;
