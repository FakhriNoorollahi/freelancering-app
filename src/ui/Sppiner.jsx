function Sppiner({ cssClass }) {
  return (
    <div className="flex items-center justify-center py-1 gap-x-2">
      <div className={`spinner__item ${cssClass}`}></div>
      <div className={`spinner__item ${cssClass}`}></div>
      <div className={`spinner__item ${cssClass}`}></div>
    </div>
  );
}

export default Sppiner;
